export const baseUrl =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://portfolio.mynameishomin.com";

export const notionApiKey = process.env.NOTION_API_KEY;
export const messageId = process.env.NEXT_PUBLIC_NOTION_MESSAGE_DB_ID as string;
export const budgetId = process.env.NEXT_PUBLIC_NOTION_BUDGET_DB_ID as string;
export const readingId = process.env.NEXT_PUBLIC_NOTION_READING_DB_ID as string;
export const projectId = process.env.NEXT_PUBLIC_NOTION_PROJECT_DB_ID as string;
export const skillId = process.env.NEXT_PUBLIC_NOTION_SKILL_DB_ID as string;
