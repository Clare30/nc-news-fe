import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api";
import ErrorComponent from "./ErrorComponent";

export default function SingleArticle() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setError(false);
    setIsLoading(false);
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
    <article className="singleArticle">
      <h1>{article.title}</h1>
      <p>Written by {article.author} </p>
      <p className="postedDate">
        {" "}
        Posted on {new Date(article.created_at).toLocaleDateString("en-uk")}
      </p>
      <p className="articleBody">{article.body}</p>

      <div className="articleButtons">
        <div className="voteButton">
          Vote <button>+</button> <button>-</button>
        </div>
        <button className="commentButton">Show comments</button>
      </div>
    </article>
  );
}
