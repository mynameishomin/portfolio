import Link from "next/link";
import Container from "./container";

const FooterNav = () => {
    return (
        <nav className="text-gray-400 font-semibold text-sm sm:ml-auto">
            <ul className="flex space-x-4">
                <li className="hover:underline">
                    <Link href="/professional">ABOUT</Link>
                </li>
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
        <footer className="h-24 bg-gray-100 shadow-inner">
            <Container className="flex flex-col-reverse justify-center items-center h-full text-gray-500 sm:flex-row">
                <>
                    <strong className="block mt-4 text-base sm:mt-0">
                        © 2023 Jung Homin
                    </strong>
                    <FooterNav />
                </>
            </Container>
        </footer>
    );
};
