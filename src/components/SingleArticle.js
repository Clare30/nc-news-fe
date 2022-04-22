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
    return <ErrorComponent status={error.status} msg={error.data.msg.toUpperCase()} />;

  if (isLoading)
    return (
      <progress className=" loading progress is-small is-primary" max="100">
        15%
      </progress>
    );
  return (
    <article className="content singleArticle">
      <h1>{article.title}</h1>
      <div className="level"><div>Written by {article.author} </div><div>
        Posted on {new Date(article.created_at).toLocaleDateString("en-uk")}
      </div></div>
      <p className="articleBody">{article.body}</p>
      <div>
        <ArticleVote article={article} />
        <ArticleComments />
      </div>
    </article>
  );
}
