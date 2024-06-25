"use client";
import Container from "./container";
import { motion } from "framer-motion";

export default () => {
    return (
        <motion.footer className="flex items-center mt-[3.5rem] h-[3.5rem] shadow-inner">
            <Container>
                <span className="text-sm text-gray-500">© 2024 JUNG HOMIN</span>
            </Container>
        </motion.footer>
    );
};
