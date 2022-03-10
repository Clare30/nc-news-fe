import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-cm.herokuapp.com/api",
});

const fetchArticles = (topic, sort, order) => {
  let query = "/articles";
  if (sort && !order) query += `?sort_by=${sort}`;
  if (order && !sort) query += `?order=${order}`;
  if (order && sort) query += `?sort_by=${sort}&order=${order}`;

  return api
    .get(query, {
      params: { topic: topic },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
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

const fetchComments = (id) => {
  return api.get(`/articles/${id}/comments`).then((res) => {
    return res.data;
  });
};

const fetchUsers = () => {
  return api.get("/users").then((res) => res.data);
};

const postComment = (newComment, id) => {
  return api
    .post(`/articles/${id}/comments`, newComment)
    .then((res) => res.data);
};

export {
  fetchArticles,
  fetchTopics,
  fetchArticlesById,
  amendVoteCount,
  fetchComments,
  fetchUsers,
  postComment,
};
