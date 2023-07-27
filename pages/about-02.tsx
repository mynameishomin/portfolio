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
                            &lt;웹퍼블리셔&gt;
                        </h2>
                        <strong className="block mb-6 text-2xl text-gray-400">
                            안녕하세요 웹퍼블리셔 정호민입니다. <br />
                            웹퍼블리셔로서의 저를 소개합니다.
                        </strong>
                        <p className="text-base text-gray-500">
                            웹퍼블리셔로서의 저는 HTML, CSS, Javascript를 다룰
                            수 있습니다. 또한, 웹표준, 웹접근성,
                            크로스브라우징에 대한 이해가 있습니다. 그리고,
                            웹퍼블리싱에 대한 기본적인 지식뿐만 아니라,
                            웹퍼블리싱에 대한 전반적인 이해가 있습니다.
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
        </Layout>
    );
};
