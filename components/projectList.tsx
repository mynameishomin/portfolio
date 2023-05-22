import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ProjectList({ data }: { data: any }) {
    return (
        <Swiper
            className="flex flex-nowrap relative w-full !p-4 space-x-4 border-t-2 border-gray-900"
            spaceBetween={24}
            slidesPerView={"auto"}
        >
            {[...data]
                .reverse()
                .slice(0, 3)
                .map((project) => {
                    return (
                        <SwiperSlide
                            key={project.id}
                            className="relative !w-96 !h-56 shrink-0 py-2 rounded-lg overflow-hidden border-solid border-2 border-gray-600"
                        >
                            <Link
                                className="group block w-full h-full"
                                href={{
                                    pathname: `/projects/${project.id}`,
                                    query: {
                                        project: JSON.stringify(project),
                                    },
                                }}
                                as={`/projects/${project.id}`}
                            >
                                <div className="absolute inset-0 flex justify-center items-center">
                                    <span className="text-gray-400">
                                        이미지 불러오는 중...
                                    </span>
                                </div>

                                <Image
                                    className="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:scale-110"
                                    src={`${project.properties.Image.files[0].file.url}`}
                                    alt=""
                                    width={580}
                                    height={320}
                                />

                                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-gradient-to-t from-gray-800">
                                    <h4 className="text-xl font-medium truncate">
                                        {
                                            project.properties.Name.title[0]
                                                .plain_text
                                        }
                                    </h4>
                                </div>
                            </Link>
                        </SwiperSlide>
                    );
                })}
            {/* <LatestList
                data={data}
                count={3}
                factory={(data: any) => {
                    return (
                        <SwiperSlide
                            key={data.id}
                            className="relative w-96 h-56 shrink-0 py-2 rounded-lg overflow-hidden"
                        >
                            <Link
                                className="block w-full h-full"
                                href={{
                                    pathname: `/projects/${data.id}`,
                                    query: {
                                        project: JSON.stringify(data),
                                    },
                                }}
                                as={`/projects/${data.id}`}
                            >
                                <Image
                                    className="absolute inset-0 w-full h-full object-cover"
                                    src={`${data.properties.Image.files[0].file.url}`}
                                    alt=""
                                    width={580}
                                    height={320}
                                />

                                <div className="absolute inset-0 flex flex-col opacity-0 hover:opacity-100 justify-end p-2 text-gray-200 bg-gradient-to-t from-gray-600 to-gray-400/[.5] transition-all duration-300">
                                    <div className="relative -bottom-16 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-300 delay-150">
                                        <h4 className="text-xl font-medium">
                                            {
                                                data.properties.Name.title[0]
                                                    .plain_text
                                            }
                                        </h4>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    );
                }}
            /> */}
        </Swiper>
        // <ul className="flex flex-nowrap relative p-4 space-x-4 border-t-2 border-gray-900">
        //     <LatestList
        //         data={data}
        //         count={3}
        //         factory={(data: any) => {
        //             return (
        //                 <li
        //                     key={data.id}
        //                     className="relative w-96 h-56 shrink-0 py-2 rounded-lg overflow-hidden"
        //                 >
        //                     <Link
        //                         className="block w-full h-full"
        //                         href={{
        //                             pathname: `/projects/${data.id}`,
        //                             query: {
        //                                 project: JSON.stringify(data),
        //                             },
        //                         }}
        //                         as={`/projects/${data.id}`}
        //                     >
        //                         <Image
        //                             className="absolute inset-0 w-full h-full object-cover"
        //                             src={`${data.properties.Image.files[0].file.url}`}
        //                             alt=""
        //                             width={580}
        //                             height={320}
        //                         />

        //                         <div className="absolute inset-0 flex flex-col opacity-0 hover:opacity-100 justify-end p-2 text-gray-200 bg-gradient-to-t from-gray-600 to-gray-400/[.5] transition-all duration-300">
        //                             <div className="relative -bottom-16 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-300 delay-150">
        //                                 <h4 className="text-xl font-medium">
        //                                     {
        //                                         data.properties.Name.title[0]
        //                                             .plain_text
        //                                     }
        //                                 </h4>
        //                             </div>
        //                         </div>
        //                     </Link>
        //                 </li>
        //             );
        //         }}
        //     />
        // </ul>
    );
}
