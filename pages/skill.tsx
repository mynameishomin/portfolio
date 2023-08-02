import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import Layout from "@/components/layout/layout";
import Visual from "@/components/layout/visual";
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
                <ul className="flex flex-wrap gap-4">
                    {loading ? (
                        <li className="rounded shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <button className="block">
                                <div className="p-2 pb-1 border border-gray-100 bg-white">
                                    <div className="w-24 h-24 rounded animate-pulse bg-gray-200"></div>
                                    <div className="h-6 mt-2 pb-0 font-mt text-gray-900 bg-gray-200 animate-pulse rounded font-extrabold"></div>
                                </div>
                            </button>
                        </li>
                    ) : (
                        skillList.map((skill: any) => {
                            const src = skill.properties.Icon.files[0].file.url;
                            const name =
                                skill.properties.Name.title[0].plain_text;
                            return (
                                <motion.li layoutId={skill.id} key={skill.id}>
                                    <div className="rounded shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                                        <button
                                            className="block"
                                            onClick={() => {
                                                setSelectedSkill(skill);
                                            }}
                                        >
                                            <div className="p-2 pb-1 border border-gray-100 bg-white">
                                                <div className="relative w-24 h-24">
                                                    <div className="w-full h-full rounded animate-pulse bg-gray-200"></div>
                                                    <Image
                                                        className="absolute inset-0 object-cover rounded"
                                                        src={src}
                                                        width={100}
                                                        height={100}
                                                        alt=""
                                                    />
                                                </div>
                                                <h3 className="h-6 mt-2 pb-0 font-mt text-gray-900 font-extrabold">
                                                    {name}
                                                </h3>
                                            </div>
                                        </button>
                                    </div>
                                </motion.li>
                            );
                        })
                    )}
                </ul>
                <AnimatePresence>
                    {selectedSkill.id ? (
                        <motion.div
                            key={selectedSkill.id + "selected"}
                            layoutId={selectedSkill.id}
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex w-96 p-2 pb-1 rounded shadow-md border border-gray-100 bg-white font-mt"
                        >
                            <div className="flex flex-col justify-end items-center mr-6">
                                <div className="relative w-24 h-24">
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
                                </div>
                                <h3 className="mt-2 pb-0 font-mt text-gray-900 font-extrabold">
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
                <Visual>
                    <div className="flex mb-8 pt-12 font-mt">
                        <motion.div
                            className="w-1/2 flex flex-col justify-center"
                            initial={{ x: -500, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                        >
                            <strong className="block mb-6 text-4xl text-gray-900">
                                Skill
                            </strong>
                            <p className="text-base text-gray-600">
                                제가 익힌 기술들을 소개합니다.
                                <br />
                                업무에 필요한 기술, 재미있어서 익힌 기술, 앞으로
                                배우고 싶은 기술 등을 정리해놓았습니다. <br />더
                                많은 걸 배우고 쌓아나가겠습니다.
                            </p>
                        </motion.div>
                        <motion.div
                            className="flex justify-center w-1/2"
                            initial={{ x: 500, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeInOut",
                            }}
                        >
                            <Image
                                src="/images/skill.png"
                                alt="프로필 사진"
                                width="300"
                                height="400"
                            />
                        </motion.div>
                    </div>
                </Visual>
                <SkillList />
            </>
        </Layout>
    );
};
