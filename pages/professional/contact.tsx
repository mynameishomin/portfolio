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
                                Email
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
                            <strong className="block mb-6 text-2xl text-gray-400">
                                There are many ways to contact me,
                                <br />
                                contact me any way you want
                            </strong>
                            <div className="grid grid-cols-2 gap-4">
                                <Link className="flex items-end" href="/">
                                    <div className="w-10 h-10 mr-4 bg-gray-400 animate-pulse rounded"></div>
                                    <span className="leading-none text-2xl">
                                        Instagram
                                    </span>
                                </Link>
                                <Link className="flex items-end" href="/">
                                    <div className="w-10 h-10 mr-4 bg-gray-400 animate-pulse rounded"></div>
                                    <span className="leading-none text-2xl">
                                        Instagram
                                    </span>
                                </Link>
                                <Link className="flex items-end" href="/">
                                    <div className="w-10 h-10 mr-4 bg-gray-400 animate-pulse rounded"></div>
                                    <span className="leading-none text-2xl">
                                        Instagram
                                    </span>
                                </Link>
                                <Link className="flex items-end" href="/">
                                    <div className="w-10 h-10 mr-4 bg-gray-400 animate-pulse rounded"></div>
                                    <span className="leading-none text-2xl">
                                        Instagram
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
