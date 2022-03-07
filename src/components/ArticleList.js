import { useEffect, useState } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard.js";
import css from "../App.css";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    api.fetchArticles().then(({ articles }) => {
      setArticles(articles);
    });
  }, []);
  return (
    <section className="articleList">
      {articles.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </section>
  );
}
