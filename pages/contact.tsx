import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout/layout";
import Visual from "@/components/layout/visual";
import Container from "@/components/layout/container";
import LineTitle from "@/components/lineTitle";

const ContactForm = () => {
    return (
        <Container>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
            >
                <LineTitle>✉️ 메시지를 작성해주세요</LineTitle>
                <form className="flex flex-col">
                    <div className="flex space-x-6 mb-6">
                        <div className="flex flex-col space-y-6 w-1/2">
                            <label className="flex flex-col">
                                <span className="block mb-2 text-xl font-mt font-extrabold">
                                    이름
                                </span>
                                <input
                                    className="p-4 h-12 border-2 border-gray-200 rounded text-lg"
                                    type="text"
                                />
                            </label>
                            <label className="flex flex-col">
                                <span className="block mb-2 text-xl font-mt font-extrabold">
                                    이메일
                                </span>
                                <input
                                    className="p-4 h-12 border-2 border-gray-200 rounded text-lg"
                                    type="text"
                                />
                            </label>
                        </div>
                        <label className="flex flex-col w-1/2">
                            <span className="block mb-2 text-xl font-mt font-extrabold">
                                메시지
                            </span>
                            <textarea className="grow p-4 border-2 border-gray-200 rounded text-lg" />
                        </label>
                    </div>
                    <div className="flex justify-end">
                        <button className="py-2 px-4 rounded bg-indigo-600 text-white font-mt font-extrabold hover:bg-indigo-700 active:bg-indigo-400">
                            메시지 전송
                        </button>
                    </div>
                </form>
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
                                Contact
                            </strong>
                            <p className="text-base text-gray-600">
                                저에게 해주실 말씀이 있다면 언제든지 연락주세요.
                                <br />
                                잡담, 농담, 질문, 제안 등 모두 환영합니다.
                                <br />
                                빠른 시일 내에 답변드리겠습니다.
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
                <ContactForm />
            </>
        </Layout>
    );
};
