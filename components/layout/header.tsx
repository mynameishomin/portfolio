import Link from "next/link";
import Gnb from "./gnb";
import GradientText from "../gradientText";

export default function Header() {
    return (
        <header className="flex h-14 flex shrink-0 justify-between items-center lg:h-16 text-white border-b border-gray-600 px-6">
            <GradientText>
                <h1 className="text-xl font-bold">
                    <Link href="/">
                        <span>My name is homine</span>
                    </Link>
                </h1>
            </GradientText>
            <Gnb />
        </header>
    );
}
