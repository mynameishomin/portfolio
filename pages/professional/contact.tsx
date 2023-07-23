import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ProfessionalLayout from "@/components/layout/professional/layout";
import Visual from "@/components/layout/professional/visual";
import Container from "@/components/layout/professional/container";

const ContactForm = () => {
    return (
        <Container>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
            >
                <h3 className="mb-8 pb-2 border-b-2 border-gray-200 font-mt text-3xl font-extrabold">
                    Send me a message
                </h3>
                <form className="flex flex-col">
                    <div className="flex space-x-6 mb-6">
                        <div className="flex flex-col space-y-6 w-1/2">
                            <label className="flex flex-col">
                                <span className="block mb-2 text-xl font-mt font-extrabold">
                                    Name
                                </span>
                                <input
                                    className="p-4 h-12 border-2 border-gray-200 rounded text-lg"
                                    type="text"
                                />
                            </label>
                            <label className="flex flex-col">
                                <span className="block mb-2 text-xl font-mt font-extrabold">
                                    Email
                                </span>
                                <input
                                    className="p-4 h-12 border-2 border-gray-200 rounded text-lg"
                                    type="text"
                                />
                            </label>
                        </div>
                        <label className="flex flex-col w-1/2">
                            <span className="block mb-2 text-xl font-mt font-extrabold">
                                Message
                            </span>
                            <textarea className="grow p-4 border-2 border-gray-200 rounded text-lg" />
                        </label>
                    </div>
                    <div className="flex justify-end">
                        <button className="py-2 px-4 rounded bg-indigo-600 text-white font-mt font-extrabold hover:bg-indigo-700 active:bg-indigo-400">
                            Send email
                        </button>
                    </div>
                </form>
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
                                CONTACT
                            </h2>
                            <strong className="block mb-10 text-2xl text-gray-400">
                                There are many ways to contact me,
                                <br />
                                contact me any way you want
                            </strong>
                            <div className="grid grid-cols-2 gap-4">
                                <Link className="flex items-end" href="/">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        className="w-10 h-10 mr-2"
                                    >
                                        <path d="M192 32c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192c-17.7 0-32 14.3-32 32zM96 144c0-26.5-21.5-48-48-48S0 117.5 0 144V368c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144H128v96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48V144z" />
                                    </svg>
                                    <span className="leading-none text-2xl">
                                        Blog
                                    </span>
                                </Link>
                                <Link className="flex items-end" href="/">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        className="w-10 h-10 mr-2"
                                    >
                                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                    </svg>
                                    <span className="leading-none text-2xl">
                                        Instagram
                                    </span>
                                </Link>
                                <Link className="flex items-end" href="/">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        className="w-10 h-10 mr-2"
                                    >
                                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                    </svg>
                                    <span className="leading-none text-2xl">
                                        Twitter
                                    </span>
                                </Link>
                            </div>
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
        </ProfessionalLayout>
    );
};
