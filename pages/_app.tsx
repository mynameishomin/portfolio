import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { notionInit } from "@/utils/functions";
import LoadingPage from "@/components/loadingPage";

export default function App({ Component, pageProps }: AppProps) {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        (async () => {
            const notionStore = await notionInit();
            setIsLoading(false);
        })();
    }, []);
    return (
        <>
            {isLoading ? (
                <LoadingPage />
            ) : (
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            )}
        </>
    );
}
