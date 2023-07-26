import Link from "next/link";
import { useState, useEffect, Component } from "react";
import dynamic from 'next/dynamic'
import { motion } from "framer-motion";
import Layout from "@/components/layout/layout";
import Visual from "@/components/layout/visual";
import { getNotionData, numberWithComma } from "@/utils/functions";
import { projectId, budgetId } from "@/utils/variable";
import PortfolioCard from "@/components/portfolioCard";
import Section from "@/components/section";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BudgetChart = ({data}: {data: Object[]}) => {
    const monthData = {} as any;
    const monthlyData = {} as any;
    data.forEach((item: any) => {
        const month = new Date(item.properties.Date.date.start).getMonth() + 1;
        monthlyData[month] ? monthlyData[month].push(item) : monthlyData[month] = [item];
    });

    monthlyData[Object.keys(monthlyData)[0]].forEach((item: any) => {
        const category = item.properties.Category.select.name;
        monthData[category] = monthData[category] ? monthData[category] + item.properties.Amount.number : item.properties.Amount.number;
    });
    

    console.log(monthData)

    const state = {
        options: {
          chart: {
            id: "budgetChart"
          },
          labels: Object.keys(monthData),
          tooltip: {
            y: {
                formatter: (value: Number) => numberWithComma(value) + "원",
            },
          },
          legend: {
            show: false
          },
          plotOptions: {
            pie: {
              startAngle: 0,
              endAngle: 360,
              expandOnClick: true,
              offsetX: 0,
              offsetY: 0,
              customScale: 1,
              dataLabels: {
                  offset: 0,
                  minAngleToShowLabel: 10
              }, 
              donut: {
                size: '65%',
                background: 'transparent',
                labels: {
                  show: true,
                  name: {
                    show: true,
                    fontSize: '22px',
                    fontWeight: 600,
                  },
                  value: {
                    show: true,
                    fontSize: '16px',
                    fontWeight: 400,
                    color: "#666",
                    formatter: function (val: Number) {
                      return numberWithComma(val) + "원"
                    }
                  },
                  total: {
                    show: true,
                    showAlways: false,
                    label: '총 지출',
                    fontSize: '22px',
                    fontWeight: 600,
                    color: '#999',
                    formatter: function (w) {
                      return numberWithComma(w.globals.seriesTotals.reduce((a: number, b: number) => {
                        return a + b
                      }, 0)) + "원"
                    }
                  }
                }
              },      
            }
          }
        },
        series: Object.values(monthData),
      };

    return <div>
        <Chart
            options={state.options}
            series={state.series}
            type="donut"
            width="500"
        />
        </div>
}

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
                                ? 
                                portfolioList.map((portfolio: any) => {
                                    return (
                                        <li key={portfolio.id}>
                                            <PortfolioCard
                                                portfolioData={portfolio}
                                            />
                                        </li>
                                    );
                                })
                                : 
                                  [1, 2, 3].map((item) => {
                                    return (
                                        <li key={item}>
                                            <PortfolioCard />
                                        </li>
                                    );
                                })}
                        </ul>
                    </Section>
                    <Section title={`저는 ${new Date().getMonth() + 1}월 이런 곳에 소비했어요`}>
                        <>
                            {budgetList.length ? <BudgetChart data={budgetList} /> : null}
                        </>
                    </Section>
                </div>
            </>
        </Layout>
    );
};
