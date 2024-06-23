import { motion } from "framer-motion";

interface AlertProps {
    text: string;
}

export default ({ text }: AlertProps) => {
    return (
        <div className="fixed inset-0 flex justify-center items-center">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="max-w-md bg-gray-900 text-white py-3 px-4 rounded"
            >
                <span className="text-sm">{text}</span>
            </motion.div>
        </div>
    );
};
