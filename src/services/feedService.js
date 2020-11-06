import axios from "axios";

export default async function getFeed(id) {
    const feedResult = await axios.get(
        `https://www.reddit.com/r/food/${id}.json`,
        {
            params: {
                limit: 60
            }
        }
    );
    return feedResult.data.data.children;
}