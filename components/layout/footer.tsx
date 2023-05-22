import Link from "next/link";

export default function Footer() {
    return (
        <footer className="hidden shrink-0 bg-gray-600 p-2 text-white lg:block">
            <div className="text-sm">
                <Link href="/">
                    <span>Homin&apos;s Portfolio</span>
                </Link>
                <span> © 2023</span>
            </div>
        </footer>
    );
}
