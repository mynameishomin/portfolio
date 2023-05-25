import Link from "next/link";
import GradientText from "../gradientText";

export default function Gnb() {
    return (
        <ul className="flex flex-col mb-10 font-han">
            <li>
                <Link
                    className="flex items-center h-10 text-sub hover:text-black"
                    href="/"
                >
                    <span className="text-base font-medium hidden lg:block">
                        Home
                    </span>
                </Link>
            </li>
            <li>
                <Link
                    className="flex items-center h-10 text-sub hover:text-black"
                    href="/about"
                >
                    <span className="text-base font-medium hidden lg:block">
                        About
                    </span>
                </Link>
            </li>
            <li>
                <Link
                    className="flex items-center h-10 text-sub hover:text-black"
                    href="projects"
                >
                    <span className="text-base font-medium hidden lg:block">
                        Projects
                    </span>
                </Link>
            </li>
            <li>
                <Link
                    className="flex items-center h-10 text-sub hover:text-black"
                    href="/skills"
                >
                    <span className=" text-base font-medium hidden lg:block">
                        Skills
                    </span>
                </Link>
            </li>
        </ul>
    );
}
