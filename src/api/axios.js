import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const DEMONS_API = import.meta.env.VITE_DEMONS_API;

export const api = axios.create({
    baseURL: BASE_URL,
});

export const demonsAPI = axios.create({
    baseURL: DEMONS_API
})

const base64Decode = base64EncodedString =>
  new TextDecoder().decode(Uint8Array.from(atob(base64EncodedString), m => m.charCodeAt(0)));

export const fetchPage = async (page) => {
    try {
        const response = await api.get(page);
        const base64Content = response.data.content;
         // Decode base64 content
        return base64Decode(base64Content);
    } catch (error) {
        throw error;
    }
}

export const fetchDemons = async (data) => {
    try {
        const response = await demonsAPI.get(data);
        const base64Content = response.data.content;
        const decodedContent = atob(base64Content); // Decode base64 content

        return JSON.parse(decodedContent);
    } catch (error) {
        console.error("Error fetching demons data:", error);
        throw error;
    }
}