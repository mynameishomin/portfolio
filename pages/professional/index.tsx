import Image from "next/image";
import ProfessionalLayout from "@/components/layout/professional/layout";
import Visual from "@/components/layout/professional/visual";
import { motion } from "framer-motion";
import Container from "@/components/layout/professional/container";

export default () => {
    return (
        <ProfessionalLayout>
            <>
                <Visual>
                    <div className="py-12">
                        <div className="flex mb-8 border-b-2 border-b-gray-200 font-mt">
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
                                    PROFESSINOAL
                                </h2>
                                <strong className="block mb-6 text-2xl text-gray-400">
                                    This is the professional part <br />
                                    We are serious about work and learning.
                                </strong>
                                <p className="text-base text-gray-500">
                                    Since 2022, I have been working diligently
                                    as a publisher. I am currently attending
                                    Korea National Open University. Through
                                    certification acquisition and continuous
                                    learning I'm trying to be a better "person".
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
                        <div className="flex items-center justify-center h-32 rounded-xl animate-pulse bg-gray-200">
                            Instagram peed swiper area
                        </div>
                    </div>
                </Visual>
                <Container>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        className="flex justify-center items-center bg-gray-200 h-96 rounded-xl animate-pulse"
                    >
                        Contents Area
                    </motion.div>
                </Container>
            </>
        </ProfessionalLayout>
    );
};
