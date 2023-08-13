import { motion } from "framer-motion";
import Image from "next/image";
import Container from "./container";

export const Visual = ({ children }: { children: React.ReactElement }) => {
    return (
        <div className="mb-12 shadow-md bg-white overflow-hidden sm:mb-16">
            <Container>{children}</Container>
        </div>
    );
};

interface SubVisualProps {
    title: string;
    text: string;
    src: string;
    alt: string;
}

export const SubVisual = ({ title, text, src, alt }: SubVisualProps) => {
    return (
        <Visual>
            <div className="flex flex-col pt-12 sm:flex-row sm:pb-0 sm:pt-6">
                <motion.div
                    className="flex flex-col justify-center max-w-sm mx-auto sm:w-1/2 sm:mx-0 sm:mr-auto sm:max-w-none break-keep"
                    initial={{ x: -500, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                    }}
                >
                    <strong className="block text-4xl text-center text-gray-900 mb-6 sm:text-left">
                        {title}
                    </strong>
                    <p className="text-center text-base text-gray-600 sm:block sm:text-left">
                        {text}
                    </p>
                </motion.div>
                <motion.div
                    className="sm:w-1/2 sm:flex"
                    initial={{ x: 500, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                    }}
                >
                    <Image
                        className="mx-auto sm:mt-10"
                        src={src}
                        alt={alt}
                        width="350"
                        height="200"
                    />
                </motion.div>
            </div>
        </Visual>
    );
};
