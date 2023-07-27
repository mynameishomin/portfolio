import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "@/components/layout/layout";
import Visual from "@/components/layout/visual";

export default () => {
    return (
        <Layout>
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
                            정호민
                        </h2>
                        <strong className="block mb-6 text-2xl text-gray-400">
                            안녕하세요 정호민입니다. <br />
                            저를 소개합니다.
                        </strong>
                        <p className="text-base text-gray-500">
                            호기심 넘치고 배움에 욕심이 많은 저는 업무에 필요한
                            기술뿐 아니라 <br />
                            새로운 스포츠 새로운 취미도 다양하게 습득합니다.
                            <br />
                            저에게 새로운 것을 알려주실래요?
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
                            src="/images/profile_02.png"
                            alt="프로필 사진"
                            width="400"
                            height="400"
                        />
                    </motion.div>
                </div>
            </Visual>
        </Layout>
    );
};
