import { useRouter } from "next/router";
import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import { useEffect } from "react";
import { notionInit } from "@/utils/functions";

export default function ProjectDetail({
    notionBlockMap,
}: {
    notionBlockMap: any;
}) {
    const router = useRouter();

    useEffect(() => {
        notionInit();
    }, []);
    return (
        <>
            <NotionRenderer blockMap={notionBlockMap} fullPage={true} />
        </>
    );
}

export async function getServerSideProps(context: any) {
    const notionBlockMap = await (
        await fetch(
            `https://notion-api.splitbee.io/v1/page/${context.params.id}`
        )
    ).json();
    return {
        props: {
            notionBlockMap,
        },
    };
}
