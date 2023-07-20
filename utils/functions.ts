import {
    baseUrl,
    guestBookId,
    budgetId,
    readingId,
    projectId,
    skillId,
} from "./variable";
import { notionStore, addNotion } from "./store/notion";

// export const notionInit = async () => {
//     if (!notionStore.getState().hasNotion) {
//         const notionData = await (
//             await fetch(`${baseUrl}/api/getNotion/`)
//         ).json();

//         console.log(notionData);

//         notionStore.dispatch(addNotion(notionData));
//     } else {
//     }
//     return notionStore.getState();
// };

export const getNotionData = async (id: string, filter?: object) => {
    const notionState = notionStore.getState();
    const notionData = notionState.notion[id];
    if (notionData) {
        return notionData.results;
    } else {
        const data = await (
            await fetch(`${baseUrl}/api/getNotion?id=${id}`)
        ).json();
        notionStore.dispatch(addNotion({ id, data }));

        return notionStore.getState().notion[id].results;
    }
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
