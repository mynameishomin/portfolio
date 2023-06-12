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
    }
    return notionStore.getState();
};

export const getNowDateString = (date: Date) => {
    const nowYear = date.getFullYear();
    const nowMonth = date.getMonth() + 1;
    const nowDate = date.getDate();

    return `${nowYear}.${nowMonth < 10 ? "0" + nowMonth : nowMonth}.${
        nowDate < 10 ? "0" + nowDate : nowDate
    }`;
};

export const numberWithComma = (number: Number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
