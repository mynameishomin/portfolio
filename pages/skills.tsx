import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Key } from "react";
import { notionInit } from "@/utils/functions";
import { PageTitle1, PageTitle2 } from "@/components/pageTitle";
import { notionStore } from "@/utils/store/notion";

export default function Skills({ skills }: { skills: Object[] }) {
    const router = useRouter();
    const [currentSkill, setCurrentSkill] = useState<any>({});
    const [skillData, setSkillData] = useState<any>([]);
    const onSkillClick = (obj: {
        name: String;
        possible: Boolean;
        icon: String;
        summary: String;
    }) => {
        setCurrentSkill(obj);
    };

    const closeSkillModal = () => {
        setCurrentSkill({});
    };

    useEffect(() => {
        (async () => {
            const notionData = notionStore.getState().notion;
            const skillData = notionData.skills.results;
            const language = skillData.filter((skill: any) => {
                return skill.properties.Type.select.name === "Language";
            });
            const frameWork = skillData.filter((skill: any) => {
                return (
                    skill.properties.Type.select.name === "Framework/Library"
                );
            });
            const database = skillData.filter((skill: any) => {
                return skill.properties.Type.select.name === "Database";
            });
            const markUp = skillData.filter((skill: any) => {
                return skill.properties.Type.select.name === "MarkUp";
            });
            const tool = skillData.filter((skill: any) => {
                return skill.properties.Type.select.name === "Tool";
            });
            const etc = skillData.filter((skill: any) => {
                return skill.properties.Type.select.name === "ETC";
            });
            setSkillData({ language, frameWork, markUp, database, tool, etc });
        })();
    }, []);

    return (
        <div className="relative grow">
            <PageTitle1>SKILL</PageTitle1>
            {Object.keys(skillData).length ? (
                <ul
                    className={`space-y-8 ${
                        currentSkill.name ? "blur-sm" : ""
                    }`}
                >
                    {Object.keys(skillData).map(
                        (skillType: any, index: Key) => {
                            return (
                                <li key={index}>
                                    <PageTitle2>
                                        {skillType.toUpperCase()}
                                    </PageTitle2>
                                    <ul className="flex space-x-4">
                                        {skillData[skillType].map(
                                            (skill: any, index: Key) => {
                                                const name =
                                                    skill.properties.Name
                                                        .title[0].plain_text;
                                                const possible = JSON.parse(
                                                    skill.properties.Possible
                                                        .checkbox
                                                );
                                                const icon =
                                                    skill.properties.Icon
                                                        .files[0].file.url;
                                                const summary =
                                                    skill.properties.Summary
                                                        .rich_text[0]
                                                        .plain_text;
                                                return (
                                                    <li key={index}>
                                                        <button
                                                            onClick={(
                                                                e: React.MouseEvent
                                                            ) => {
                                                                onSkillClick({
                                                                    name,
                                                                    possible,
                                                                    icon,
                                                                    summary,
                                                                });
                                                            }}
                                                        >
                                                            <Skill
                                                                name={name}
                                                                possible={
                                                                    possible
                                                                }
                                                                icon={icon}
                                                            />
                                                        </button>
                                                    </li>
                                                );
                                            }
                                        )}
                                    </ul>
                                </li>
                            );
                        }
                    )}
                </ul>
            ) : null}
            {currentSkill.name ? (
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="absolute flex flex-col w-96 min-h-64 p-10 bg-main rounded-xl border-4 border-point text-white max-lg:w-5/6">
                        <button
                            className="absolute top-3 right-3 w-8 h-8"
                            onClick={(e: React.MouseEvent) => {
                                closeSkillModal();
                            }}
                        >
                            <svg
                                className="w-full h-full"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                            >
                                <path
                                    fill="#ffffff"
                                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                                />
                            </svg>
                        </button>
                        <h3 className="font-han text-xl text-center">
                            {currentSkill.name}
                        </h3>
                        <p className="mt-1 text-base">{currentSkill.summary}</p>
                    </div>
                </div>
            ) : null}
            {/* <ul className="">
                {skillData.map((skill: any, index: Key) => {
                    const name = skill.properties.Name.title[0].plain_text;
                    const possible = JSON.parse(
                        skill.properties.Possible.checkbox
                    );
                    const icon = skill.properties.Icon.files[0].file.url;
                    return (
                        <li key={index}>
                            <button
                                type="button"
                                onClick={() => {
                                    setCurrentSkill({ ...skill });
                                }}
                            >
                                <Skill
                                    name={name}
                                    possible={possible}
                                    icon={icon}
                                />
                            </button>
                        </li>
                    );
                })}
            </ul> */}
        </div>
    );
}

export const Skill = ({
    name,
    possible,
    icon,
}: {
    name: string;
    possible: Boolean;
    icon: string;
}) => {
    return (
        <>
            <div
                className={`flex flex-col items-center ${
                    !possible ? "opacity-50" : null
                }`}
            >
                <Image
                    className="mb-1 shadow-xl rounded-full border-4 border-point"
                    src={icon}
                    width={50}
                    height={50}
                    alt={name}
                />
                <span className="py-0.5 px-2 text-xs bg-point text-white rounded">
                    {name}
                </span>
            </div>
        </>
    );
};
