import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Key } from "react";
import GradientText from "@/components/gradientText";
import { notionInit } from "@/utils/functions";

export default function Skills({ skills }: { skills: Object[] }) {
    const [currentSkill, setCurrentSkill] = useState<any>({});
    const router = useRouter();

    useEffect(() => {
        if (router.query.id) {
            setCurrentSkill(
                skills.filter((skill: any) => {
                    return skill.id === router.query.id;
                })[0]
            );
        } else {
            setCurrentSkill(skills[0]);
        }
    }, [router.query.id, skills]);

    return (
        <div className="relative flex grow">
            <div className="grow lg:w-1/2 h-full bg-gray-800">
                {currentSkill.id ? (
                    <div className="absolute flex flex-col w-full h-full p-4 z-10 bg-gray-800 lg:static">
                        <h3 className="mb-4 text-xl font-bold text-center text-gray-200">
                            {currentSkill.properties.Name.title[0].plain_text}
                        </h3>
                        <pre className="whitespace-pre-wrap break-keep">
                            {
                                currentSkill.properties.Summary.rich_text[0]
                                    .plain_text
                            }
                        </pre>
                        <div className="flex justify-center mt-auto lg:hidden">
                            <button className="p-2">닫기</button>
                        </div>
                    </div>
                ) : null}
            </div>
            <div className="grow w-full lg:w-1/2 h-full p-4 bg-gray-700">
                <ul className="grid grid-cols-4 gap-2 w-full">
                    {skills.map((skill: any, index: Key) => {
                        return (
                            <li key={index}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setCurrentSkill({ ...skill });
                                    }}
                                >
                                    <Skill
                                        skill={
                                            skill.properties.Name.title[0]
                                                .plain_text
                                        }
                                        possible={
                                            skill.properties.Possible.checkbox
                                        }
                                        src={
                                            skill.properties.Icon.files[0].file
                                                .url
                                        }
                                    />
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export const Skill = ({
    skill,
    possible,
    src,
}: {
    skill: string;
    possible: string;
    src: string;
}) => {
    return (
        <div className="relative flex flex-col justify-center items-center overflow-hidden">
            <Image
                className={`w-16 h-16 mb-2 rounded-full border-4 border-white ${
                    !possible ? "opacity-50" : null
                }`}
                src={src}
                alt={skill}
                width={50}
                height={50}
            />
            {!possible ? (
                <div className="absolute bottom-4 p-1 rounded-full bg-gray-900">
                    <span>Lock</span>
                </div>
            ) : null}
            <span className="px-2 py-0.5 text-xs bg-gray-800">
                <GradientText>{skill}</GradientText>
            </span>
        </div>
    );
};

export async function getServerSideProps() {
    const notionData = await notionInit();

    return {
        props: {
            skills: notionData.skills.results,
        },
    };
}
