export interface NotionPortfolioProps {
    id: string;
    properties: {
        Name: {
            title: [
                {
                    plain_text: string;
                }
            ];
        };
        Type: {
            select: {
                name: string;
            };
        };
        Image: {
            files: [
                {
                    file: {
                        url: string;
                    };
                }
            ];
        };
    };
}

export interface NotionBookProps {
    id: string;
    properties: {
        Name: {
            title: [
                {
                    plain_text: string;
                }
            ];
        };
        Author: {
            rich_text: [{ plain_text: string }];
        };
        Image: {
            files: [
                {
                    file: {
                        url: string;
                    };
                }
            ];
        };
    };
}
