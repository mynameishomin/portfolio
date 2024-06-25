import { NotionContext } from "@/context/notion";
import { getNotionData } from "@/functions";
import { projectId } from "@/variable";
import { useEffect, useState } from "react";

export default ({ children }: { children: React.ReactElement }) => {
    const [notion, setNotion] = useState<any>(null);

    useEffect(() => {
        getNotionData(projectId).then((data) => setNotion(data));
    }, []);

    return (
        <NotionContext.Provider value={notion}>
            {children}
        </NotionContext.Provider>
    );
};
