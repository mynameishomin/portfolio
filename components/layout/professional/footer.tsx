import Link from "next/link";
import Container from "./container";

const FooterNav = () => {
    return (
        <nav className="ml-auto text-gray-400 font-semibold text-sm">
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
        <footer className="h-24 mt-14 bg-gray-100 font-mt">
            <Container className="flex items-center h-full text-gray-400">
                <>
                    <strong className="text-base">© 2023 Jung Homin</strong>
                    <FooterNav />
                </>
            </Container>
        </footer>
    );
};
