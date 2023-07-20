import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import ProfessionalLayout from "@/components/layout/professional/layout";
import Visual from "@/components/layout/professional/visual";
import Container from "@/components/layout/professional/container";

interface ISelctedSkill {
    name: string;
}

const SkillList = () => {
    const [selectedSkill, setSelectedSkill] = useState<ISelctedSkill>({
        name: "",
    });
    return (
        <Container>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
            >
                <AnimatePresence>
                    <ul className="flex space-x-4">
                        <motion.li
                            layoutId="1"
                            className="hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                            transition={{ duration: 0, delay: 0 }}
                        >
                            <button
                                onClick={() =>
                                    setSelectedSkill({ name: "javascript" })
                                }
                            >
                                <div className="p-2 pb-1 rounded shadow-md border border-gray-100 bg-white">
                                    {/* 임시 이미지 */}
                                    <div className="w-24 h-24 rounded animate-pulse bg-gray-200"></div>
                                    <h3 className="mt-2 pb-0 font-mt text-gray-900 font-extrabold">
                                        Javascript
                                    </h3>
                                </div>
                            </button>
                        </motion.li>
                        <motion.li
                            layoutId="2"
                            className="hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                            transition={{ duration: 0, delay: 0 }}
                        >
                            <button
                                onClick={() =>
                                    setSelectedSkill({ name: "javascript" })
                                }
                            >
                                <div className="p-2 pb-1 rounded shadow-md border border-gray-100 bg-white">
                                    {/* 임시 이미지 */}
                                    <div className="w-24 h-24 rounded animate-pulse bg-gray-200"></div>
                                    <h3 className="mt-2 pb-0 font-mt text-gray-900 font-extrabold">
                                        Javascript
                                    </h3>
                                </div>
                            </button>
                        </motion.li>
                        <motion.li
                            layoutId="3"
                            className="hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                            transition={{ duration: 0, delay: 0 }}
                        >
                            <button
                                onClick={() =>
                                    setSelectedSkill({ name: "javascript" })
                                }
                            >
                                <div className="p-2 pb-1 rounded shadow-md border border-gray-100 bg-white">
                                    {/* 임시 이미지 */}
                                    <div className="w-24 h-24 rounded animate-pulse bg-gray-200"></div>
                                    <h3 className="mt-2 pb-0 font-mt text-gray-900 font-extrabold">
                                        Javascript
                                    </h3>
                                </div>
                            </button>
                        </motion.li>
                        <motion.li
                            layoutId="4"
                            className="hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                            transition={{ duration: 0, delay: 0 }}
                        >
                            <button
                                onClick={() =>
                                    setSelectedSkill({ name: "javascript" })
                                }
                            >
                                <div className="p-2 pb-1 rounded shadow-md border border-gray-100 bg-white">
                                    {/* 임시 이미지 */}
                                    <div className="w-24 h-24 rounded animate-pulse bg-gray-200"></div>
                                    <h3 className="mt-2 pb-0 font-mt text-gray-900 font-extrabold">
                                        Javascript
                                    </h3>
                                </div>
                            </button>
                        </motion.li>
                    </ul>
                    {selectedSkill.name ? (
                        <motion.div
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 p-2 pb-1 rounded shadow-md border border-gray-100 bg-white"
                            layoutId="3"
                            transition={{ duration: 0, delay: 0 }}
                        >
                            {/* 임시 이미지 */}
                            <div className="w-24 h-24 rounded animate-pulse bg-gray-200"></div>
                            <h3 className="mt-2 pb-0 font-mt text-gray-900 font-extrabold">
                                Javascript
                            </h3>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </motion.div>
        </Container>
    );
};

export default () => {
    return (
        <ProfessionalLayout>
            <>
                <Visual>
                    <div className="flex mb-8 pt-12 font-mt">
                        <motion.div
                            className="w-1/2"
                            initial={{ x: -500, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                        >
                            <h2 className="mb-6 pt-16 text-5xl font-extrabold text-gray-800">
                                SKILL
                            </h2>
                            <strong className="block mb-6 text-2xl text-gray-400">
                                I can use these skills now <br />
                                and will use many more in the future.
                            </strong>
                            <p className="text-base text-gray-500">
                                I will learn more in the future,
                                <br />
                                and I am ready to learn whatever it is if you
                                direct it.
                                <br />
                                I'm not afraid to learn
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
                                src="/images/profile_01.png"
                                alt="프로필 사진"
                                width="400"
                                height="400"
                            />
                        </motion.div>
                    </div>
                </Visual>
                <SkillList />
            </>
        </ProfessionalLayout>
    );
};
