import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tags: [],
    search: "",
    page: 1,
    limit: 5,
    author: "",
};

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        tagSelected: (state, action) => {
            state.tags.push(action.payload);
        },
        tagRemoved: (state, action) => {
            const index = state.tags.indexOf(action.payload);
            index >= 0 && state.tags.splice(index, 1);
        },
        searched: (state, action) => {
            state.search = action.payload;
        },
        pageUpdated: (state, action) => {
            state.page = action.payload;
        },
        limitUpdated: (state, action) => {
            state.limit = action.payload;
        },
        authorUpdated: (state, action) => {
            state.author = action.payload;
            state.tags = [];
            state.search = "";
            state.page = 1;
            state.limit = 5;
        },
        reset: (state, action) => initialState,
    },
});

export const filterActions = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
