import apiClient from "./api-client";

const fetchWeather = () => {
  return apiClient
    .get("/current.json", {
      params: {
        q: "Londondasds",
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

export default fetchWeather;
