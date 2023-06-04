import { useRouter } from "next/router";
import { NotionRenderer } from "react-notion";
import { PageTitle1 } from "@/components/pageTitle";
import { useEffect } from "react";
import { notionInit } from "@/utils/functions";

export default function ProjectDetail({
    notionBlockMap,
}: {
    notionBlockMap: any;
}) {
    const router = useRouter();
    const projectName = router.query.name as string;

    useEffect(() => {
        notionInit();
    }, []);
    return (
        <>
            <PageTitle1>{projectName}</PageTitle1>

            <NotionRenderer blockMap={notionBlockMap} />
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
