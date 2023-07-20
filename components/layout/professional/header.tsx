import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { motion } from "framer-motion";
import Container from "./container";

const Gnb = () => {
    const router = useRouter();
    console.log(router.pathname);
    return (
        <nav className="ml-auto">
            <ul className="flex space-x-4 text-white text-lg font-semibold">
                <li className={`${router.pathname === "/professional" ? "text-point" : ""} hover:underline`}>
                    <Link href="/professional">ABOUT</Link>
                </li>
                <li className={`${router.pathname === "/professional/portfolio" ? "text-point" : ""} hover:underline`}>
                    <Link href="/professional/portfolio">PORTFOLIO</Link>
                </li>
                <li className={`${router.pathname === "/professional/skill" ? "text-point" : ""} hover:underline`}>
                    <Link href="/professional/skill">SKILL</Link>
                </li>
                <li className={`${router.pathname === "/professional/contact" ? "text-point" : ""} hover:underline`}>
                    <Link href="/professional/contact">CONTACT</Link>
                </li>
            </ul>
        </nav>
    );
};

export default () => {
    return (
        <header className="h-20 bg-indigo-600 font-mt font-extrabold">
            <Container className="flex items-center h-full">
                <>
                    <h1 className="text-2xl text-white">
                        <Link href="/">MY NAME IS HOMIN</Link>
                    </h1>
                    <Gnb />
                </>
            </Container>
        </header>
    );
};
