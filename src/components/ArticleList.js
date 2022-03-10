import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api";
import ArticleCard from "./ArticleCard.js";
import ArticleSort from "./ArticleSort";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState();
  const [order, setOrder] = useState();
  const { topic } = useParams();

  console.log(sortBy, order);

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
    <section className="articleList">
      <ArticleSort setOrder={setOrder} setSortBy={setSortBy} />
      {articles.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </section>
  );
}
