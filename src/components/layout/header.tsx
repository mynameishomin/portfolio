"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { motion } from "framer-motion";
import Container from "./container";
import Aside from "@/components/layout/aside";

interface GnbProps {
    isOpen: boolean;
    setIsOpen: Function;
}

const myMenu = [
    {
        id: 1,
        name: "PORTFOLIO",
        link: "/portfolio",
        icon: "🖥️",
        isBlank: false,
    },
    {
        id: 2,
        name: "SKILL",
        link: "/skill",
        icon: "🛠️",
        isBlank: false,
    },
    {
        id: 3,
        name: "BLOG",
        link: "https://blog.mynameishomin.com/",
        icon: "📝",
        isBlank: true,
    },
    {
        id: 4,
        name: "CONTACT",
        link: "/contact",
        icon: "✉️",
        isBlank: false,
    },
];

const Gnb = ({ isOpen, setIsOpen }: GnbProps) => {
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.innerWidth > 1024 ? setIsOpen(true) : setIsOpen(false);

            window.addEventListener("resize", () => {
                if (window.innerWidth > 1024) {
                    setIsOpen(true);
                } else {
                    setIsOpen(false);
                }
            });
        }
    }, []);

    const menuVariants = {
        open: {
            y: 0,
            opacity: 1,
        },
        closed: {
            y: -20,
            opacity: 0,
        },
    };

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="flex items-center ml-auto"
        >
            <motion.ul
                variants={{
                    open: {
                        y: 0,
                        transition: {
                            type: "keyframes",
                            delayChildren: 0.1,
                            staggerChildren: 0.05,
                        },
                    },
                    closed: {
                        y: "-100%",
                    },
                }}
                className="absolute inset-x-0 top-full flex flex-col items-center pb-6 pt-10 -mt-8 space-y-4 text-white text-lg font-semibold bg-gray-900 lg:static lg:flex-row lg:space-x-4 lg:top-auto lg:space-y-0 lg:pb-0 lg:pt-0 lg:mt-0 lg:bg-transparent lg:text-base"
            >
                {myMenu.map((menu) => {
                    return (
                        <motion.li key={menu.id} variants={menuVariants}>
                            <Link
                                href={menu.link}
                                className={
                                    router.pathname === menu.link
                                        ? "underline"
                                        : "hover:underline"
                                }
                                target={menu.isBlank ? "_blank" : "_self"}
                            >
                                <span className="inline-block mr-2 lg:hidden">
                                    {menu.icon}
                                </span>
                                <span>{menu.name}</span>
                            </Link>
                        </motion.li>
                    );
                })}
            </motion.ul>
            <motion.button
                type="button"
                className="-mr-4 p-4 text-white lg:hidden z-10"
                title="메뉴 열기"
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                variants={{
                    open: { rotate: 180, color: "#999" },
                    closed: { rotate: 0, color: "#fff" },
                }}
                onClick={() => setIsOpen((prev: boolean) => !prev)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    className="w-6 h-6"
                >
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>
            </motion.button>
            <div className="absolute inset-0 bg-gray-900 lg:hidden"></div>
        </motion.nav>
    );
};

// export default () => {
//     const router = useRouter();
//     const [isOpen, setIsOpen] = useState(false);
//     return (
//         <div className="bg-white">
//             <motion.div
//                 layoutId={router.pathname}
//             >
//                 <header className="relative h-16 bg-gray-900 font-black z-50 lg:h-20">
//                     <div className="fixed inset-x-0 h-16 bg-gray-900 lg:h-20">
//                         <>
//                             <h1 className="relative text-xl text-white z-50 lg:text-2xl">
//                                 <Link href="/">MY NAME IS HOMIN</Link>
//                             </h1>
//                             <Gnb isOpen={isOpen} setIsOpen={setIsOpen} />
//                         </>
//                     </div>
//                 </header>
//             </motion.div>
//         </div>
//     );
// };

const MenuButton = ({
    isMenuOpen,
    setIsMenuOpen,
}: {
    isMenuOpen: boolean;
    setIsMenuOpen: () => void;
}) => {
    const menuCloseButtonVariants = {
        initial: { width: 12, height: 12, rotate: 45 },
        hover: {
            width: "80%",
            height: "80%",
            rotate: 180,
        },
        openHoer: {
            width: "60%",
            height: "60%",
            rotate: 45,
        },
        transition: {
            type: "spring",
            duration: 0.6,
        },
    };

    const buttonTextVariants = {
        initial: { opacity: 0, scale: 0, rotate: 0 },
        hover: { opacity: 1, scale: 1 },
        openHoer: { opacity: 1, scale: 1, rotate: 45 },
    };

    const buttonBulletVariants = {
        hover: { width: 4, height: 4 },
        openHoer: { width: 4, height: 4 },
    };

    return (
        <div className="relative w-16 h-16">
            <motion.button
                className="absolute inset-0 flex justify-center items-center"
                initial="initial"
                whileHover={isMenuOpen ? "openHoer" : "hover"}
                animate={isMenuOpen ? "openHoer" : "initial"}
                onClick={() => setIsMenuOpen()}
            >
                <motion.div className="absolute inset-0">
                    <motion.div
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        variants={menuCloseButtonVariants}
                    >
                        <motion.div
                            className="absolute left-0 top-0 w-3 h-3 rounded-full bg-black"
                            variants={buttonBulletVariants}
                        ></motion.div>
                        <motion.div
                            className="absolute top-0 right-0 w-3 h-3 rounded-full bg-black"
                            variants={buttonBulletVariants}
                        ></motion.div>
                        <motion.div
                            className="absolute right-0 bottom-0 w-3 h-3 rounded-full bg-black"
                            variants={buttonBulletVariants}
                        ></motion.div>
                        <motion.div
                            className="absolute bottom-0 left-0 w-3 h-3 rounded-full bg-black"
                            variants={buttonBulletVariants}
                        ></motion.div>
                    </motion.div>
                </motion.div>
                <motion.span
                    className="text-xs font-bold text-center"
                    variants={buttonTextVariants}
                >
                    {isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
                </motion.span>
            </motion.button>
            <motion.div
                initial={{ height: "0%" }}
                animate={{ height: "100%" }}
                transition={{ ease: "easeOut", duration: 1.2 }}
                className="absolute left-full top-0 w-px bg-gray-400"
            ></motion.div>
        </div>
    );
};

export default () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };
    return (
        <motion.header
            className="fixed inset-0 bottom-auto flex items-center h-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
        >
            <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={toggleMenu} />
            <h1 className="px-4 text-xl font-bold">MY NAME IS HOMIN</h1>

            <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ ease: "easeOut", duration: 1.2 }}
                className="absolute left-0 top-full h-px bg-gray-400"
            ></motion.div>

            <Aside />
        </motion.header>
    );
};
