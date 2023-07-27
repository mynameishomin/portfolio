import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "@/components/layout/layout";
import Visual from "@/components/layout/visual";
import { getNotionData, numberWithComma } from "@/utils/functions";
import { projectId, budgetId, readingId } from "@/utils/variable";
import PortfolioCard from "@/components/portfolioCard";
import Section from "@/components/section";
import BookCard from "@/components/bookCard";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BudgetSection = ({ data }: { data: Object[] }) => {
    const monthData = {} as any;
    const monthlyData = {} as any;
    data.length
        ? data.forEach((item: any) => {
              const year = new Date(
                  item.properties.Date.date.start
              ).getFullYear();
              let month =
                  new Date(item.properties.Date.date.start).getMonth() + 1;
              if (month < 10) {
                  month = "0" + month;
              }
              monthlyData[year + "-" + month]
                  ? monthlyData[year + "-" + month].push(item)
                  : (monthlyData[year + "-" + month] = [item]);
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
        ? numberWithComma(
              nowMonthData.reduce(
                  (acc: any, cur: any) => acc + cur.properties.Amount.number,
                  0
              )
          )
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
                    formatter: (value: Number) => numberWithComma(value) + "원",
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
            },
            labels: monthLebel,
            tooltip: {
                y: {
                    formatter: (value: Number) => numberWithComma(value) + "원",
                },
            },
            legend: {
                show: false,
            },
        },
        series: [
            {
                data: monthSeries
                    .map((item: any, index: number) => {
                        return {
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
            title={`저는 ${new Date().getMonth() + 1}월, 이런 곳에 소비했어요`}
        >
            <>
                {data.length ? (
                    <div className="flex space-x-4">
                        <div className="flex w-1/2 border border-gray-100 shadow-md">
                            <Chart
                                className="flex flex-col justify-center"
                                options={monthState.options as any}
                                series={monthState.series as any}
                                type="pie"
                                width={250}
                                height={250}
                            />
                            <ul className="flex flex-col justify-end grow m-2 p-2 text-right">
                                <li className="mb-2 pb-2 border-b border-gray-400 border-dashed">
                                    <h3 className="mb-1">가장 큰 지출 분야</h3>
                                    <div className="flex text-gray-500">
                                        <span className="w-2/3">
                                            * {topCategory.name} :
                                        </span>
                                        <span className="w-1/3">
                                            {numberWithComma(
                                                topCategory.amount
                                            )}
                                            원
                                        </span>
                                    </div>
                                </li>
                                <li className="mb-2 pb-2 border-b border-gray-400 border-dashed">
                                    <h3 className="mb-1">가장 큰 지출 항목</h3>
                                    <div className="flex text-gray-500">
                                        <span className="w-2/3">
                                            * {topItem.name} :
                                        </span>
                                        <span className="w-1/3">
                                            {numberWithComma(topItem.amount)}원
                                        </span>
                                    </div>
                                </li>
                                <li className="pb-0.5 text-lg border-b border-gray-400 border-dashed">
                                    <div className="flex justify-between text-gray-500 border-b border-gray-400 border-dashed">
                                        <h3 className="mb-1">총 합계</h3>
                                        <span className="w-1/3">
                                            {totalAmout}원
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col w-1/2 border border-gray-100 shadow-md">
                            <h3>월별 지출 추이</h3>
                            <Chart
                                options={monthlyState.options as any}
                                series={monthlyState.series as any}
                                type="line"
                                width="100%"
                                height={250}
                                className="w-full"
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
            title={`저는 ${new Date().getMonth() + 1}월, 이런 책을 읽었어요`}
        >
            <>
                {bookList.length ? (
                    <div className="flex">
                        <ul className="grid grid-cols-4 gap-4">
                            {bookList.slice(0, 4).map((book: any) => {
                                return (
                                    <li key={book.id}>
                                        <BookCard bookData={book} />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
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
        <Section title="저는 최근에 이런 작업을 했어요">
            <ul className="grid grid-cols-3 gap-4">
                {portfolioList.length
                    ? portfolioList.map((portfolio: any) => {
                          return (
                              <li key={portfolio.id}>
                                  <PortfolioCard portfolioData={portfolio} />
                              </li>
                          );
                      })
                    : [1, 2, 3].map((item) => {
                          return (
                              <li key={item}>
                                  <PortfolioCard />
                              </li>
                          );
                      })}
            </ul>
        </Section>
    );
};

const MainVisual = () => {
    const [creativeWidth, setCreativeWidth] = useState<number>(300);
    const [proWidth, setProWidth] = useState<number>(300);
    const photoWidth = 300;
    const [x, setX] = useState<number>(0);
    return (
        <Visual>
            <div
                className="relative flex h-[600px] overflow-hidden"
                onMouseMove={(e) => {
                    const centerX = window.innerWidth / 2;
                    const point = (centerX - e.pageX) / 2;
                    setProWidth(() => photoWidth + point);
                    setCreativeWidth(() => photoWidth - point);
                    setX(() => point / 20);
                }}
                onMouseLeave={() => {
                    setCreativeWidth(photoWidth);
                    setProWidth(photoWidth);
                    setX(0);
                }}
            >
                <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-full"
                    initial={{ x: 0 }}
                    animate={{ x }}
                    transition={{
                        type: "tween",
                        ease: "backOut",
                        duration: 1.6,
                    }}
                >
                    <motion.div
                        initial={{ x: -600 }}
                        animate={{ x: 0, width: proWidth }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="absolute left-0 w-[300px] h-full bg-left-bottom bg-[length:600px_600px] bg-no-repeat bg-[url('/images/profile_02.png')]"
                    ></motion.div>

                    <motion.div
                        initial={{ x: 600 }}
                        animate={{ x: 0, width: creativeWidth }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="absolute right-0 w-[300px] h-full bg-right-bottom bg-[length:600px_600px] bg-no-repeat bg-[url('/images/profile_01.png')]"
                    ></motion.div>
                </motion.div>
                <Link
                    href="about-01"
                    className="absolute left-0 w-1/2 h-full"
                ></Link>
                <Link
                    href="about-02"
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
            <div className="space-y-32">
                <PortfolioSection />
                {/* TODO: BudgetList state까지 통합 필요 */}
                <BudgetSection data={budgetList} />
                <BookSection />
            </div>
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
