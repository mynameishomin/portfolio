import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";
import { messageId, notionApiKey } from "@/utils/variable";

const API_KEY = notionApiKey;
const DB_ID = messageId;
const notion = new Client({ auth: API_KEY });

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        try {
            (async () => {
                const { name, email, comment } = JSON.parse(req.body);
                console.log(name);
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
                                        content: name,
                                    },
                                },
                            ],
                        },
                        Comment: {
                            rich_text: [
                                {
                                    type: "text",
                                    text: {
                                        content: comment,
                                    },
                                },
                            ],
                        },
                        Email: {
                            rich_text: [
                                {
                                    type: "text",
                                    text: {
                                        content: email,
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
