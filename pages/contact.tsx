import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Layout from "@/components/layout/layout";
import { SubVisual } from "@/components/layout/visual";
import Container from "@/components/layout/container";
import LineTitle from "@/components/lineTitle";
import Alert from "@/components/Alert";

const ContactForm = () => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userComment, setUserComment] = useState("");
    const [alert, setAlert] = useState("");

    const saveState = (modifier: any) => {
        return (event: any) => {
            modifier(event.target.value);
        };
    };

    const sendMessage = async () => {
        let message = "";
        if (userName === "") {
            message = "이름을 입력해주세요";
        } else if (userEmail === "") {
            message = "이메일을 입력해주세요";
        } else if (userComment === "") {
            message = "메시지를 입력해주세요";
        } else {
            message = "메시지가 전송되었습니다";
            fetch("/api/sendMessage", {
                method: "POST",
                headers: {},
                body: JSON.stringify({
                    name: userName,
                    email: userEmail,
                    comment: userComment,
                }),
            });
            setUserName("");
            setUserEmail("");
            setUserComment("");
        }

        setAlert(message);
        setTimeout(() => {
            setAlert("");
        }, 2000);
    };

    return (
        <AnimatePresence>
            <Container>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                >
                    <LineTitle>✉️ 메시지를 작성해주세요</LineTitle>
                    <div className="flex flex-col">
                        <div className="flex flex-col mb-6 space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
                            <div className="flex flex-col space-y-2 sm:space-y-6 sm:w-1/2">
                                <label className="flex flex-col">
                                    <span className="block mb-1 font-extrabold sm:text-xl">
                                        이름
                                    </span>
                                    <input
                                        name="name"
                                        className="p-4 h-5 border-2 border-gray-200 rounded text-lg sm:h-12"
                                        type="text"
                                        value={userName}
                                        onChange={saveState(setUserName)}
                                    />
                                </label>
                                <label className="flex flex-col">
                                    <span className="block mb-1 font-extrabold sm:text-xl">
                                        이메일
                                    </span>
                                    <input
                                        name="email"
                                        className="p-4 h-5 border-2 border-gray-200 rounded text-lg sm:h-12"
                                        type="email"
                                        value={userEmail}
                                        onChange={saveState(setUserEmail)}
                                    />
                                </label>
                            </div>
                            <label className="flex flex-col sm:w-1/2">
                                <span className="block mb-2 font-extrabold sm:text-xl">
                                    메시지
                                </span>
                                <textarea
                                    name="comment"
                                    className="grow p-4 border-2 border-gray-200 rounded text-lg"
                                    value={userComment}
                                    onChange={saveState(setUserComment)}
                                />
                            </label>
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="w-full py-2 px-4 rounded bg-indigo-600 text-white font-extrabold hover:bg-indigo-700 active:bg-indigo-400 sm:w-auto"
                                onClick={sendMessage}
                            >
                                메시지 전송
                            </button>
                        </div>
                    </div>
                    {alert ? <Alert text={alert} /> : null}
                </motion.div>
            </Container>
        </AnimatePresence>
    );
};

export default () => {
    return (
        <Layout>
            <>
                <SubVisual
                    title="CONTACT"
                    text="저에게 해주실 말씀이 있다면 언제든지 연락주세요. 잡담, 농담, 질문, 제안 등 모두 환영합니다."
                    src="/images/profile.png"
                    alt=""
                />
                <ContactForm />
            </>
        </Layout>
    );
};
