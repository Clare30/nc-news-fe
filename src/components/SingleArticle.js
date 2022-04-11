import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api";
import ArticleVote from "./ArticleVotes";
import ArticleComments from "./ArticleComments";
import ErrorComponent from "./ErrorComponent";

export default function SingleArticle() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setError(false);
    setIsLoading(true);
    api
      .fetchArticlesById(id)
      .then(({ article }) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response);
      });
  }, [id]);

  if (error)
    return <ErrorComponent status={error.status} msg={error.data.msg} />;

  if (isLoading)
    return (
      <progress className="progress is-small is-primary" max="100">
        15%
      </progress>
    );
  return (
    <div className="content has-text-centered is-align-content-space-between ">
      <h1>{article.title}</h1>
      <p>Written by {article.author} </p>
      <p className="content is-spaced">
        Posted on {new Date(article.created_at).toLocaleDateString("en-uk")}
      </p>
      <p className="content is-spaced">{article.body}</p>
      <div className="content is-spaced">
        <ArticleVote article={article} />
        <ArticleComments />
      </div>
    </div>
  );
}
