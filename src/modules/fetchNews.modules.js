import { API_URLS_EVERYTHING_ENDPOINT } from "./../config/config";

export async function fetchNews(newsDict, setNewsDict, setNewsDictBackup) {
    const URLS = API_URLS_EVERYTHING_ENDPOINT;

    for (let i = 0; i < URLS.length; i++) {
        try {
            const response = await fetch(URLS[i]);
            const data = await response.json();

            if (data.status === "error") throw Error(data.message);

            if (data.status === "ok") {
                setNewsDict({
                    ...newsDict,
                    all: data.articles,
                });
                setNewsDictBackup({
                    ...newsDict,
                    all: data.articles,
                });
                console.log(data);
                break;
            }
        } catch (error) {
            console.log(error.message);
        }
    }
}
