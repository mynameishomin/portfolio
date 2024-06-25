"use client";
import { useState, useEffect } from "react";
import { Section, SectionTitle } from "@/components/layout/section";
import { getNotionData } from "@/functions";
import { projectId } from "@/variable";
import { useContext } from "react";
import { NotionContext } from "@/context/notion";

export default () => {
    const notion = useContext(NotionContext);
    return (
        <div>
            <Section>
                <>
                    <h2 className="pt-[2rem] mb-[1rem] text-8xl font-bold leading-8">
                        Front End <br />
                        <span className="pl-8 text-blue-600">Developer</span>
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
            <div className="h-[10000px]"></div>
        </div>
    );
};
