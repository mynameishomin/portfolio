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
                        router.pathname === "/contact" ? "text-[#E8FFE8]" : ""
                    } hover:underline`}
                >
                    <Link href="/contact">CONTACT</Link>
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
                <header className="h-20 bg-gray-900 font-black">
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
