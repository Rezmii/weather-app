import axios from "axios";

export default axios.create({
  baseURL: "http://api.weatherapi.com/v1",
  params: {
    key: "ce8cad1f97b944eb8ce192043241404",
  },
});
