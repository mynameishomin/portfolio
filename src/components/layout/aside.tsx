"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default () => {
    const [containerHeight, setContainerHeight] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            setContainerHeight(containerRef.current.clientHeight);
        }
    }, [containerRef]);

    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, containerHeight]);

    return (
        <aside className="hidden left-0 top-16 bottom-0 flex-col justify-center items-center w-16 lg:flex lg:fixed">
            <div
                ref={containerRef}
                className="relative flex flex-col items-center w-px h-[10rem] bg-gray-300"
            >
                <motion.div
                    className="flex justify-center items-center shrink-0 w-[0.8rem] h-[0.8rem] rounded-full border border-gray-300 outline outline-2 outline-blue-50 bg-blue-50"
                    style={{ y: y }}
                >
                    <div className="w-[0.2rem] h-[0.2rem] rounded-full bg-black" />
                </motion.div>
            </div>

            <motion.div
                initial={{ height: "0%" }}
                animate={{ height: "100%" }}
                transition={{ ease: "easeOut", duration: 1.2 }}
                className="fixed left-16 top-0 w-px bg-gray-400"
            ></motion.div>
        </aside>
    );
};
