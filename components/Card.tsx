import Image from "next/image";
import { motion } from "framer-motion";

type CardProps = {
    title?: string;
    subText?: string;
    src?: string;
};

export default ({ src = "", title, subText }: CardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
        >
            {title ? (
                <div className="p-2 rounded shadow-md border border-gray-100">
                    <div className="relative rounded overflow-hidden">
                        <div className="absolute inset-0 animate-pulse bg-gray-200"></div>
                        <Image
                            src={src}
                            width={320}
                            height={180}
                            alt=""
                            className="relative z-10 w-full object-cover group-hover:scale-110 transition-all duration-300"
                        />
                    </div>
                    <div className="pt-2 pb-0 font-normal">
                        <h3 className="inline-block max-w-full pb-0.5 px-2 text-gray-200 rounded bg-gray-900 truncate lg:mb-1">
                            {title}
                        </h3>
                        <span className="block text-gray-500">
                            &#91;{subText}&#93;
                        </span>
                    </div>
                </div>
            ) : (
                <Dummy />
            )}
        </motion.div>
    );
};

export const Dummy = () => {
    return (
        <div className="p-2 rounded shadow-md border border-gray-100">
            <div className="h-40 rounded animate-pulse bg-gray-200"></div>
            <div className="pt-2 pb-0">
                <div className="h-5 mb-0.5 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
            </div>
        </div>
    );
};
