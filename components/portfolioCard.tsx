import Image from "next/image";
import { motion } from "framer-motion";

export default ({ portfolioData }: { portfolioData?: any }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
        >
            {portfolioData ? (
                <div className="p-2 rounded shadow-md border border-gray-100">
                    <div className="relative rounded overflow-hidden">
                        <div className="absolute inset-0 animate-pulse bg-gray-200"></div>
                        <Image
                            src={
                                portfolioData.properties.Image.files[0].file.url
                            }
                            width={320}
                            height={180}
                            alt=""
                            className="relative z-10 w-full object-cover"
                        />
                    </div>
                    <div className="p-2 pb-0 font-normal">
                        <h3 className="inline-block mb-1 pb-0.5 px-2 text-gray-200 rounded bg-gray-900">
                            {portfolioData.properties.Name.title[0].plain_text}
                        </h3>
                        <span className="block text-gray-500">
                            [{portfolioData.properties.Type.select.name}]
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
            <div className="p-2 pb-0 font-mt">
                <div className="h-5 mb-0.5 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
            </div>
        </div>
    );
};
