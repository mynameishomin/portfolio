import Link from "next/link";
import GradientText from "../gradientText";

export default function Gnb() {
    return (
        <ul className="flex flex-col mb-10 font-han max-lg:mb-0 max-lg:justify-end">
            <li>
                <Link
                    className="flex items-center h-10 hover:text-black max-lg:justify-end"
                    href="/"
                >
                    <span className="text-base font-medium">HOME</span>
                </Link>
            </li>
            <li>
                <Link
                    className="flex items-center h-10 hover:text-black max-lg:justify-end"
                    href="/about"
                >
                    <span className="text-base font-medium">ABOUT</span>
                </Link>
            </li>
            <li>
                <Link
                    className="flex items-center h-10 hover:text-black max-lg:justify-end"
                    href="/projects"
                >
                    <span className="text-base font-medium">PROJECT</span>
                </Link>
            </li>
            <li>
                <Link
                    className="flex items-center h-10 hover:text-black max-lg:justify-end"
                    href="/skills"
                >
                    <span className=" text-base font-medium">SKILL</span>
                </Link>
            </li>
            <li>
                <Link
                    className="flex items-center h-10 hover:text-black max-lg:justify-end"
                    href="/contact"
                >
                    <span className=" text-base font-medium">CONTACT</span>
                </Link>
            </li>
        </ul>
    );
}
