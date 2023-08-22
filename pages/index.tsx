import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Layout from "@/components/layout/layout";
import { Visual } from "@/components/layout/visual";
import { getNotionData, formatToKRW } from "@/utils/functions";
import { projectId, budgetId, readingId } from "@/utils/variable";
import Card from "@/components/Card";
import Section from "@/components/section";
import { getPortfolioData, getBookoData } from "@/function/notion";
import { NotionBookProps } from "@/types/notion";
import { PortfolioUl } from "./portfolio";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BudgetSection = ({ data }: { data: Object[] }) => {
    console.log(process.env.NODE_ENV);
    const monthData = {} as any;
    const monthlyData = {} as any;
    data.length
        ? data.forEach((item: any) => {
              const year = new Date(
                  item.properties.Date.date.start
              ).getFullYear();
              let month =
                  new Date(item.properties.Date.date.start).getMonth() + 1;
              const monthFormat = month < 10 ? "0" + month : String(month);

              monthlyData[year + "-" + monthFormat]
                  ? monthlyData[year + "-" + monthFormat].push(item)
                  : (monthlyData[year + "-" + monthFormat] = [item]);
          })
        : null;

    const monthLebel = Object.keys(monthlyData);
    const monthSeries = Object.values(monthlyData).map((item: any) => {
        return item.reduce(
            (acc: any, cur: any) => acc + cur.properties.Amount.number,
            0
        );
    });

    const nowMonthData = monthlyData[Object.keys(monthlyData)[0]];

    nowMonthData
        ? nowMonthData.forEach((item: any) => {
              const category = item.properties.Category.select.name;
              monthData[category] = monthData[category]
                  ? monthData[category] + item.properties.Amount.number
                  : item.properties.Amount.number;
          })
        : null;

    const totalAmout = nowMonthData
        ? nowMonthData.reduce(
              (acc: any, cur: any) => acc + cur.properties.Amount.number,
              0
          )
        : null;

    const engelCoefficient = totalAmout
        ? Math.round((monthData["음식"] / totalAmout) * 100)
        : null;

    let topCategory = { name: "", amount: 0 };
    monthData
        ? Object.keys(monthData).forEach((key) => {
              if (topCategory === null || monthData[key] > topCategory.amount) {
                  topCategory = {
                      name: key,
                      amount: monthData[key],
                  };
              }
          })
        : null;

    let topItem = { name: "", amount: 0 };
    nowMonthData
        ? nowMonthData.forEach((item: any) => {
              if (
                  topItem === null ||
                  item.properties.Amount.number > topItem.amount
              ) {
                  topItem = {
                      name: item.properties.Expense.title[0].plain_text,
                      amount: item.properties.Amount.number,
                  };
              }
          })
        : null;

    const monthState = {
        options: {
            chart: {
                id: "budgetChart",
            },
            labels: Object.keys(monthData),
            tooltip: {
                y: {
                    formatter: (value: number) => formatToKRW(value),
                },
            },
            legend: {
                show: false,
            },
        },
        series: Object.values(monthData),
    };

    const monthlyState = {
        options: {
            chart: {
                id: "budgetChart",
                toolbar: {
                    show: false,
                },
            },
            labels: monthLebel,
            tooltip: {
                y: {
                    formatter: (value: number) => formatToKRW(value),
                },
            },
            legend: {
                show: false,
            },
            yaxis: {
                labels: {
                    formatter: (value: number) => formatToKRW(value),
                },
            },
        },
        series: [
            {
                name: "총 지출",
                data: monthSeries
                    .map((item: any, index: number) => {
                        return {
                            label: "ssss",
                            x: monthLebel[index],
                            y: item,
                        };
                    })
                    .reverse(),
            },
        ],
    };

    return (
        <Section
            title={`💳 저는 ${
                new Date().getMonth() + 1
            }월, 이런 곳에 소비했어요`}
        >
            <>
                {data.length ? (
                    <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                        <div className="flex flex-col border border-gray-100 shadow-md">
                            <h3 className="mx-4 mt-4 pb-2 border-b border-gray-300 text-sm text-gray-500 text-right">
                                월별 지출 통계
                            </h3>
                            <div className="flex flex-col items-center mt-auto pt-6 md:flex-row md:pt-0">
                                <Chart
                                    className="flex flex-col justify-center"
                                    options={monthState.options as any}
                                    series={monthState.series as any}
                                    type="pie"
                                    width={200}
                                    height={200}
                                />
                                <ul className="flex flex-col justify-end grow w-full m-2 p-2 text-right text-gray-500 text-sm">
                                    <li className="mb-1 pb-1 border-b border-gray-400 border-dashed">
                                        <h3 className="font-black mb-1">
                                            가장 큰 지출 분야
                                        </h3>
                                        <div className="flex justify-end">
                                            <span>{topCategory.name}</span>
                                            <span className="mr-2">:</span>
                                            <span>
                                                {formatToKRW(
                                                    topCategory.amount
                                                )}
                                            </span>
                                        </div>
                                    </li>
                                    <li className="mb-1 pb-1 border-b border-gray-400 border-dashed">
                                        <h3 className="font-black mb-1">
                                            가장 큰 지출 항목
                                        </h3>
                                        <div className="flex justify-end whitespace-nowrap">
                                            <span>{topItem.name}</span>
                                            <span className="mr-2">:</span>
                                            <span>
                                                {formatToKRW(topItem.amount)}
                                            </span>
                                        </div>
                                    </li>
                                    <li className="mb-1 pb-1 border-b border-gray-400 border-dashed">
                                        <div className="flex justify-between">
                                            <h3 className="mb-1">엥겔지수</h3>
                                            <span className="w-1/3">
                                                {engelCoefficient}%
                                            </span>
                                        </div>
                                    </li>
                                    <li className="pb-0.5 text-sm border-b border-gray-400 border-dashed">
                                        <div className="flex justify-between  border-b border-gray-400 border-dashed">
                                            <h3 className="mb-1">총 지출</h3>
                                            <span className="w-1/3">
                                                {formatToKRW(totalAmout)}
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col justify-end grow border border-gray-100 shadow-md">
                            <h3 className="mx-4 mt-4 pb-2 border-b border-gray-300 text-sm text-gray-500 text-right">
                                월별 지출 추이
                            </h3>
                            <Chart
                                options={monthlyState.options as any}
                                series={monthlyState.series as any}
                                type="line"
                                width="100%"
                                height={200}
                                className="flex flex-col justify-end w-full "
                            />
                        </div>
                    </div>
                ) : null}
            </>
        </Section>
    );
};

