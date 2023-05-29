import { notionApiKey } from "../../../utils/variable";
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
            if (req.query.id === budgetId) {
                const date = new Date();

                console.log(`${date.getFullYear()}-${date.getMonth()}-00`);
                const notionData = await notion.databases.query({
                    database_id: req.query.id as string,
                    filter: {
                        property: "Date",
                        date: {
                            on_or_after: `${date.getFullYear()}-${
                                date.getMonth() < 10
                                    ? "0" + date.getMonth()
                                    : null
                            }-00`,
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
