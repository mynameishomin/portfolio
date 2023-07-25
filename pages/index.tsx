import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/layout";
import Visual from "@/components/layout/visual";
import Container from "@/components/layout/container";
import LineTitle from "@/components/lineTitle";
import { getNotionData } from "@/utils/functions";
import { projectId } from "@/utils/variable";
import PortfolioCard from "@/components/portfolioCard";
import Section from "@/components/section";

export default () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [portfolioList, setPortfolioList] = useState<any>([]);
    const [creativeWidth, setCreativeWidth] = useState<number>(300);
    const [proWidth, setProWidth] = useState<number>(300);
    const [x, setX] = useState<number>(0);
    const photoWidth = 300;

    useEffect(() => {
        getNotionData(projectId).then((data) => {
            setPortfolioList(data);
            setLoading(false);
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
                            {loading
                                ? [1, 2, 3].map((item) => {
                                      return (
                                          <li key={item}>
                                              <PortfolioCard />
                                          </li>
                                      );
                                  })
                                : portfolioList.map((portfolio: any) => {
                                      return (
                                          <li key={portfolio.id}>
                                              <PortfolioCard
                                                  portfolioData={portfolio}
                                              />
                                          </li>
                                      );
                                  })}
                        </ul>
                    </Section>
                    <Section title={"저는 최근에 이런 곳에 소비했어요"}>
                        <div>hello</div>
                    </Section>
                </div>
            </>
        </Layout>
    );
};
