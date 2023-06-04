import { notionApiKey, readingId } from "../../../utils/variable";
import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";
import { budgetId } from "../../../utils/variable";

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
                            on_or_after: `${date.getFullYear()}-${
                                date.getMonth() + 1 < 10
                                    ? "0" + (date.getMonth() + 1)
                                    : date.getMonth() + 1
                            }-01`,
                        },
                    },
                });
                res.status(200).json(notionData);
            } else {
                const notionData = await notion.databases.query({
                    database_id: req.query.id as string,
                });
                res.status(200).json(notionData);
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}
