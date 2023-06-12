import { notionStore } from "@/utils/store/notion";
import Link from "next/link";

export default function Home() {
    const notionData = notionStore.getState().notion;

    return (
        <div className="pt-20 px-10 font-han text-point max-lg:p-0">
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
                <ul className="flex space-x-6 max-lg:flex-col max-lg:space-x-0 max-lg:space-y-4">
                    <li className="group relative w-full p-4 pt-2 border-2 border-point text-center rounded-xl overflow-hidden">
                        <Link href={"/projects"}>
                            <span className="absolute inset-0 translate-y-full -rotate-6 bg-main scale-125 origin-top-right group-hover:translate-y-0 transition-all duration-300"></span>
                            <div className="relative">
                                <span className="relative block mb-2 text-5xl">
                                    <span className="relative">
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
                        </Link>
                    </li>
                    <li className="group relative w-full p-4 pt-2 border-2 border-point text-center rounded-xl overflow-hidden">
                        <Link href={"/projects"}>
                            <span className="absolute inset-0 translate-y-full -rotate-6 bg-main scale-125 origin-top-right group-hover:translate-y-0 transition-all duration-300"></span>
                            <div className="relative ">
                                <span className="relative block mb-2 text-5xl">
                                    <span className="relative">
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
                        </Link>
                    </li>
                    <li className="group relative w-full p-4 pt-2 border-2 border-point text-center rounded-xl overflow-hidden">
                        <Link href={"/projects"}>
                            <span className="absolute inset-0 translate-y-full -rotate-6 bg-main scale-125 origin-top-right group-hover:translate-y-0 transition-all duration-300"></span>
                            <div className="relative ">
                                <span className="relative block mb-2 text-5xl">
                                    <span className="relative">
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
                                </span>
                                <div className="group-hover:text-white transition-all duration-300">
                                    <h3 className="mb-1 text-xl">
                                        토이 프로젝트
                                    </h3>
                                    <p className="font-sans font-semibold text-base">
                                        토이 프로젝트를 진행합니다.
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
