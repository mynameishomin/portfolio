export type TypeSheet = {
    _id: string;
    name: string;
    order: string[];
    data: object[];
    __v: 0;
};

export type TypeGuestBook = {
    _id: string;
    comment: string;
    name: string;
    date: Date;
};
