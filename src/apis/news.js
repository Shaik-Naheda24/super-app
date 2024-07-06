import axios from "axios";

const NEWS_API = process.env.REACT_APP_NEWS_API_KEY;

export const fetchNewsData = async () => {
    let countryCode;
    if (localStorage.getItem("countryCode")) {
        countryCode = localStorage.getItem("countryCode");
        console.log(countryCode, " from localstorage");
    } else {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(({ coords }) => {
                fetchCountryCode(coords.latitude, coords.longitude).then((output) => {
                    countryCode = output;
                    console.log(countryCode, " from fetchLocation2");
                });
            });
        }
    }

    try {
        const response = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${NEWS_API}`
        );
        console.log(response); // Log the full response
        if (response.status === 200) {
            return response.data.articles[0];
        } else {
            console.error("Error fetching news data:", response.status);
        }
    } catch (error) {
        console.error("Error fetching news data:", error);
    }
};

const fetchCountryCode = async (latitude, longitude) => {
    try {
        const { data } = await axios.get(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        );
        const { countryCode } = data;
        localStorage.setItem("countryCode", countryCode);
        return countryCode;
    } catch (error) {
        console.error("Error fetching location:", error);
    }
};