import Link from "next/link";

const Gnb = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/"></Link>
                </li>
            </ul>
        </nav>
    );
};

export default () => {
    return (
        <header>
            <h1 className="font-dokdo text-4xl">
                <Link href="/">My nama is homin</Link>
            </h1>
        </header>
    );
};
