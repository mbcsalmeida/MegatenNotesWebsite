import axios from "axios";

const branch = import.meta.env.MODE === 'development' ? 'dev' : 'main';
const BASE_URL = "https://api.github.com/repos/mbcsalmeida/MegatenNotesWebsite/contents/public/pages";
const DEMONS_API = "https://api.github.com/repos/mbcsalmeida/smt1-demon-tracker/contents/public/";

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
        const response = await api.get(page, {
            params: {
                ref: branch
            }
        });
        const base64Content = response.data.content;
         // Decode base64 content
        return base64Decode(base64Content);
    } catch (error) {
        throw error;
    }
}

export const fetchDemons = async (data) => {
    try {
        const response = await demonsAPI.get(data, {
            params: {
                ref: branch  
            }
        });;
        const base64Content = response.data.content;
        const decodedContent = atob(base64Content); // Decode base64 content

        return JSON.parse(decodedContent);
    } catch (error) {
        console.error("Error fetching demons data:", error);
        throw error;
    }
}