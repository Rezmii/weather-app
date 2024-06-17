import apiClient from "./api-client";

const fetchWeather = (cityName: string) => {
  return apiClient
    .get("/forecast.json", {
      params: {
        q: cityName,
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

export default fetchWeather;
