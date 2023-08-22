import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import Layout from "@/components/layout/layout";
import { SubVisual } from "@/components/layout/visual";
import Container from "@/components/layout/container";
import { getNotionData } from "@/utils/functions";
import { skillId } from "@/utils/variable";

const SkillList = () => {
    const [skillList, setSkillList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedSkill, setSelectedSkill] = useState<any>({});
    useEffect(() => {
        getNotionData(skillId).then((data) => {
            setSkillList(data);
            setLoading(false);
        });
    }, []);
    return (
        <Container>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
            >
                <ul className="grid gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 lg:gap-8">
                    {loading ? (
                        <li className="rounded shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <button className="block">
                                <div className="p-2 pb-1 border border-gray-100 bg-white">
                                    <div className="w-24 h-24 rounded animate-pulse bg-gray-200"></div>
                                    <div className="h-6 mt-2 pb-0 text-gray-900 bg-gray-200 animate-pulse rounded font-extrabold"></div>
                                </div>
                            </button>
                        </li>
                    ) : (
                        skillList.map((skill: any) => {
                            const src = skill.properties.Icon.files[0].file.url;
                            const name =
                                skill.properties.Name.title[0].plain_text;
                            const possible = skill.properties.Possible.checkbox;
                            return (
                                <li key={skill.id}>
                                    <div className="relative rounded shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                                        <button
                                            className="block w-full"
                                            onClick={() => {
                                                setSelectedSkill(skill);
                                            }}
                                        >
                                            <div
                                                className={`flex flex-col items-center p-2 pb-1 border border-gray-100 bg-white ${
                                                    possible ? "" : "opacity-25"
                                                }`}
                                            >
                                                <motion.div
                                                    layoutId={skill.id}
                                                    className="relative w-20 h-20 sm:w-24 sm:h-24"
                                                >
                                                    <div className="w-full h-full rounded animate-pulse bg-gray-200"></div>
                                                    <Image
                                                        className="absolute inset-0 object-cover rounded"
                                                        src={src}
                                                        width={100}
                                                        height={100}
                                                        alt=""
                                                    />
                                                </motion.div>
                                                <h3 className="h-6 mt-2 pb-0 text-gray-900 font-extrabold">
                                                    {name}
                                                </h3>
                                            </div>
                                            {possible ? null : (
                                                <div className="absolute inset-0 flex justify-center items-center">
                                                    <svg
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        data-prefix="fas"
                                                        data-icon="lock"
                                                        className="block w-8 h-8"
                                                        role="img"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 448 512"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
                                                        ></path>
                                                    </svg>
                                                </div>
                                            )}
                                        </button>
                                    </div>
                                </li>
                            );
                        })
                    )}
                </ul>
                <AnimatePresence>
                    {selectedSkill.id ? (
                        <motion.div
                            key={selectedSkill.id + "selected"}
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex w-96 p-2 pb-1 rounded shadow-md border border-gray-100 bg-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className="flex flex-col justify-end items-center mr-6">
                                <motion.div
                                    layoutId={selectedSkill.id}
                                    className="relative w-24 h-24"
                                >
                                    <div className="w-full h-full rounded animate-pulse bg-gray-200"></div>
                                    <Image
                                        className="absolute inset-0 object-cover rounded"
                                        src={
                                            selectedSkill.properties.Icon
                                                .files[0].file.url
                                        }
                                        width={100}
                                        height={100}
                                        alt=""
                                    />
                                </motion.div>
                                <h3 className="mt-2 pb-0 text-gray-900 font-extrabold">
                                    {
                                        selectedSkill.properties.Name.title[0]
                                            .plain_text
                                    }
                                </h3>
                            </div>

                            <p className="py-2 mr-8 text-base break-keep">
                                {
                                    selectedSkill.properties.Summary
                                        .rich_text[0].plain_text
                                }
                            </p>

                            <button
                                className="absolute top-4 right-4 hover:rotate-90 duration-300"
                                onClick={() => {
                                    setSelectedSkill({});
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                    className="w-5 h-5"
                                >
                                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                                </svg>
                            </button>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </motion.div>
        </Container>
    );
};

export default () => {
    return (
        <Layout>
            <>
                <SubVisual
                    title="SKILL"
                    text="제가 익힌 기술들을 소개합니다. 업무에 필요한 기술, 재미있어서 익힌 기술, 앞으로 배우고 싶은 기술 등을 정리해놓았습니다. 더 많은 걸 배우고 쌓아나가겠습니다."
                    src="/images/profile.png"
                    alt=""
                />

                <SkillList />
            </>
        </Layout>
    );
};
