import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./container";

const Gnb = () => {
    const router = useRouter();
    return (
        <nav className="ml-auto">
            <ul className="flex space-x-4 text-white text-lg font-semibold">
                <li
                    key="1"
                    className={`${
                        router.pathname === "/professional"
                            ? "text-[#E8FFE8]"
                            : ""
                    } hover:underline`}
                >
                    <Link href="/professional">ABOUT</Link>
                </li>
                <li
                    key="2"
                    className={`${
                        router.pathname === "/professional/portfolio"
                            ? "text-[#E8FFE8]"
                            : ""
                    } hover:underline`}
                >
                    <Link href="/professional/portfolio">PORTFOLIO</Link>
                </li>
                <li
                    key="3"
                    className={`${
                        router.pathname === "/professional/skill"
                            ? "text-[#E8FFE8]"
                            : ""
                    } hover:underline`}
                >
                    <Link href="/professional/skill">SKILL</Link>
                </li>
                <li
                    key="4"
                    className={`${
                        router.pathname === "/professional/contact"
                            ? "text-[#E8FFE8]"
                            : ""
                    } hover:underline`}
                >
                    <Link href="/professional/contact">CONTACT</Link>
                </li>
            </ul>
        </nav>
    );
};

export default () => {
    const router = useRouter();
    return (
        <AnimatePresence>
            <motion.div
                layoutId={router.pathname}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                exit={{ y: -100 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <header className="h-20 bg-[#00E1FF] font-black">
                    <Container className="flex items-center h-full">
                        <>
                            <h1 className="text-2xl text-white">
                                <Link href="/">MY NAME IS HOMIN</Link>
                            </h1>
                            <Gnb />
                        </>
                    </Container>
                </header>
            </motion.div>
        </AnimatePresence>
    );
};
