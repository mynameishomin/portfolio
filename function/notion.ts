import { NotionPortfolioProps, NotionBookProps } from "@/types/notion";

export const getPortfolioData = (notionObj: NotionPortfolioProps) => {
    const title = notionObj.properties.Name.title[0].plain_text;
    const type = notionObj.properties.Type.select.name;
    const src = notionObj.properties.Image.files[0].file.url;
    return { title, type, src };
};

export const getBookoData = (notionObj: NotionBookProps) => {
    const title = notionObj.properties.Name.title[0].plain_text;
    const author = notionObj.properties.Author.rich_text[0].plain_text;
    const src = notionObj.properties.Image.files[0].file.url;
    return { title, author, src };
};
