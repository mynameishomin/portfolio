import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./container";

interface GnbProps {
    isOpen: boolean;
    setIsOpen: Function;
}

const Gnb = ({ isOpen, setIsOpen }: GnbProps) => {
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.innerWidth > 1024 ? setIsOpen(true) : setIsOpen(false);

            window.addEventListener("resize", () => {
                if (window.innerWidth > 1024) {
                    setIsOpen(true);
                } else {
                    setIsOpen(false);
                }
            });
        }
    }, []);

    const menuVariants = {
        open: {
            y: 0,
            opacity: 1,
        },
        closed: {
            y: -20,
            opacity: 0,
        },
    };

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="flex items-center ml-auto"
        >
            <motion.ul
                variants={{
                    open: {
                        y: 0,
                        transition: {
                            type: "keyframes",
                            delayChildren: 0.1,
                            staggerChildren: 0.05,
                        },
                    },
                    closed: {
                        y: "-100%",
                    },
                }}
                className="absolute inset-x-0 top-full flex flex-col items-center pb-6 pt-10 -mt-8 space-y-4 text-white text-lg font-semibold bg-gray-900 lg:static lg:flex-row lg:space-x-4 lg:top-auto lg:space-y-0 lg:pb-0 lg:pt-0 lg:mt-0 lg:bg-transparent lg:text-base"
            >
                <motion.li
                    variants={menuVariants}
                    key="2"
                    className={`${
                        router.pathname === "/portfolio" ? "text-[#E8FFE8]" : ""
                    } hover:underline`}
                >
                    <Link href="/portfolio">
                        <span className="lg:hidden">🖥️</span> PORTFOLIO
                    </Link>
                </motion.li>
                <motion.li
                    variants={menuVariants}
                    key="3"
                    className={`${
                        router.pathname === "/skill" ? "text-[#E8FFE8]" : ""
                    } hover:underline`}
                >
                    <Link href="/skill">
                        <span className="lg:hidden">🛠️</span> SKILL
                    </Link>
                </motion.li>
                <motion.li
                    variants={menuVariants}
                    key="4"
                    className={`${
                        router.pathname === "/blog" ? "text-[#E8FFE8]" : ""
                    } hover:underline`}
                >
                    <Link href="/blog">
                        <span className="lg:hidden">📝</span> BLOG
                    </Link>
                </motion.li>
                <motion.li
                    variants={menuVariants}
                    key="5"
                    className={`${
                        router.pathname === "/contact" ? "text-[#E8FFE8]" : ""
                    } hover:underline`}
                >
                    <Link href="/contact">
                        <span className="lg:hidden">✉️</span> CONTACT
                    </Link>
                </motion.li>
            </motion.ul>
            <motion.button
                type="button"
                className="-mr-4 p-4 text-white lg:hidden z-10"
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
            <div className="absolute inset-0 bg-gray-900 lg:hidden"></div>
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
                <header className="relative h-16 bg-gray-900 font-black z-50 lg:h-20">
                    <div className="fixed inset-x-0 h-16 bg-gray-900 lg:h-20">
                        <Container className="flex items-center h-full">
                            <>
                                <h1 className="relative text-xl text-white z-50 lg:text-2xl">
                                    <Link href="/">MY NAME IS HOMIN</Link>
                                </h1>
                                <Gnb isOpen={isOpen} setIsOpen={setIsOpen} />
                            </>
                        </Container>
                    </div>
                </header>
            </motion.div>
        </AnimatePresence>
    );
};
