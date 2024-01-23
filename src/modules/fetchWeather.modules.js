// https://openweathermap.org/data/2.5/find?q=india&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric

export async function fetchWeatherOf(country) {
    const URL =
        "https://openweathermap.org/data/2.5/find?q=" +
        country +
        "&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric";
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            if (data.cod !== "200") throw new Error();
            return data;
        });
}
