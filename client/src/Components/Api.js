import axios from "axios";

const baseURL = "https://organ-lelo-main.vercel.app/";

export default axios.create({ baseURL: baseURL });
