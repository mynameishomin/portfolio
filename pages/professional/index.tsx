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
                    <>
                        <div className="flex mb-8 border-b-2 border-b-gray-200">
                            <motion.div
                                className="w-1/2"
                                initial={{ x: -500, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut",
                                }}
                            >
                                <h2 className="mb-6 pt-16 text-5xl font-semibold text-gray-800">
                                    PROFESSINOAL
                                </h2>
                                <strong className="block mb-6 text-2xl text-gray-400 font-medium">
                                    정호민의 프로페셔널한 면, <br />
                                    일과 학습에 대해서는 진지한 자세로 임합니다.
                                </strong>
                                <p className="text-base text-gray-500 ">
                                    2022년부터 퍼블리셔로 성실하게 근무하고
                                    있으며
                                    <br />
                                    한국방송통신대학교에 재학중입니다.
                                    <br />
                                    자격증 취득 및 지속적인 학습을 통해
                                    <br />더 나은 "사람"이 되기 위해 노력하고
                                    있습니다.
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
                            이미지 스와이퍼 자리
                        </div>
                    </>
                </Visual>
                <Container>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                    >
                        hello
                    </motion.div>
                </Container>
            </>
        </ProfessionalLayout>
    );
};
