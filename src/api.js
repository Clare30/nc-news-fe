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

export function deleteComment(id) {
  return api.delete(`/comments/${id}`).then((res) => res.status);
}

export {
  fetchArticles,
  fetchTopics,
  fetchArticlesById,
  amendVoteCount,
  fetchComments,
  fetchUsers,
  postComment,
};
