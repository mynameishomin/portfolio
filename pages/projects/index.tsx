import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, Key } from "react";
import { notionInit } from "@/utils/functions";

export default function Project() {
    const [projectData, setProjectData] = useState<any>([]);
    useEffect(() => {
        (async () => {
            setProjectData(await notionInit());
        })();
    }, []);
    console.log(projectData);

    return (
        <div className="grow font-han">
            <h2 className="text-point w-full mb-8 text-4xl">PROJECT</h2>
            {projectData.project ? (
                <ul>
                    {projectData.project.results.map(
                        (project: any, index: Key) => {
                            return (
                                <li key={index} className="flex">
                                    <strong className="block w-28 mr-10 shrink-0 text-xl border-r-2 border-point border-dashed">
                                        2022년
                                    </strong>
                                    <div
                                        className={`flex py-8 ${
                                            index ===
                                            projectData.project.results.length -
                                                1
                                                ? "border-none"
                                                : "border-b-2"
                                        }  border-dashed border-point`}
                                    >
                                        <div className="w-3/5 pr-4">
                                            <h4 className="mb-4 text-2xl">
                                                {
                                                    project.properties.Name
                                                        .title[0].plain_text
                                                }
                                            </h4>
                                            <p className="font-sans font-medium">
                                                {
                                                    project.properties.Summary
                                                        .rich_text[0].plain_text
                                                }
                                            </p>
                                        </div>
                                        <div className="w-2/5">
                                            <Image
                                                src={`${project.properties.Image.files[0].file.url}`}
                                                width={400}
                                                height={400}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </li>
                            );
                        }
                    )}
                </ul>
            ) : null}
        </div>
        // <ul className="flex flex-wrap relative w-full border-t-2 border-gray-900 lg:px-4">
        //     {projectData.project ? (
        //         <LatestList
        //             data={projectData.project.results}
        //             count={Infinity}
        //             factory={(data: any) => {
        //                 return (
        //                     <li
        //                         key={data.id}
        //                         className="flex flex-col lg:flex-row lg:w-1/3 py-2"
        //                     >
        //                         <div className="group bg-gray-600 p-2 overflow-hidden">
        //                             <Link
        //                                 className="relative"
        //                                 href={`projects/${data.id}`}
        //                             >
        //                                 <Image
        //                                     className="w-full object-contain"
        //                                     src={`${data.properties.Image.files[0].file.url}`}
        //                                     alt=""
        //                                     width={400}
        //                                     height={400}
        //                                 />

        //                                 <div className="absolute inset-0 flex flex-col opacity-0 hover:opacity-100 justify-end p-2 text-gray-200 bg-gradient-to-t from-gray-600 to-gray-400/[.5] transition-all duration-300">
        //                                     <div className="relative -bottom-16 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-300 delay-150">
        //                                         <h4 className="text-xl font-medium">
        //                                             {
        //                                                 data.properties.Name
        //                                                     .title[0].plain_text
        //                                             }
        //                                         </h4>
        //                                     </div>
        //                                 </div>
        //                             </Link>
        //                         </div>
        //                     </li>
        //                 );
        //             }}
        //         />
        //     ) : null}
        // </ul>
    );
}