const BookSection = () => {
    const [bookList, setBookList] = useState<any>([]);

    useEffect(() => {
        getNotionData(readingId).then((data) => {
            setBookList(data);
        });
    }, []);
    return (
        <Section
            title={`📕 저는 ${new Date().getMonth() + 1}월, 이런 책을 읽었어요`}
        >
            <>
                {bookList.length ? (
                    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                        {bookList.slice(0, 4).map((book: NotionBookProps) => {
                            const { title, src, author } = getBookoData(book);
                            return (
                                <li key={book.id}>
                                    <Card
                                        title={title}
                                        src={src}
                                        subText={author}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                ) : null}
            </>
        </Section>
    );
};

const PortfolioSection = () => {
    const [portfolioList, setPortfolioList] = useState<any>([]);
    useEffect(() => {
        getNotionData(projectId).then((data) => {
            setPortfolioList(data);
        });
    }, []);
    return (
        <Section title="🧑🏻‍💻 저는 최근에 이런 작업을 했어요">
            <PortfolioUl>
                {portfolioList.length
                    ? portfolioList.slice(0, 3).map((portfolio: any) => {
                          const { title, type, src } =
                              getPortfolioData(portfolio);
                          return (
                              <li
                                  className="sm:last:hidden lg:last:block"
                                  key={portfolio.id}
                              >
                                  <Link href={`/portfolio/?id=${portfolio.id}`}>
                                      <Card
                                          title={title}
                                          subText={type}
                                          src={src}
                                      />
                                  </Link>
                              </li>
                          );
                      })
                    : [1, 2, 3].map((item) => {
                          return (
                              <li key={item}>
                                  <Card />
                              </li>
                          );
                      })}
            </PortfolioUl>
        </Section>
    );
};

const MainVisual = () => {
    const [creativeWidth, setCreativeWidth] = useState<number>(300);
    const [proWidth, setProWidth] = useState<number>(300);
    const photoWidth = 300;
    const [x, setX] = useState<number>(0);

    const mouseMove = (e: any) => {
        if (window.innerWidth < 768) return;
        const centerX = window.innerWidth / 2;
        const point = (centerX - e.pageX) / 2;
        setProWidth(() => photoWidth + point);
        setCreativeWidth(() => photoWidth - point);
        setX(() => point / 20);
    };

    return (
        <Visual>
            <div
                className="relative flex justify-center md:overflow-hidden md:h-[438px]"
                onMouseMove={mouseMove}
                onMouseLeave={() => {
                    setCreativeWidth(photoWidth);
                    setProWidth(photoWidth);
                    setX(0);
                }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: (proWidth - 0) / (600 - 0),
                    }}
                    className="absolute flex flex-col items-center justify-center left-0 w-1/2 h-full md:pb-28 md:pr-32 md:relative"
                >
                    <motion.div
                        animate={{ x: -(proWidth / 20) }}
                        transition={{ type: "just" }}
                        className="absolute inset-0 right-10 w-full h-full bg-cover bg-no-repeat bg-[url('/images/creative_bg.webp')] bg-right-bottom md:bg-contain"
                    ></motion.div>
                    <h2 className="hidden relative font-black whitespace-nowrap md:block md:text-4xl">
                        HOMIN JUNG
                    </h2>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: (creativeWidth - 0) / (600 - 0),
                    }}
                    className="absolute flex flex-col items-center justify-center right-0 w-1/2 h-full md:pb-28 md:pl-32 md:relative"
                >
                    <motion.div
                        animate={{ x: -(proWidth / 20) }}
                        transition={{ type: "just" }}
                        className="absolute inset-0 left-10 w-full h-full bg-cover bg-no-repeat bg-[url('/images/publisher_bg.webp')] bg-left-bottom md:bg-contain"
                    ></motion.div>
                    <h2 className="hidden relative font-black whitespace-nowrap md:block md:text-4xl">
                        PUBLISHER
                    </h2>
                </motion.div>

                <motion.div
                    className="hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-full md:block"
                    initial={{ x: 0 }}
                    animate={{ x }}
                    transition={{
                        type: "tween",
                        ease: "backOut",
                        duration: 1.6,
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 0.9,
                            duration: 0.9,
                        }}
                    >
                        <motion.div
                            animate={{ width: 600 }}
                            transition={{
                                duration: 0.6,
                            }}
                            className="absolute left-0 w-[300px] h-full bg-left-bottom bg-[length:600px_438px] bg-no-repeat bg-[url('/images/profile_02.webp')]"
                        ></motion.div>

                        <motion.div
                            animate={{ width: creativeWidth }}
                            transition={{
                                duration: 0.6,
                            }}
                            className="absolute right-0 w-[300px] h-full bg-right-bottom bg-[length:600px_438px] bg-no-repeat bg-[url('/images/profile_01.webp')]"
                        ></motion.div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="relative flex flex-col justify-end items-center w-full md:hidden"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.3,
                        delay: 1.5,
                    }}
                >
                    <Image
                        src="/images/profile.png"
                        width={300}
                        height={300}
                        alt="프로필 사진"
                        className="w-full max-w-md"
                    />
                </motion.div>
                <Link
                    href="about/homin"
                    className="absolute left-0 w-1/2 h-full"
                ></Link>
                <Link
                    href="about/publisher"
                    className="absolute right-0 w-1/2 h-full"
                ></Link>
            </div>
        </Visual>
    );
};

const Main = () => {
    const [budgetList, setBudgetList] = useState<any>({});
    useEffect(() => {
        getNotionData(budgetId).then((data) => {
            setBudgetList(data);
        });
    }, []);
    return (
        <div>
            <MainVisual />
            <motion.div
                className="space-y-16 sm:space-y-24"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <PortfolioSection />
                {/* TODO: BudgetList state까지 통합 필요 */}
                <BudgetSection data={budgetList} />
                <BookSection />
            </motion.div>
        </div>
    );
};

export default () => {
    return (
        <Layout>
            <Main />
        </Layout>
    );
};
