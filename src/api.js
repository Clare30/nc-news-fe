import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-cm.herokuapp.com/api",
});

const fetchArticles = () => {
  return api.get("/articles").then((res) => {
    return res.data;
  });
};

export { fetchArticles };
