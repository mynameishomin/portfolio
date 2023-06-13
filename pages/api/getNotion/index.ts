import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";
import { notionApiKey } from "@/utils/variable";
import {
    baseUrl,
    budgetId,
    readingId,
    projectId,
    skillId,
} from "@/utils/variable";

const notion = new Client({ auth: notionApiKey });

const databaseIds = [budgetId, readingId, projectId, skillId];
const promises = databaseIds.map((id) => {
    if (id === budgetId || id === readingId) {
        const date = new Date();
        const notionData = notion.databases.query({
            database_id: id as string,
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

        return notionData;
    } else {
        const notionData = notion.databases.query({
            database_id: id as string,
        });

        return notionData;
    }
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        try {
            const response = await Promise.all(promises);
            interface INotionData {
                [key: string]: any;
            }
            const notionData: INotionData = {};
            const tableNames = ["budget", "reading", "project", "skills"];
            tableNames.forEach((id: string, index) => {
                notionData[id] = response[index];
            });
            console.log(notionData);
            res.status(200).json(notionData);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}
