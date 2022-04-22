import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api";
import ArticleCard from "./ArticleCard.js";
import ArticleSort from "./ArticleSort";
import ErrorComponent from "./ErrorComponent";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState(null);
  const [order, setOrder] = useState(null);
  const [button, setButton] = useState(false);
  const [error, setError] =useState(null)
  const { topic } = useParams();

  useEffect(() => {
    setError(false)
    setIsLoading(true);
    api.fetchArticles(topic, sortBy, order).then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    }).catch((err) => { 
       setError(err.response);
    })
  }, [topic, sortBy, order]);

if(error) return <ErrorComponent status={error.status} msg={error.data.msg.toUpperCase()} />
  
if (isLoading)
    return (
      <div className="loading">
        <progress className="progress is-small is-primary" max="100">
          15%
        </progress>
      </div>
    );
  return (
    <section>
      <ArticleSort setOrder={setOrder} setSortBy={setSortBy} sortBy={sortBy} button={button} setButton={setButton} />
      <div className="tile is-ancestor columns is-multiline mt-5">
        {articles.map((article) => {
          return (
            <div key={article.article_id} className="tile is-parent is-4 ">
              <ArticleCard article={article} key={article.article_id} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
