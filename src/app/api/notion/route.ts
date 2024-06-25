import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";
import { budgetId, readingId, notionApiKey } from "@/variable";

const notion = new Client({ auth: notionApiKey });

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    try {
        if (id === budgetId || id === readingId) {
            const date = new Date();
            const notionData = await notion.databases.query({
                database_id: id as string,
                filter: {
                    property: "Date",
                    date: {
                        on_or_after: `${date.getFullYear()}-01-01`,
                    },
                },
            });

            return Response.json(notionData);
        }
        const notionData = await notion.databases.query({
            database_id: id as string,
        });
        return Response.json(notionData);
    } catch (error) {
        console.error(error);
        return Response.json(error);
    }
}
