import { axiosIntance } from "../../utils/axios";

export const fetchVideos = async ({ tags, search, limit, page, author }) => {
    let query =
        tags?.length && tags?.map((tag) => `tags_like=${tag}`).join("&");
    query += `&q=${search}&_limit=${limit}&_page=${page}&author_like=${author}`;

    return (await axiosIntance.get(`/videos?${query}`)).data;
};
