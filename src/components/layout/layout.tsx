"use client";
import { motion } from "framer-motion";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Container from "@/components/layout/container";
import NotionProvider from "@/provider/notion-provider";

export default ({ children }: { children: React.ReactElement }) => {
    return (
        <NotionProvider>
            <>
                <Header />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 1.8 }}
                >
                    <Container>{children}</Container>
                    <Footer />
                </motion.div>
            </>
        </NotionProvider>
    );
};
