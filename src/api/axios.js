import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.github.com/repos/mbcsalmeida/MegatenNotesWebsite/contents/public/pages",
});

export const demonsAPI = axios.create({
    baseURL: "https://api.github.com/repos/mbcsalmeida/smt1-demon-tracker/contents/public/"
})

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