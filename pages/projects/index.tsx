import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, Key } from "react";
import { notionStore } from "@/utils/store/notion";
import { Skill } from "../skills";

export default function Project() {
    const [projects, setProjects] = useState<any[]>([]);
    const [skills, setSkills] = useState<Object[]>([]);
    const [filter, setFilter] = useState<String>("");

    const filterChage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(e.target.value);
    };

    useEffect(() => {
        (async () => {
            const notionData = notionStore.getState().notion;
            const sortProject = [...notionData.project.results].sort(
                (a: any, b: any) => {
                    return (
                        new Date(a.properties.Date.date.start).getTime() -
                        new Date(b.properties.Date.date.start).getTime()
                    );
                }
            );

            setProjects(sortProject.reverse());
            setSkills(notionData.skills.results);
        })();
    }, []);

    return (
        <div className="grow font-han">
            <h2 className="text-point w-full mb-8 text-4xl">PROJECT</h2>
            <div className="flex justify-end">
                <select onChange={filterChage}>
                    <option value="">전체</option>
                    <option value="퍼블리싱">퍼블리싱</option>
                    <option value="프론트엔드">프론트엔드</option>
                    <option value="토이">토이</option>
                </select>
            </div>
            {projects.length ? (
                <ul>
                    {projects
                        .filter((project: any) => {
                            if (!filter) return true;
                            return (
                                project.properties.Type.select.name === filter
                            );
                        })
                        .map((project: any, index: any) => {
                            const date = new Date(
                                project.properties.Date.date.start
                            );
                            let isYear = false;
                            if (index === 0) {
                                isYear = true;
                            } else if (
                                !(
                                    new Date(
                                        projects[
                                            index - 1
                                        ].properties.Date.date.start
                                    ).getFullYear() === date.getFullYear()
                                )
                            ) {
                                isYear = true;
                            }

                            return (
                                <li
                                    key={index}
                                    className="flex max-lg:flex-col"
                                >
                                    <div className="block w-28 mr-10 shrink-0 text-xl border-r-2 border-point border-dashed max-lg:border-r-0 max-lg:border-b-2 max-lg:w-full">
                                        {isYear ? (
                                            <span>{date.getFullYear()}년</span>
                                        ) : null}
                                    </div>
                                    <div
                                        className={`flex py-8 ${
                                            index === projects.length - 1
                                                ? "border-none"
                                                : "border-b-2"
                                        }  border-dashed border-point max-lg:flex-col-reverse max-lg:border-0`}
                                    >
                                        <div className="w-3/5 pr-4 max-lg:w-full">
                                            <h4 className="mb-4 text-2xl">
                                                {
                                                    project.properties.Name
                                                        .title[0].plain_text
                                                }
                                            </h4>
                                            <p className="mb-6 font-sans font-medium">
                                                {
                                                    project.properties.Summary
                                                        .rich_text[0].plain_text
                                                }
                                            </p>
                                            <ul className="mb-4">
                                                {project.properties.Skill.multi_select.map(
                                                    (
                                                        skill: any,
                                                        index: Key
                                                    ) => {
                                                        const skillData: any =
                                                            skills.filter(
                                                                (item: any) => {
                                                                    return (
                                                                        item.properties.Name.title[0].plain_text.toLocaleUpperCase() ===
                                                                        skill.name.toLocaleUpperCase()
                                                                    );
                                                                }
                                                            )[0];
                                                        const icon =
                                                            skillData.properties
                                                                .Icon.files[0]
                                                                .file.url;
                                                        const name =
                                                            skillData.properties
                                                                .Name.title[0]
                                                                .plain_text;
                                                        const possible =
                                                            JSON.parse(
                                                                skillData
                                                                    .properties
                                                                    .Possible
                                                                    .checkbox
                                                            );
                                                        return (
                                                            <li
                                                                className="inline-flex flex-col items-center mr-2 mb-2"
                                                                key={index}
                                                            >
                                                                <Skill
                                                                    name={name}
                                                                    possible={
                                                                        possible
                                                                    }
                                                                    icon={icon}
                                                                />
                                                            </li>
                                                        );
                                                    }
                                                )}
                                            </ul>
                                            <Link
                                                className="pt-2 pb-1 px-3 bg-point text-white rounded"
                                                href={{
                                                    pathname: `/projects/${project.id}`,
                                                    query: {
                                                        name: project.properties
                                                            .Name.title[0]
                                                            .plain_text,
                                                    },
                                                }}
                                            >
                                                자세히보기
                                            </Link>
                                        </div>
                                        <div className="relative w-2/5 max-lg:w-full max-lg:mb-4">
                                            <span className="absolute flex justify-center items-center">
                                                이미지 불러오는 중...
                                            </span>
                                            <Link
                                                className="relative"
                                                href={{
                                                    pathname: `/projects/${project.id}`,
                                                    query: {
                                                        name: project.properties
                                                            .Name.title[0]
                                                            .plain_text,
                                                    },
                                                }}
                                            >
                                                <Image
                                                    src={`${project.properties.Image.files[0].file.url}`}
                                                    width={400}
                                                    height={400}
                                                    alt=""
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                </ul>
            ) : null}
        </div>
    );
}
