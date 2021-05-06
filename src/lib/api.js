import axios from "axios";

export const getUserData = async (id) => {
    try {
        const { data } = await axios.get("https://api.github.com/users/" + id);
        console.log("성공", data);
        return data;
    } catch (e) {
        console.log("실패", e);
        return null;
    }
}