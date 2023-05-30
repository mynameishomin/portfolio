import { createSlice, configureStore } from "@reduxjs/toolkit";

const notionSlice = createSlice({
    name: "notion",
    initialState: {
        notion: [] as any,
        hasNotion: false,
    },
    reducers: {
        addNotion: (state, action) => {
            state.notion = action.payload;
            state.hasNotion = true;
        },
    },
});

export const { addNotion } = notionSlice.actions;

export const notionStore = configureStore({
    reducer: notionSlice.reducer,
});
