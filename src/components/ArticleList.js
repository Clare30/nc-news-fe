import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api";
import ArticleCard from "./ArticleCard.js";
import ArticleSort from "./ArticleSort";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState(null);
  const [order, setOrder] = useState(null);
  const [button, setButton] = useState(false);
  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    api.fetchArticles(topic, sortBy, order).then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic, sortBy, order]);

  if (isLoading)
    return (
      <>
        <progress className="progress is-small is-primary" max="100">
          15%
        </progress>
      </>
    );
  return (
    <section>
      <div className="container">
        <ArticleSort
          setOrder={setOrder}
          setSortBy={setSortBy}
          sortBy={sortBy}
          button={button}
          setButton={setButton}
        />
        <div>
          {articles.map((article) => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </div>
      </div>
    </section>
  );
}
