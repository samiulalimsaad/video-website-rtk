import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchVideos } from "./videosApi";

const initialState = {
    videos: [],
    isLoading: false,
    isError: false,
    error: "",
    total: 0,
};

export const getVideos = createAsyncThunk(
    "videos/fetchVideos",
    async (params) => await fetchVideos(params)
);

const videosSlice = createSlice({
    name: "video",
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(getVideos.pending, (state) => {
                state.isLoading = true;
                state.videos = [];
                state.isError = false;
                state.error = "";
                state.total = 0;
            })
            .addCase(getVideos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.videos = action.payload.data;
                state.total = action.payload.total;
            })
            .addCase(getVideos.rejected, (state, action) => {
                state.isLoading = false;
                state.videos = [];
                state.isError = true;
                state.error = action.error.message;
                state.total = 0;
            }),
});

export const videosReducer = videosSlice.reducer;
