import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api";

export default function SingleArticle() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    api.fetchArticlesById(id).then(({ article }) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, [id]);
  if (isLoading)
    return (
      <progress className="progress is-small is-primary" max="100">
        15%
      </progress>
    );
  return (
    <article className="singleArticle">
      <h1>{article.title}</h1>
      <dl>
        <dd>Author: {article.author} </dd>{" "}
        <dd> {new Date(article.created_at).toLocaleDateString("en-uk")}</dd>
      </dl>
      <p>{article.body}</p>
      <div className="articleButtons">
        <div className="voteButton">
          Vote <button>+</button> <button>-</button>
        </div>
        <button className="commentButton">Show comments</button>
      </div>
    </article>
  );
}
