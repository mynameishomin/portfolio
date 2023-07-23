import { notionStore } from "@/utils/store/notion";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const BackGround = () => {
    return (
        <>
            <div className="relative w-1/2 bg-cover bg-no-repeat bg-[url('/images/creative_bg.jpg')]">
                <h2 className="absolute top-[40%] left-[30%] -translate-y-1/2 -translate-x-1/2 -rotate-6 text-7xl font-mt font-semibold">
                    <span className="text-sub">Creative</span>
                </h2>
            </div>

            <div className="relative w-1/2 bg-cover bg-no-repeat">
                <h2 className="absolute top-[40%] right-[50%] -translate-y-1/2 translate-x-1/2 text-6xl font-mt font-semibold underlin text-point">
                    Professional
                </h2>
            </div>
        </>
    );
};

export default function Home() {
    const notionData = notionStore.getState().notion;
    const [creativeWidth, setCreativeWidth] = useState<number>(300);
    const [proWidth, setProWidth] = useState<number>(300);
    const [x, setX] = useState<number>(0);
    const photoWidth = 300;

    return (
        <div
            className="relative flex w-screen h-screen overflow-hidden"
            onMouseMove={(e) => {
                const centerX = window.innerWidth / 2;
                const point = (centerX - e.pageX) / 2;
                setProWidth(() => photoWidth + point);
                setCreativeWidth(() => photoWidth - point);
                setX(() => point / 20);
            }}
            onMouseLeave={() => {
                setCreativeWidth(photoWidth);
                setProWidth(photoWidth);
                setX(0);
            }}
        >
            <BackGround />
            <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-full"
                initial={{ x: 0 }}
                animate={{ x }}
                transition={{ type: "tween", ease: "backOut", duration: 1.6 }}
            >
                <motion.div
                    animate={{ width: proWidth }}
                    transition={{
                        type: "tween",
                        ease: "backOut",
                        duration: 1.6,
                    }}
                    className="absolute left-0 w-[300px] h-full bg-left-bottom bg-[length:600px_600px] bg-no-repeat bg-[url('/images/profile_02.png')]"
                >
                    <Link
                        className="absolute right-0 h-screen w-screen"
                        href={"/creative"}
                    ></Link>
                </motion.div>
                <motion.div
                    animate={{ width: creativeWidth }}
                    transition={{
                        type: "tween",
                        ease: "backOut",
                        duration: 1.6,
                    }}
                    className="absolute right-0 w-[300px] h-full bg-right-bottom bg-[length:600px_600px] bg-no-repeat bg-[url('/images/profile_01.png')]"
                >
                    <Link
                        className="absolute left-0 h-screen w-screen"
                        href={"/professional"}
                    ></Link>
                </motion.div>
            </motion.div>
        </div>
    );
}
