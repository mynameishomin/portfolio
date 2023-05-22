import Link from "next/link";
import Image from "next/image";
import LatestList from "@/components/latestList";
import { baseUrl } from "@/utils/variable";
import { notionInit } from "@/utils/functions";

export default function Project({ projects }: { projects: Object[] }) {
    return (
        <ul className="flex flex-wrap relative w-full border-t-2 border-gray-900 lg:px-4">
            <LatestList
                data={projects}
                count={Infinity}
                factory={(data: any) => {
                    return (
                        <li
                            key={data.id}
                            className="flex flex-col lg:flex-row lg:w-1/3 py-2"
                        >
                            <div className="group bg-gray-600 p-2 overflow-hidden">
                                <Link
                                    className="relative"
                                    href={`projects/${data.id}`}
                                >
                                    <Image
                                        className="w-full object-contain"
                                        src={`${data.properties.Image.files[0].file.url}`}
                                        alt=""
                                        width={400}
                                        height={400}
                                    />

                                    <div className="absolute inset-0 flex flex-col opacity-0 hover:opacity-100 justify-end p-2 text-gray-200 bg-gradient-to-t from-gray-600 to-gray-400/[.5] transition-all duration-300">
                                        <div className="relative -bottom-16 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-300 delay-150">
                                            <h4 className="text-xl font-medium">
                                                {
                                                    data.properties.Name
                                                        .title[0].plain_text
                                                }
                                            </h4>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </li>
                    );
                }}
            />
        </ul>
    );
}

export async function getServerSideProps() {
    const notionData = await notionInit();
    return {
        props: {
            projects: notionData.project.results,
        },
    };
}
