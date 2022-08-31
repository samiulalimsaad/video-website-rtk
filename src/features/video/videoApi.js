import { axiosIntance } from "../../utils/axios";

export const fetchVideo = async (id) =>
    (await axiosIntance.get(`/videos/${id}`)).data;

export const updateLikeApi = async ({ id, likes }) => {
    const { data } = await axiosIntance.patch(`/videos/${id}`, {
        likes: likes + 1,
    });
    return data;
};

export const updateUnlikeApi = async ({ id, unlikes }) => {
    const { data } = await axiosIntance.patch(`/videos/${id}`, {
        unlikes: unlikes + 1,
    });
    return data;
};
