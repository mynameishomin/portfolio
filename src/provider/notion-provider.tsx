import { NotionContext } from "@/context/notion";
import { getNotionData } from "@/functions";
import { projectId } from "@/variable";
import { useEffect, useState } from "react";

interface NotionProps {
    project: any;
}

export default ({ children }: { children: React.ReactElement }) => {
    const [notion, setNotion] = useState<any>({});

    useEffect(() => {
        getNotionData(projectId).then((projectData) =>
            setNotion((prev: any) => {
                prev.project = projectData;
                return prev;
            })
        );
    }, []);

    return (
        <NotionContext.Provider value={notion}>
            {children}
        </NotionContext.Provider>
    );
};
