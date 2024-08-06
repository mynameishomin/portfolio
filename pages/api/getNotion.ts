import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";
import { notionApiKey } from "@/utils/variable";
import { budgetId, readingId } from "@/utils/variable";

const notion = new Client({ auth: notionApiKey });

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        try {
            if (req.query.id === budgetId || req.query.id === readingId) {
                const date = new Date();
                const notionData = await notion.databases.query({
                    database_id: req.query.id as string,
                    filter: {
                        property: "Date",
                        date: {
                            on_or_after: `${date.getFullYear()}-01-01`,
                        },
                    },
                });
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.setHeader(
                    "Access-Control-Allow-Methods",
                    "GET, POST, PUT, DELETE"
                );
                res.setHeader("Access-Control-Allow-Headers", "Content-Type");
                res.status(200).json(notionData);
                return;
            }
            const notionData = await notion.databases.query({
                database_id: req.query.id as string,
            });
            res.status(200).json(notionData);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}
