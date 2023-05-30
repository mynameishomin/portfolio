import {
    baseUrl,
    guestBookId,
    budgetId,
    readingId,
    projectId,
    skillId,
} from "./variable";
import { notionStore, addNotion } from "./store/notion";

export const notionInit = async () => {
    if (!notionStore.getState().hasNotion) {
        console.log("데이터 새로 로드");
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

        const notionData = {
            guestBook,
            budget,
            reading,
            project,
            skills,
        };
        notionStore.dispatch(addNotion(notionData));
    } else {
        console.log("기존 데이터 가져옴");
    }
    return notionStore.getState().notion;
};
