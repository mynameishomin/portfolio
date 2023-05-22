import { notionInit } from "@/utils/functions";
import Window from "@/components/window";
import BudgetList from "@/components/budgetList";
import ReadingList from "@/components/readingList";
import ProjectList from "@/components/projectList";
import GuestBook from "@/components/layout/guestBook";

export default function Home({ notionData }: { notionData: any }) {
    return (
        <div className="relative flex flex-col w-full space-y-4">
            <div className="flex">
                <Window title="제 포트폴리오를 확인해보세요.">
                    <ProjectList data={notionData.project.results} />
                </Window>
            </div>
            <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
                <div className="lg:w-1/3">
                    <Window title="최근 지출">
                        <BudgetList data={notionData.budget.results} />
                    </Window>
                </div>
                <div className="lg:w-1/3">
                    <Window title="최근 독서">
                        <ReadingList data={notionData.reading.results} />
                    </Window>
                </div>
                <div className="lg:w-1/3">
                    <Window title="준비중">
                        <div></div>
                    </Window>
                </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row lg:space-x-4">
                <div className="mt-4 lg:w-1/2 lg:mt-0">
                    <Window title="방명록">
                        <GuestBook data={notionData.guestBook.results} />
                    </Window>
                </div>
                <div className="lg:w-1/2">
                    <Window title="준비중">
                        <span></span>
                    </Window>
                </div>
            </div>
        </div>
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
