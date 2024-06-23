"use client";
import { useState, useEffect } from "react";
import { Section, SectionTitle } from "@/components/layout/section";
import { getNotionData } from "@/functions";
import { projectId } from "@/variable";

export default () => {
    const [recentPortfolioList, setRecentPortfolioList] = useState<any>([]);
    console.log(recentPortfolioList);
    useEffect(() => {
        getNotionData(projectId).then((data) =>
            setRecentPortfolioList(data.slice(0, 3))
        );
    }, []);
    return (
        <div>
            <Section>
                <>
                    <h2 className="mb-[1rem] text-4xl font-bold leading-9">
                        Front End <br />
                        <span className="text-blue-600">Developer</span>
                    </h2>
                    <p className="text-sm leading-5">
                        시키는 일만 하기보다 해야할 일을 찾아내고 기계적으로
                        일을 하기보다 더 효율적인 방법을 찾아 일하는 것을
                        좋아합니다.
                    </p>
                </>
            </Section>
            <Section>
                <>
                    <SectionTitle title="블라블라 텍스트" />
                </>
            </Section>
        </div>
    );
};
