import { notionStore } from "@/utils/store/notion";
import Link from "next/link";
import { TextCard } from "@/components/textCard";
import { motion } from "framer-motion";

export default function Home() {
    const notionData = notionStore.getState().notion;

    const projectsVariants = {
        in: {
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.3,
            },
        },
        out: {
        }
    }

    const projectVariants = {
        in: {
            y: 0,
            opacity: 1,
        },
        out: {
            y: 100,
            opacity: 0,
        }
    }

    return (
        <div className="pt-20 px-10 font-han text-point max-lg:p-0">
            <div className="flex flex-col">
                <p className="opacity-0 mb-32 text-4xl max-lg:mb-16">
                    할까? 말까?
                    <br />
                    고민 전에 일단 하고보는
                    <br /> 행동력<span className="text-main"> MAX</span>
                    <br />
                    <br />
                    절벽 끝에서 무섭다고 울기보다
                    <br />
                    차라리 뛰어내리는 <span className="text-main">상남자</span>
                    <br />
                    <br />
                    <span className="text-main">1년차</span> 웹퍼블리셔
                    <br />
                    <br />
                    저는<span className="text-main"> 정호민</span> 입니다.
                </p>

                <div className="relative flex text-4xl text-center h-40">
                    <div className="w-full">
                        <div className="rounded-full w-full h-40 bg-main"></div>
                    </div>
                    <div className="absolute w-full overflow-hidden">
                        <div className="right-0 rounded-full w-full h-40 bg-point"></div>
                    </div>
                </div>

                <motion.ul variants={projectsVariants} initial="out" animate="in" className="flex space-x-6 max-lg:flex-col max-lg:space-x-0 max-lg:space-y-4">
                    <motion.li variants={projectVariants} className="w-full">
                        <Link href={"/projects"}>
                            <TextCard>
                                <span className="relative block mb-2 text-5xl">
                                    {notionData.project
                                        ? notionData.project.results.filter(
                                            (project: any) => {
                                                return (
                                                    project.properties
                                                        .Type.select
                                                        .name ===
                                                    "퍼블리싱"
                                                );
                                            }
                                        ).length
                                        : "-"}
                                </span>
                                <h3 className="mb-1 text-xl">
                                    퍼블리싱 프로젝트
                                </h3>
                                <p className="font-sans font-semibold text-base">
                                    반응형 웹, 크로스 브라우징, 웹접근성을
                                    준수한 퍼블리싱을 수행합니다.
                                </p>
                            </TextCard>
                        </Link>
                    </motion.li>
                    <motion.li variants={projectVariants} className="w-full">
                        <Link href={"/projects"}>
                            <TextCard>
                                <span className="relative block mb-2 text-5xl">
                                        {notionData.project
                                            ? notionData.project.results.filter(
                                                  (project: any) => {
                                                      return (
                                                          project.properties
                                                              .Type.select
                                                              .name ===
                                                          "프론트엔드"
                                                      );
                                                  }
                                              ).length
                                            : "-"}
                                </span>
                                <h3 className="mb-1 text-xl">
                                    프론트엔드 프로젝트
                                </h3>
                                <p className="font-sans font-semibold text-base">
                                    프론트엔드 프로젝트를 수행합니다.
                                </p>
                            </TextCard>
                        </Link>
                    </motion.li>
                    <motion.li variants={projectVariants} className="w-full">
                        <Link href={"/projects"}>
                            <TextCard>
                                <span className="relative block mb-2 text-5xl">
                                    {notionData.project
                                        ? notionData.project.results.filter(
                                                (project: any) => {
                                                    return (
                                                        project.properties
                                                            .Type.select
                                                            .name === "토이"
                                                    );
                                                }
                                            ).length
                                        : "-"}
                                </span>
                                <h3 className="mb-1 text-xl">
                                    토이 프로젝트
                                </h3>
                                <p className="font-sans font-semibold text-base">
                                    토이 프로젝트를 진행합니다.
                                </p>
                            </TextCard>
                        </Link>
                    </motion.li>
                </motion.ul>
            </div>
        </div>
    );
}
