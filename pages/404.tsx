import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Roboto_Mono } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/layout/container";
import Layout from "@/components/layout/layout";

const roboto = Roboto_Mono({
    subsets: ["latin"],
});

interface HttpHeaders {
    [key: string]: string;
}

interface HttpMessageProps {
    url: string;
    status: number;
    statusText: string;
    headers: HttpHeaders;
}

export default function Error404() {
    const [httpMessage, setHttpMessage] = useState<null | HttpMessageProps>(
        null
    );
    const pathname = usePathname();

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.3,
            },
        },
    };

    const item = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
        },
    };

    useEffect(() => {
        fetch(pathname).then((response) => {
            const headers: HttpHeaders = {};
            for (let [key, value] of response.headers) {
                headers[key] = value;
            }

            const httpMessage: HttpMessageProps = {
                url: response.url,
                status: response.status,
                statusText: response.statusText,
                headers: headers,
            };

            setHttpMessage(httpMessage);
        });
    }, []);
    return (
        <Layout>
            <div className="absolute inset-0">
                <Container className="h-full">
                    <div
                        className={`${roboto.className} relative h-full text-white`}
                    >
                        <div className="absolute inset-0 flex justify-end items-end pb-5 text-9xl">
                            404
                        </div>

                        {httpMessage && (
                            <div className="h-full backdrop-blur-sm">
                                <AnimatePresence>
                                    <motion.ul
                                        className="flex flex-col gap-2"
                                        variants={container}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        {Object.keys(httpMessage.headers).map(
                                            (key) => {
                                                return (
                                                    <motion.li
                                                        className="text-xs"
                                                        key={key}
                                                        variants={item}
                                                        layout
                                                    >
                                                        <h3 className="text-gray-400">
                                                            &lt;{key}&gt;
                                                        </h3>
                                                        <span>
                                                            {
                                                                httpMessage
                                                                    .headers[
                                                                    key
                                                                ]
                                                            }
                                                        </span>
                                                    </motion.li>
                                                );
                                            }
                                        )}
                                    </motion.ul>
                                </AnimatePresence>
                            </div>
                        )}
                    </div>
                </Container>
            </div>
        </Layout>
    );
}
