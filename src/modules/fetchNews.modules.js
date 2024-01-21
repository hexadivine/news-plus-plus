import { API_KEYS } from "./../config/env";

export async function fetchNews(
    URL = "",
    API_BASE_URL = "https://newsdata.io/",
    ENDPOINT = "api/1/news?",
    PARAMS = "q=Elon"
) {
    if (URL === "") {
        URL = API_BASE_URL + ENDPOINT + API_KEYS[0] + PARAMS + "&language=en";
    }

    try {
        const response = await fetch(URL);
        const data = await response.json();

        if (data.status === "error") throw Error(data.message);

        if (data.status === "success") {
            console.log(data);
            return data.results;
        }
    } catch (error) {
        console.log(error.message);
    }
    return false;
}

export async function fetchNewsWithMultipleKeys(
    PARAMS,
    URLS = [],
    API_BASE_URL = "https://newsdata.io/",
    ENDPOINT = "api/1/news?"
) {
    if (URLS.length === 0)
        URLS = API_KEYS.map(
            (API_KEY) => API_BASE_URL + ENDPOINT + API_KEY + PARAMS + "&language=en"
        );

    for (let attempt = 0; attempt < URLS.length; attempt++) {
        console.log("Fetching news - attempt - " + (attempt + 1));
        const results = await fetchNews((URL = URLS[attempt]));
        if (results === false) continue;
        console.log(results);
        return results;
    }
}
