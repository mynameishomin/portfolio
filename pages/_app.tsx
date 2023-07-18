import ProLayout from "@/components/layout/proLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { notionInit } from "@/utils/functions";

export default function App({ Component, pageProps }: AppProps) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const notionStore = await notionInit();
            setIsLoading(false);
        })();
    }, []);
    return (<Component {...pageProps} />);
}
