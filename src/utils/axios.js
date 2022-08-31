import axios from "axios";

export const axiosIntance = axios.create({
    baseURL: "https://fake-api-json-server-saad.herokuapp.com",
});
