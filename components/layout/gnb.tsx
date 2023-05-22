import Link from "next/link";
import GradientText from "../gradientText";

export default function Gnb() {
    return (
        <div className="fixed bottom-0 inset-x-0 text-gray-400 bg-gray-600 z-10 lg:static lg:bg-transparent">
            <ul className="flex justify-around">
                <li>
                    <Link
                        className="block py-3 px-6 hover:scale-125 transition duration-300"
                        href="/"
                    >
                        <span className="text-lg font-medium hidden lg:block">
                            <GradientText>Home</GradientText>
                        </span>
                        <svg
                            className="svg-inline--fa fa-house w-6 h-6 lg:hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                        >
                            <path
                                fill="currentColor"
                                d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                            />
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link
                        className="block py-3 px-6 hover:scale-125 transition duration-300"
                        href="/about"
                    >
                        <span className="text-lg font-medium hidden lg:block">
                            <GradientText>About</GradientText>
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            className="svg-inline--fa fa-house w-6 h-6 lg:hidden"
                        >
                            <path
                                fill="currentColor"
                                d="M0 96l576 0c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm0 32V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128H0zM64 405.3c0-29.5 23.9-53.3 53.3-53.3H234.7c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7H74.7c-5.9 0-10.7-4.8-10.7-10.7zM176 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm176 16c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16z"
                            />
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link
                        className="block py-3 px-6 hover:scale-125 transition duration-300"
                        href="projects"
                    >
                        <span className="text-lg font-medium hidden lg:block">
                            <GradientText>Projects</GradientText>
                        </span>
                        <svg
                            className="svg-inline--fa fa-house w-6 h-6 lg:hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                        >
                            <path
                                fill="currentColor"
                                d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"
                            />
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link
                        className="block py-3 px-6 hover:scale-125 transition duration-300"
                        href="/skills"
                    >
                        <span className="text-lg font-medium hidden lg:block">
                            <GradientText>Skills</GradientText>
                        </span>
                        <svg
                            className="svg-inline--fa fa-house w-6 h-6 lg:hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="currentColor"
                                d="M176 88v40H336V88c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zm-48 40V88c0-30.9 25.1-56 56-56H328c30.9 0 56 25.1 56 56v40h28.1c12.7 0 24.9 5.1 33.9 14.1l51.9 51.9c9 9 14.1 21.2 14.1 33.9V304H384V288c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H192V288c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H0V227.9c0-12.7 5.1-24.9 14.1-33.9l51.9-51.9c9-9 21.2-14.1 33.9-14.1H128zM0 416V336H128v16c0 17.7 14.3 32 32 32s32-14.3 32-32V336H320v16c0 17.7 14.3 32 32 32s32-14.3 32-32V336H512v80c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"
                            />
                        </svg>
                    </Link>
                </li>
                {/* <li>
                    <Link
                        className="block py-3 px-6 hover:scale-125 transition duration-300"
                        href="/"
                    >
                        <span>Message</span>
                    </Link>
                </li> */}
            </ul>
        </div>
    );
}
