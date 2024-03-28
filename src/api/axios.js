import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.github.com/repos/mbcsalmeida/MegatenNotesWebsite/contents/public/pages"
});

export const fetchPage = async (page) => {
    try {
        const response = await api.get(page);
        const base64Content = response.data.content;
         // Decode base64 content
        return atob(base64Content);
    } catch (error) {
        throw error;
    }
}