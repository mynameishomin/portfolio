import { useRouter } from "next/router";
import Image from "next/image";
import { Skill } from "../skills";
import { Key } from "react";
import { notionInit } from "@/utils/functions";
import Link from "next/link";

export default function ProjectDetail({
    projects,
    skills,
}: {
    projects: Object[];
    skills: Object[];
}) {
    const router = useRouter();
    const projectData: any = projects.filter((project: any) => {
        return project.id === router.query.id;
    })[0];
    const usedSkillName = projectData.properties.Skill.multi_select
        .map(({ name }: { name: string }) => {
            return name.toLocaleUpperCase();
        })
        .join("");
    const usedSkills = skills.filter((item: any) => {
        return (
            usedSkillName.indexOf(
                item.properties.Name.title[0].plain_text.toLocaleUpperCase()
            ) !== -1
        );
    });

    return (
        <div>
            <div className="flex flex-col lg:mb-16 lg:flex-row lg:space-x-8">
                <div className="mb-6 lg:w-1/2 lg:mb-0">
                    <div className="p-4 bg-gray-600">
                        <Image
                            className="w-full object-contain"
                            src={`${projectData.properties.Image.files[0].file.url}`}
                            alt=""
                            width={400}
                            height={400}
                        />
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <h2 className="mb-4 text-2xl font-bold">
                        {projectData.properties.Name.title[0].plain_text}
                    </h2>
                    <pre className="mb-2 text-md whitespace-pre-wrap break-keep">
                        {projectData.properties.Summary.rich_text[0].plain_text}
                    </pre>
                    <span className="mb-4 block text-sm">
                        {projectData.properties.Date.date.start}
                    </span>

                    <div className="mb-8 text-center">
                        <a
                            href={projectData.properties.URL.url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="px-2 py-0.5 text-sm text-gray-100 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500">
                                홈페이지 바로 가기
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <ul className="flex flex-wrap mb-8">
                    {usedSkills
                        ? usedSkills.map((item: any, index: Key) => {
                              return (
                                  <li
                                      className="w-1/4 mb-4 shrink-0 lg:w-28 lg:mb-0"
                                      key={index}
                                  >
                                      <Link
                                          href={{
                                              pathname: `/skills`,
                                              query: {
                                                  id: item.id,
                                              },
                                          }}
                                      >
                                          <Skill
                                              skill={
                                                  item.properties.Name.title[0]
                                                      .plain_text
                                              }
                                              possible={
                                                  item.properties.Possible
                                                      .checkbox
                                              }
                                              src={
                                                  item.properties.Icon.files[0]
                                                      .file.url
                                              }
                                          />
                                      </Link>
                                  </li>
                              );
                          })
                        : null}
                </ul>
                <h3 className="mb-4 text-xl font-bold">Review</h3>
                <pre className="pb-8 text-md whitespace-pre-wrap break-keep">
                    {projectData.properties.Review.rich_text[0].plain_text}
                </pre>
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    const notionData = await notionInit();

    return {
        props: {
            projects: notionData.project.results,
            skills: notionData.skills.results,
        },
    };
}
