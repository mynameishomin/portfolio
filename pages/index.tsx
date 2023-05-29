import Link from "next/link";
import { notionInit } from "@/utils/functions";
import Window from "@/components/window";
import BudgetList from "@/components/budgetList";
import ReadingList from "@/components/readingList";
import ProjectList from "@/components/projectList";
import GuestBook from "@/components/layout/guestBook";
import { notionStore } from "@/utils/store/notion";
import { useEffect, useState } from "react";

export default function Home() {
    const [notionData, setNotionData] = useState<any>([]);
    (async () => {
        const notionState = notionStore.getState();
        notionState.notion.length
            ? setNotionData(notionState.notion)
            : setNotionData(await notionInit());
    })();
    console.log(notionData);
    return (
        <div className="pt-20 px-10 font-han text-point">
            <div className="flex flex-col">
                <p className="mb-32 text-4xl">
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
                <ul className="flex space-x-6">
                    <li className="group relative w-full p-4 pt-2 border-2 border-point text-center rounded-xl overflow-hidden">
                        <span className="absolute inset-0 translate-y-full -rotate-6 bg-main scale-125 origin-top-right group-hover:translate-y-0 transition-all duration-300"></span>
                        <div className="relative ">
                            <span className="relative block mb-2 text-5xl">
                                <span className="relative">
                                    {notionData.project
                                        ? notionData.project.results.filter(
                                              (project: any) => {
                                                  return (
                                                      project.properties.Type
                                                          .select.name ===
                                                      "퍼블리싱"
                                                  );
                                              }
                                          ).length
                                        : "-"}
                                </span>
                            </span>
                            <div className="group-hover:text-white transition-all duration-300">
                                <h3 className="mb-1 text-xl">
                                    퍼블리싱 프로젝트
                                </h3>
                                <p className="font-sans font-semibold text-base">
                                    반응형 웹, 크로스 브라우징, 웹접근성을
                                    준수한 퍼블리싱을 수행합니다.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="group relative w-full p-4 pt-2 border-2 border-point text-center rounded-xl overflow-hidden">
                        <span className="absolute inset-0 translate-y-full -rotate-6 bg-main scale-125 origin-top-right group-hover:translate-y-0 transition-all duration-300"></span>
                        <div className="relative ">
                            <span className="relative block mb-2 text-5xl">
                                <span className="relative">
                                    {notionData.project
                                        ? notionData.project.results.filter(
                                              (project: any) => {
                                                  return (
                                                      project.properties.Type
                                                          .select.name ===
                                                      "프론트엔드"
                                                  );
                                              }
                                          ).length
                                        : "-"}
                                </span>
                            </span>
                            <div className="group-hover:text-white transition-all duration-300">
                                <h3 className="mb-1 text-xl">
                                    프론트엔드 프로젝트
                                </h3>
                                <p className="font-sans font-semibold text-base">
                                    프론트엔드 프로젝트를 수행합니다.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="group relative w-full p-4 pt-2 border-2 border-point text-center rounded-xl overflow-hidden">
                        <span className="absolute inset-0 translate-y-full -rotate-6 bg-main scale-125 origin-top-right group-hover:translate-y-0 transition-all duration-300"></span>
                        <div className="relative ">
                            <span className="relative block mb-2 text-5xl">
                                <span className="relative">
                                    {" "}
                                    {notionData.project
                                        ? notionData.project.results.filter(
                                              (project: any) => {
                                                  return (
                                                      project.properties.Type
                                                          .select.name ===
                                                      "토이"
                                                  );
                                              }
                                          ).length
                                        : "-"}
                                </span>
                            </span>
                            <div className="group-hover:text-white transition-all duration-300">
                                <h3 className="mb-1 text-xl">토이 프로젝트</h3>
                                <p className="font-sans font-semibold text-base">
                                    토이 프로젝트를 진행합니다.
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            {/* <div className="inline-flex flex-col space-y-4 text-5xl whitespace-nowrap">
                <Link
                    className="group relative origin-top-left"
                    href={"/about"}
                >
                    <span className="text-black">저를 알려드릴게요</span>
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden group-hover:w-0 transition-all">
                        <span className="absolute top-2 left-2 text-point">
                            저를 알려드릴게요
                        </span>
                        <span className="absolute inset-0 text-main">
                            저를 알려드릴게요
                        </span>
                        <span className="absolute top-1 left-1 text-sub">
                            저를 알려드릴게요
                        </span>
                    </div>
                </Link>
                <Link
                    className="group relative origin-top-left"
                    href={"/projects"}
                >
                    <span className="text-black">제가 작업했어요</span>
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden group-hover:w-0 transition-all">
                        <span className="absolute inset-0">
                            제가 작업했어요
                        </span>
                        <span className="absolute top-2 left-2 text-point">
                            제가 작업했어요
                        </span>
                        <span className="absolute top-1 left-1 text-main">
                            제가 작업했어요
                        </span>
                    </div>
                </Link>
                <Link
                    className="group relative origin-top-left"
                    href={"/skills"}
                >
                    <span className="text-black">저는 이만큼 해요</span>
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden group-hover:w-0 transition-all">
                        <span className="absolute inset-0">
                            저는 이만큼 해요
                        </span>
                        <span className="absolute top-2 left-2 text-point">
                            저는 이만큼 해요
                        </span>
                        <span className="absolute top-1 left-1 text-main">
                            저는 이만큼 해요
                        </span>
                    </div>
                </Link>
            </div> */}
        </div>
        // <div className="relative flex flex-col w-full space-y-4">
        //     <div className="flex">
        //         <Window title="제 포트폴리오를 확인해보세요.">
        //             <ProjectList data={notionData.project.results} />
        //         </Window>
        //     </div>
        //     <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
        //         <div className="lg:w-1/3">
        //             <Window title="최근 지출">
        //                 <BudgetList data={notionData.budget.results} />
        //             </Window>
        //         </div>
        //         <div className="lg:w-1/3">
        //             <Window title="최근 독서">
        //                 <ReadingList data={notionData.reading.results} />
        //             </Window>
        //         </div>
        //         <div className="lg:w-1/3">
        //             <Window title="준비중">
        //                 <div></div>
        //             </Window>
        //         </div>
        //     </div>

        //     <div className="flex flex-col-reverse lg:flex-row lg:space-x-4">
        //         <div className="mt-4 lg:w-1/2 lg:mt-0">
        //             <Window title="방명록">
        //                 <GuestBook data={notionData.guestBook.results} />
        //             </Window>
        //         </div>
        //         <div className="lg:w-1/2">
        //             <Window title="준비중">
        //                 <span></span>
        //             </Window>
        //         </div>
        //     </div>
        // </div>
    );
}
