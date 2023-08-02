import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "@/components/layout/layout";
import Visual from "@/components/layout/visual";
import Container from "@/components/layout/container";

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
                            <strong className="block mb-6 text-2xl text-gray-900">
                                안녕하세요 웹퍼블리셔 정호민입니다. <br />
                                저를 소개합니다.
                            </strong>
                            <p className="text-base text-gray-600">
                                시키는 일만 하기보다 해야할 일을 찾아내고 <br />
                                기계적으로 일을 하기보다 더 효율적인 방법을 찾아
                                일하는 것을 좋아합니다. <br />
                                저와 함께 일 하실래요?
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
                <Container>
                    <motion.div
                        className="space-y-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 1,
                            duration: 0.5,
                            ease: "easeInOut",
                        }}
                    >
                        <section className="flex space-x-32">
                            <div className="grow">
                                <h3 className="mb-6 text-3xl font-black text-gray-900">
                                    🖥️ 업무는 효율적으로
                                </h3>
                                <p className="break-keep">
                                    반복적인 일을 기계적으로 수행하면서 시간을
                                    떼우는 것을 싫어합니다. 오히려 시간이 더
                                    걸리더라도 자동화 혹은 단축키 학습 등의
                                    방법을 통해 효율적으로 일하는 것을
                                    선호합니다.
                                    <br />
                                    <br />
                                    개인적으로 진행했던 사이드 프로젝트 중에서
                                    가장 자랑하고 싶은 것은 출결 자동화입니다.
                                    특정 시스템을 통하여 매일 출퇴근을
                                    등록해야하는데 이 과정을 파이썬으로
                                    자동화하여 매일 출퇴근을 직접 등록하지
                                    않아도 되게 만들었습니다.
                                    <br />
                                    <br />
                                    이러한 업무 방식으로 절약한 시간을 통해 더
                                    많은 업무를 수행하거나 기존 업무 프로세스를
                                    더욱 개선하며 더 나은 결과물을 만들어내고자
                                    합니다.
                                </p>
                            </div>
                            <div className="relative w-80 shrink-0">
                                <Image
                                    className="block rounded-xl w-full shadow-xl"
                                    src="/images/about-02_01.jpeg"
                                    width="500"
                                    height="500"
                                    alt="출결 자동화 캡쳐"
                                />
                                <span className="absolute bottom-2 right-2  pb-0.5 px-2 text-gray-900 bg-gray-200 rounded font-black text-sm">
                                    출결 자동화
                                </span>
                            </div>
                        </section>

                        <section className="flex space-x-32">
                            <div className="relative w-80 shrink-0">
                                <Image
                                    className="block rounded-xl w-full shadow-xl"
                                    src="/images/about-02_02.jpeg"
                                    width="500"
                                    height="500"
                                    alt="지게차 운전중인 저의 모습"
                                />
                                <span className="absolute bottom-2 right-2  pb-0.5 px-2 text-gray-900 bg-gray-200 rounded font-black text-sm">
                                    지게차 운전중
                                </span>
                            </div>
                            <div className="grow">
                                <h3 className="mb-6 text-3xl font-black text-gray-900">
                                    🚚 필요한 기술은 찾아서 습득
                                </h3>
                                <p className="break-keep">
                                    업무를 수행하면서 필요한 기술은 계속 생기기
                                    마련입니다.
                                </p>
                            </div>
                        </section>

                        <section className="flex space-x-32">
                            <div className="grow">
                                <h3 className="mb-6 text-3xl font-black text-gray-900">
                                    임시텍스트
                                </h3>
                                <p className="break-keep">
                                    임시 텍스트
                                    <br />
                                </p>
                            </div>
                            <div className="relative w-80 shrink-0">
                                <Image
                                    className="block rounded-xl w-full shadow-xl"
                                    src="/images/about-01_03.jpeg"
                                    width="500"
                                    height="500"
                                    alt="지게차 운전중인 저의 모습"
                                />
                                <span className="absolute bottom-2 right-2  pb-0.5 px-2 text-gray-900 bg-gray-200 rounded font-black text-sm">
                                    임시 텍스트
                                </span>
                            </div>
                        </section>
                    </motion.div>
                </Container>
            </>
        </Layout>
    );
};
