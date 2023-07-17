import { notionStore } from "@/utils/store/notion";
import Link from "next/link";
import {
    AnimatePresence,
    motion,
    useMotionValueEvent,
    useMotionValue,
} from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
    const notionData = notionStore.getState().notion;
    const [width_01, setWidth_01] = useState<number>(300);
    const [width_02, setWidth_02] = useState<number>(300);
    const [x, setX] = useState<number>(0);

    return (
        <motion.div
            className="flex justify-center w-full h-[600px] overflow-hidden"
            transition={{ duration: 1 }}
            onMouseMove={(e) => {
                const point = e.screenX / 2 - 300;
                setWidth_02((prev: number) => {
                    return 300 - point;
                });
                setWidth_01((prev: number) => {
                    return 300 + point;
                });

                setX((prev: number) => {
                    return point / 20;
                });
            }}
            onMouseLeave={() => {
                console.log("leave");
                setWidth_01(300);
                setWidth_02(300);
                setX(0);
            }}
        >
            <motion.div
                className="relative w-[600px] h-[600px]"
                initial={{ x: 0 }}
                animate={{ x }}
                transition={{ type: "tween", ease: "backOut", duration: 1.6 }}
            >
                <motion.div
                    initial={{ width: 300 }}
                    animate={{ width: width_01 }}
                    transition={{
                        type: "tween",
                        ease: "backOut",
                        duration: 1.6,
                    }}
                    className="absolute right-0 w-[300px] h-full bg-right bg-[length:600px_600px] bg-no-repeat bg-[url('/images/profile_01.png')]"
                ></motion.div>
                <motion.div
                    initial={{ width: 300 }}
                    animate={{ width: width_02 }}
                    transition={{
                        type: "tween",
                        ease: "backOut",
                        duration: 1.6,
                    }}
                    className="absolute left-0 w-[300px] h-full bg-left bg-[length:600px_600px] bg-no-repeat bg-[url('/images/profile_02.png')]"
                ></motion.div>
            </motion.div>
        </motion.div>
        // <div className="pt-20 px-10 font-han text-point max-lg:p-0">
        //     <div className="flex flex-col">
        //         <p className="opacity-0 mb-32 text-4xl max-lg:mb-16">
        //             할까? 말까?
        //             <br />
        //             고민 전에 일단 하고보는
        //             <br /> 행동력<span className="text-main"> MAX</span>
        //             <br />
        //             <br />
        //             절벽 끝에서 무섭다고 울기보다
        //             <br />
        //             차라리 뛰어내리는 <span className="text-main">상남자</span>
        //             <br />
        //             <br />
        //             <span className="text-main">1년차</span> 웹퍼블리셔
        //             <br />
        //             <br />
        //             저는<span className="text-main"> 정호민</span> 입니다.
        //         </p>

        //         <div className="relative flex text-4xl text-center h-40">
        //             <div className="w-full">
        //                 <div className="rounded-full w-full h-40 bg-main"></div>
        //             </div>
        //             <div className="absolute w-full overflow-hidden">
        //                 <div className="right-0 rounded-full w-full h-40 bg-point"></div>
        //             </div>
        //         </div>

        //         <motion.ul variants={projectsVariants} initial="out" animate="in" className="flex space-x-6 max-lg:flex-col max-lg:space-x-0 max-lg:space-y-4">
        //             <motion.li variants={projectVariants} className="w-full">
        //                 <Link href={"/projects"}>
        //                     <TextCard>
        //                         <span className="relative block mb-2 text-5xl">
        //                             {notionData.project
        //                                 ? notionData.project.results.filter(
        //                                     (project: any) => {
        //                                         return (
        //                                             project.properties
        //                                                 .Type.select
        //                                                 .name ===
        //                                             "퍼블리싱"
        //                                         );
        //                                     }
        //                                 ).length
        //                                 : "-"}
        //                         </span>
        //                         <h3 className="mb-1 text-xl">
        //                             퍼블리싱 프로젝트
        //                         </h3>
        //                         <p className="font-sans font-semibold text-base">
        //                             반응형 웹, 크로스 브라우징, 웹접근성을
        //                             준수한 퍼블리싱을 수행합니다.
        //                         </p>
        //                     </TextCard>
        //                 </Link>
        //             </motion.li>
        //             <motion.li variants={projectVariants} className="w-full">
        //                 <Link href={"/projects"}>
        //                     <TextCard>
        //                         <span className="relative block mb-2 text-5xl">
        //                                 {notionData.project
        //                                     ? notionData.project.results.filter(
        //                                           (project: any) => {
        //                                               return (
        //                                                   project.properties
        //                                                       .Type.select
        //                                                       .name ===
        //                                                   "프론트엔드"
        //                                               );
        //                                           }
        //                                       ).length
        //                                     : "-"}
        //                         </span>
        //                         <h3 className="mb-1 text-xl">
        //                             프론트엔드 프로젝트
        //                         </h3>
        //                         <p className="font-sans font-semibold text-base">
        //                             프론트엔드 프로젝트를 수행합니다.
        //                         </p>
        //                     </TextCard>
        //                 </Link>
        //             </motion.li>
        //             <motion.li variants={projectVariants} className="w-full">
        //                 <Link href={"/projects"}>
        //                     <TextCard>
        //                         <span className="relative block mb-2 text-5xl">
        //                             {notionData.project
        //                                 ? notionData.project.results.filter(
        //                                         (project: any) => {
        //                                             return (
        //                                                 project.properties
        //                                                     .Type.select
        //                                                     .name === "토이"
        //                                             );
        //                                         }
        //                                     ).length
        //                                 : "-"}
        //                         </span>
        //                         <h3 className="mb-1 text-xl">
        //                             토이 프로젝트
        //                         </h3>
        //                         <p className="font-sans font-semibold text-base">
        //                             토이 프로젝트를 진행합니다.
        //                         </p>
        //                     </TextCard>
        //                 </Link>
        //             </motion.li>
        //         </motion.ul>
        //     </div>
        // </div>
    );
}
