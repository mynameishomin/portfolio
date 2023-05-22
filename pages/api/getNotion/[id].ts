import { notionApiKey } from "../../../utils/variable";
import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: notionApiKey });

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        try {
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
