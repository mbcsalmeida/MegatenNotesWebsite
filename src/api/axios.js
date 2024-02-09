import axios from "axios";
export const api = axios.create({
    baseURL: "https://api.github.com/repos/mbcsalmeida/MegatenNotesWebsite/contents/public/pages"
});

export const fetchPage = async (page) => {
    try {
        const response = await api.get(page);
        const base64Content = response.data.content;
        const decodedContent = atob(base64Content); // Decode base64 content

        console.log(decodedContent);
        return decodedContent;
    } catch (error) {
        console.error("Error fetching page:", error);
        throw error;
    }
}