import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-cm.herokuapp.com/api",
});

const fetchArticles = (topic) => {
  let query = `/articles`;
  if (topic) query += `?topic=${topic}`;

  return api.get(query).then((res) => {
    return res.data;
  });
};

const fetchTopics = () => {
  return api.get("/topics").then((res) => {
    return res.data;
  });
};

const fetchArticlesByTopic = (topic) => {
  return api.get(`/articles?topic=${topic}`).then((res) => {
    return res.data;
  });
};
export { fetchArticles, fetchTopics, fetchArticlesByTopic };
