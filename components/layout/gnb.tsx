import Link from "next/link";
import GradientText from "../gradientText";

export default function Gnb() {
    return (
        <ul className="flex flex-col mb-10 font-han">
            <li>
                <Link
                    className="flex items-center h-10 hover:text-black"
                    href="/"
                >
                    <span className="text-base font-medium hidden lg:block">
                        HOME
                    </span>
                </Link>
            </li>
            <li>
                <Link
                    className="flex items-center h-10 hover:text-black"
                    href="/about"
                >
                    <span className="text-base font-medium hidden lg:block">
                        ABOUT
                    </span>
                </Link>
            </li>
            <li>
                <Link
                    className="flex items-center h-10 hover:text-black"
                    href="projects"
                >
                    <span className="text-base font-medium hidden lg:block">
                        PROJECT
                    </span>
                </Link>
            </li>
            <li>
                <Link
                    className="flex items-center h-10 hover:text-black"
                    href="/skills"
                >
                    <span className=" text-base font-medium hidden lg:block">
                        SKILL
                    </span>
                </Link>
            </li>
        </ul>
    );
}
