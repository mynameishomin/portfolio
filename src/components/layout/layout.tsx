"use client";
import { motion } from "framer-motion";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import NotionProvider from "@/provider/notion-provider";

export default ({ children }: { children: React.ReactElement }) => {
    return (
        <NotionProvider>
            <>
                <Header />
                <motion.div
                    className="relative mt-[6rem] lg:mt-[6rem] lg:ml-[3.5rem]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 1.8 }}
                >
                    {children}
                    <Footer />
                </motion.div>
            </>
        </NotionProvider>
    );
};
