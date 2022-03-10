import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-cm.herokuapp.com/api",
});

const fetchArticles = (topic) => {
  let request = "/articles";
  if (topic) request += `?topic=${topic}`;
  return api.get(request).then((res) => {
    return res.data;
  });
};

const fetchTopics = () => {
  return api.get("/topics").then((res) => {
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
export { fetchArticles, fetchTopics, fetchArticlesById, amendVoteCount };
