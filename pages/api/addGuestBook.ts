import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";
import { guestBookId, notionApiKey } from "@/utils/variable";

const API_KEY = notionApiKey;
const DB_ID = guestBookId;
const notion = new Client({ auth: API_KEY });

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        try {
            (async () => {
                const response = await notion.pages.create({
                    parent: {
                        database_id: DB_ID,
                    },
                    properties: {
                        Name: {
                            type: "title",
                            title: [
                                {
                                    type: "text",
                                    text: {
                                        content: req.body.name,
                                    },
                                },
                            ],
                        },
                        Comment: {
                            rich_text: [
                                {
                                    type: "text",
                                    text: {
                                        content: req.body.comment,
                                    },
                                },
                            ],
                        },
                    },
                });
                res.status(200).json(response);
            })();
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}
