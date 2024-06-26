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
                <div className="py-[10rem]">
                    <h2 className="text-8xl font-bold leading-8">
                        Frontend <br />
                        <span className="pl-8 text-blue-600">Developer</span>
                    </h2>
                </div>
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
