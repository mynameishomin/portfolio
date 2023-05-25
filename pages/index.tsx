import Link from "next/link";
import { notionInit } from "@/utils/functions";
import Window from "@/components/window";
import BudgetList from "@/components/budgetList";
import ReadingList from "@/components/readingList";
import ProjectList from "@/components/projectList";
import GuestBook from "@/components/layout/guestBook";

export default function Home({ notionData }: { notionData: any }) {
    return (
        <div className="pt-20 pl-10 font-han text-sub">
            <div className="mb-32">
                <p className="text-4xl">
                    할까? 말까?
                    <br />
                    고민 전에 일단 하고보는
                    <br /> 행동력<span className="text-point"> MAX</span>{" "}
                    웹퍼블리셔
                    <br />
                    <br />
                    절벽 끝에서 무섭다고 울기보다
                    <br />
                    차라리 뛰어내리는 <span className="text-point">상남자</span>
                    <br />
                    <br />
                    저는<span className="text-point"> 정호민</span> 입니다.
                </p>
            </div>
            <div className="inline-flex flex-col space-y-4 text-5xl text-sub whitespace-nowrap">
                <Link
                    className="group relative origin-top-left"
                    href={"/about"}
                >
                    <span className="text-black">저를 알려드릴게요</span>
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden group-hover:w-0 transition-all">
                        <span className="absolute inset-0">
                            저를 알려드릴게요
                        </span>
                        <span className="absolute top-2 left-2 text-point">
                            저를 알려드릴게요
                        </span>
                        <span className="absolute top-1 left-1 text-main">
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
            </div>
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

export async function getServerSideProps() {
    const notionData = await notionInit();
    return {
        props: {
            notionData,
        },
    };
}
