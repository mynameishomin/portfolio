import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./container";

interface GnbProps {
    isOpen: boolean;
    setIsOpen: Function;
}

const Gnb = ({ isOpen, setIsOpen }: GnbProps) => {
    console.log(isOpen);
    const router = useRouter();

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="flex items-center ml-auto"
        >
            <ul className="flex space-x-4 text-white text-lg font-semibold">
                <li
                    key="2"
                    className={`${
                        router.pathname === "/portfolio" ? "text-[#E8FFE8]" : ""
                    } hover:underline`}
                >
                    <Link href="/portfolio">PORTFOLIO</Link>
                </li>
                <li
                    key="3"
                    className={`${
                        router.pathname === "/skill" ? "text-[#E8FFE8]" : ""
                    } hover:underline`}
                >
                    <Link href="/skill">SKILL</Link>
                </li>
                <li
                    key="4"
                    className={`${
                        router.pathname === "/blog" ? "text-[#E8FFE8]" : ""
                    } hover:underline`}
                >
                    <Link href="/blog">BLOG</Link>
                </li>
                <li
                    key="5"
                    className={`${
                        router.pathname === "/contact" ? "text-[#E8FFE8]" : ""
                    } hover:underline`}
                >
                    <Link href="/contact">CONTACT</Link>
                </li>
            </ul>
            <motion.button
                type="button"
                className="p-4 text-white lg:hidden"
                title="메뉴 열기"
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                variants={{
                    open: { rotate: 180, color: "#999" },
                    closed: { rotate: 0, color: "#fff" },
                }}
                onClick={() => setIsOpen((prev: boolean) => !prev)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    className="w-6 h-6"
                >
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>
            </motion.button>
        </motion.nav>
    );
};

export default () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <AnimatePresence>
            <motion.div
                layoutId={router.pathname}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                exit={{ y: -100 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <header className="h-20 bg-gray-900 font-black">
                    <Container className="flex items-center h-full">
                        <>
                            <h1 className="text-2xl text-white">
                                <Link href="/">MY NAME IS HOMIN</Link>
                            </h1>
                            <Gnb isOpen={isOpen} setIsOpen={setIsOpen} />
                        </>
                    </Container>
                </header>
            </motion.div>
        </AnimatePresence>
    );
};
