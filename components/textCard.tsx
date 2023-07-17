import { motion } from "framer-motion";
import React from "react";

export const TextCard = ({children}: {children: React.ReactNode}) => {
    return <div className="w-full h-full p-4 pt-2 border-2 border-point text-center rounded-xl overflow-hidden">{children}</div>
};