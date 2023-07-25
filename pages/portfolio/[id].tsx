import Image from "next/image";
import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import { motion } from "framer-motion";
import Layout from "@/components/layout/layout";
import Visual from "@/components/layout/visual";

export default function ProjectDetail({
    notionBlockMap,
}: {
    notionBlockMap: any;
}) {
    return (
        <Layout>
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
                                PORTFOLIO
                            </h2>
                            <strong className="block mb-6 text-2xl text-gray-400">
                                This is my proud portfolio. <br />
                                Work with me if you like this
                            </strong>
                            <p className="text-base text-gray-500">
                                Most of my portfolio is web publishing, but I
                                can also do front-end development and planning.
                                And if you would like to entrust me with other
                                tasks, welcome. I can do anything.
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
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                >
                    <NotionRenderer blockMap={notionBlockMap} fullPage={true} />
                </motion.div>
            </>
        </Layout>
    );
}

export async function getServerSideProps(context: any) {
    const notionBlockMap = await (
        await fetch(
            `https://notion-api.splitbee.io/v1/page/${context.params.id}`
        )
    ).json();
    return {
        props: {
            notionBlockMap,
        },
    };
}
