import Link from "next/link";
import Container from "./container";

const Gnb = () => {
    return (
        <nav className="ml-auto">
            <ul className="flex space-x-4 text-white text-lg font-semibold">
                <li className="hover:underline">
                    <Link href="/professional/portfolio">PORTFOLIO</Link>
                </li>
                <li className="hover:underline">
                    <Link href="/professional/skill">SKILL</Link>
                </li>
                <li className="hover:underline">
                    <Link href="/professional/contact">CONTACT</Link>
                </li>
            </ul>
        </nav>
    );
};

export default () => {
    return (
        <header className="h-20 bg-indigo-600">
            <Container className="flex items-center h-full">
                <>
                    <h1 className="text-2xl text-white font-semibold">
                        MY NAME IS HOMIN
                    </h1>
                    <Gnb />
                </>
            </Container>
        </header>
    );
};
