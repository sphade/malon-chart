import Axios from "axios";

const baseUrl = "https://imdb8.p.rapidapi.com/";
const axios = Axios.create({
  baseURL: baseUrl,
  headers: {
    "X-RapidAPI-Key": "35ed7056acmshcdde5cd77c6bc76p12cd1ajsn1023959b216d",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
  timeout: 3 * 60 * 1000, // Set timeout at 3 minutes
});
export const getAwards = async () => {
  const response = await axios.get("actors/get-awards", {
    params: {
      nconst: "nm0001667",
    },
  });
  return response;
};
