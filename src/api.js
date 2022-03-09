import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-cm.herokuapp.com/api",
});

const fetchArticles = () => {
  return api.get("/articles").then((res) => {
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

const fetchArticlesById = (id) => {
  return api.get(`/articles/${id}`).then((res) => {
    return res.data;
  });
};

const amendVoteCount = (id, num) => {
  return api.patch(`/articles/${id}`, { inc_votes: num }).then((res) => {
    return res.data;
  });
};
export {
  fetchArticles,
  fetchTopics,
  fetchArticlesByTopic,
  fetchArticlesById,
  amendVoteCount,
};
