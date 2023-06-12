import type { NextApiRequest, NextApiResponse } from "next";
import { writeFile, readFile, readFileSync } from "fs";
import {
    baseUrl,
    guestBookId,
    budgetId,
    readingId,
    projectId,
    skillId,
} from "@/utils/variable";

export const notionDataUpdate = async () => {
    const guestBook = await (
        await fetch(`${baseUrl}/api/getNotion/${guestBookId}`)
    ).json();
    const budget = await (
        await fetch(`${baseUrl}/api/getNotion/${budgetId}`)
    ).json();
    const reading = await (
        await fetch(`${baseUrl}/api/getNotion/${readingId}`)
    ).json();
    const project = await (
        await fetch(`${baseUrl}/api/getNotion/${projectId}`)
    ).json();
    const skills = await (
        await fetch(`${baseUrl}/api/getNotion/${skillId}`)
    ).json();

    const notionData: any = {
        guestBook,
        budget,
        reading,
        project,
        skills,
    };
    writeFile("./public/notionData.json", JSON.stringify(notionData), () => {
        console.log("저장 완료");
    });
};

export const getNotionData = () => {
    const notionData: any = readFileSync("./public/notionData.json");
    return JSON.parse(notionData);
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        try {
            if (req.query.update) {
                notionDataUpdate();
            } else {
                res.status(200).send(getNotionData());
            }
            res.end();
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}
