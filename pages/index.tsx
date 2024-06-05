import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Layout from "@/components/layout/layout";
import { Visual } from "@/components/layout/visual";
import { getNotionData, moneyFormat } from "@/utils/functions";
import { projectId, budgetId, readingId } from "@/utils/variable";
import Card from "@/components/Card";
import Section from "@/components/section";
import { getPortfolioData, getBookoData } from "@/function/notion";
import { NotionBookProps, NotionBudgetProps } from "@/types/notion";
import { PortfolioUl } from "./portfolio";
import { getNowMonth } from "@/utils/functions";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const nowMonth = getNowMonth();

interface TotalThisMonthProps {
    [index: string]: number;
}

interface TotalMonthlyProps {
    [index: string]: NotionBudgetProps[];
}

const BudgetSection = () => {
    const [data, setData] = useState<NotionBudgetProps[] | null>(null);
    useEffect(() => {
        getNotionData(budgetId).then((data) => setData(data));
    }, []);

    if (!data) return null;

    const totalThisMonth: TotalThisMonthProps = {};
    const totalMonthly: TotalMonthlyProps = {};

    data.forEach((item: NotionBudgetProps) => {
        const dateString = item.properties.Date.date.start.slice(0, 7);

        totalMonthly[dateString]
            ? totalMonthly[dateString].push(item)
            : (totalMonthly[dateString] = [item]);
    });

    const monthLebel = Object.keys(totalMonthly);
    const monthSeries = Object.values(totalMonthly).map((item: any) => {
        return item.reduce(
            (acc: any, cur: any) => acc + cur.properties.Amount.number,
            0
        );
    });

    const nowMonthData = totalMonthly[Object.keys(totalMonthly)[0]];

    nowMonthData.forEach((item: any) => {
        const category = item.properties.Category.select.name;
        totalThisMonth[category] = totalThisMonth[category]
            ? totalThisMonth[category] + item.properties.Amount.number
            : item.properties.Amount.number;
    });

    const totalAmout = nowMonthData.reduce(
        (acc: any, cur: any) => acc + cur.properties.Amount.number,
        0
    );

    const engelCoefficient = Math.round(
        (totalThisMonth["음식"] / totalAmout) * 100
    );

    let topCategory = { name: "", amount: 0 };
    Object.keys(totalThisMonth).forEach((key) => {
        if (topCategory === null || totalThisMonth[key] > topCategory.amount) {
            topCategory = {
                name: key,
                amount: totalThisMonth[key],
            };
        }
    });

    let topItem = { name: "", amount: 0 };
    nowMonthData.forEach((item: any) => {
        if (
            topItem === null ||
            item.properties.Amount.number > topItem.amount
        ) {
            topItem = {
                name: item.properties.Expense.title[0].plain_text,
                amount: item.properties.Amount.number,
            };
        }
    });

    const monthState = {
        options: {
            chart: {
                id: "budgetChart",
            },
            labels: Object.keys(totalThisMonth),
            tooltip: {
                y: {
                    formatter: (value: number) => moneyFormat(value),
                },
            },
            legend: {
                show: false,
            },
        },
        series: Object.values(totalThisMonth),
    };

    const monthlyState = {
        options: {
            chart: {
                id: "budgetChart",
                toolbar: {
                    show: false,
                },
            },
            labels: monthLebel.slice(0, 3),
            tooltip: {
                y: {
                    formatter: (value: number) => moneyFormat(value),
                },
            },
            legend: {
                show: false,
            },
            yaxis: {
                labels: {
                    formatter: (value: number) => moneyFormat(value),
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
                    .slice(0, 3)
                    .reverse(),
            },
        ],
    };

    return (
        <Section title={`💳 저는 ${nowMonth}월, 이런 곳에 소비했어요`}>
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
                                        {moneyFormat(topCategory.amount)}
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
                                    <span>{moneyFormat(topItem.amount)}</span>
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
                                    <span>{moneyFormat(totalAmout)}</span>
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
        <Section title={`📕 저는 ${nowMonth}월, 이런 책을 읽었어요`}>
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
    const [recentPortfolioList, setRecentPortfolioList] = useState<any>([]);
    useEffect(() => {
        getNotionData(projectId).then((data) => {
            setRecentPortfolioList(data.slice(0, 3));
        });
    }, []);
    return (
        <Section title="🧑🏻‍💻 저는 최근에 이런 작업을 했어요">
            <PortfolioUl>
                {recentPortfolioList.length
                    ? recentPortfolioList.map((portfolio: any) => {
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
                        Front-End
                        <br />
                        Developer
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
                <BudgetSection />
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
