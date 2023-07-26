import Link from "next/link";
import { useState, useEffect, Component } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Layout from "@/components/layout/layout";
import Visual from "@/components/layout/visual";
import { getNotionData, numberWithComma } from "@/utils/functions";
import { projectId, budgetId } from "@/utils/variable";
import PortfolioCard from "@/components/portfolioCard";
import Section from "@/components/section";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BudgetChart = ({ data }: { data: Object[] }) => {
    const monthData = {} as any;
    const monthlyData = {} as any;
    data.forEach((item: any) => {
        const month = new Date(item.properties.Date.date.start).getMonth() + 1;
        monthlyData[month]
            ? monthlyData[month].push(item)
            : (monthlyData[month] = [item]);
    });
    const nowMonthData = monthlyData[Object.keys(monthlyData)[0]];

    nowMonthData.forEach((item: any) => {
        const category = item.properties.Category.select.name;
        monthData[category] = monthData[category]
            ? monthData[category] + item.properties.Amount.number
            : item.properties.Amount.number;
    });

    const totalAmout = numberWithComma(
        nowMonthData.reduce(
            (acc: any, cur: any) => acc + cur.properties.Amount.number,
            0
        )
    );

    let topCategory = { name: "", amount: 0 };
    Object.keys(monthData).forEach((key) => {
        if (topCategory === null || monthData[key] > topCategory.amount) {
            topCategory = {
                name: key,
                amount: monthData[key],
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

    const state = {
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

    return (
        <>
            <Chart
                options={state.options as any}
                series={state.series as any}
                type="pie"
                width={250}
                height={250}
            />
            <ul className="flex flex-col justify-end grow m-2 p-2 text-right">
                <li className="mb-2 pb-2 border-b border-gray-400 border-dashed">
                    <h3 className="mb-1">총 지출</h3>
                    <div className="flex text-gray-500">
                        <span className="w-2/3">
                            * {new Date().getMonth() + 1}월 :
                        </span>
                        <span className="w-1/3">{totalAmout}원</span>
                    </div>
                </li>
                <li className="mb-2 pb-2 border-b border-gray-400 border-dashed">
                    <h3 className="mb-1">가장 큰 지출 분야</h3>
                    <div className="flex text-gray-500">
                        <span className="w-2/3">* {topCategory.name} :</span>
                        <span className="w-1/3">
                            {numberWithComma(topCategory.amount)}원
                        </span>
                    </div>
                </li>
                <li className="mb-2 pb-2 border-b border-gray-400 border-dashed">
                    <h3 className="mb-1">가장 큰 지출 항목</h3>
                    <div className="flex text-gray-500">
                        <span className="w-2/3">* {topItem.name} :</span>
                        <span className="w-1/3">
                            {numberWithComma(topItem.amount)}원
                        </span>
                    </div>
                </li>
            </ul>
        </>
    );
};

export default () => {
    const [portfolioList, setPortfolioList] = useState<any>([]);
    const [budgetList, setBudgetList] = useState<any>({});
    const [creativeWidth, setCreativeWidth] = useState<number>(300);
    const [proWidth, setProWidth] = useState<number>(300);
    const [x, setX] = useState<number>(0);
    const photoWidth = 300;

    useEffect(() => {
        getNotionData(projectId).then((data) => {
            setPortfolioList(data);
        });

        getNotionData(budgetId).then((data) => {
            setBudgetList(data);
        });
    }, []);

    return (
        <Layout>
            <>
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
                                animate={{ width: proWidth }}
                                transition={{
                                    type: "tween",
                                    ease: "backOut",
                                    duration: 1.6,
                                }}
                                className="absolute left-0 w-[300px] h-full bg-left-bottom bg-[length:600px_600px] bg-no-repeat bg-[url('/images/profile_02.png')]"
                            >
                                <Link
                                    className="absolute right-0 h-screen w-screen"
                                    href={"/creative"}
                                ></Link>
                            </motion.div>
                            <motion.div
                                animate={{ width: creativeWidth }}
                                transition={{
                                    type: "tween",
                                    ease: "backOut",
                                    duration: 1.6,
                                }}
                                className="absolute right-0 w-[300px] h-full bg-right-bottom bg-[length:600px_600px] bg-no-repeat bg-[url('/images/profile_01.png')]"
                            >
                                <Link
                                    className="absolute left-0 h-screen w-screen"
                                    href={"/professional"}
                                ></Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </Visual>
                <div className="space-y-32">
                    <Section title="저는 최근에 이런 작업을 했어요">
                        <ul className="grid grid-cols-3 gap-4">
                            {portfolioList.length
                                ? portfolioList.map((portfolio: any) => {
                                      return (
                                          <li key={portfolio.id}>
                                              <PortfolioCard
                                                  portfolioData={portfolio}
                                              />
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
                    <Section
                        title={`저는 ${
                            new Date().getMonth() + 1
                        }월, 이런 곳에 소비했어요`}
                    >
                        <>
                            {budgetList.length ? (
                                <div className="flex space-x-4">
                                    <div className="flex w-1/2 border border-gray-100 shadow-md">
                                        <BudgetChart data={budgetList} />
                                    </div>
                                    <div className="flex w-1/2 border border-gray-100 shadow-md">
                                        월별 사용 금액 차트
                                    </div>
                                </div>
                            ) : null}
                        </>
                    </Section>
                    <Section
                        title={`저는 ${
                            new Date().getMonth() + 1
                        }월, 이런 책을 읽었어요`}
                    >
                        <></>
                    </Section>
                </div>
            </>
        </Layout>
    );
};
