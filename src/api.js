import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-cm.herokuapp.com/api",
});

export function fetchArticles(topic, sort_by, order) {
  return api
    .get("/articles", {
      params: { topic, sort_by, order },
    })
    .then((res) => res.data);
}

export function fetchTopics() {
  return api.get("/topics").then((res) => res.data);
}

export function fetchArticlesById(id) {
    return api.get(`/articles/${id}`).then((res) => res.data);
}

export function amendVoteCount(id, num) {
  return api
    .patch(`/articles/${id}`, { inc_votes: num })
    .then((res) => res.data);
}

export function fetchComments(id) {
  return api.get(`/articles/${id}/comments`).then((res) => res.data);
}

export function fetchUsers() {
  return api.get("/users").then((res) => res.data);
}

export function postComment(newComment, id) {
  return api
    .post(`/articles/${id}/comments`, newComment)
    .then((res) => res.data);

};

export function deleteComment(id) {
  return api.delete(`/comments/${id}`).then((res) => res.status);
}

