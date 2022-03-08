import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api";
import ArticleCard from "./ArticleCard";

export default function TopicPage() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    api.fetchArticlesByTopic(topic).then(({ articles }) => {
      setIsLoading(true);
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic]);
  if (isLoading) <p>Loading ...</p>;
  return (
    <section className="articleList">
      {articles.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </section>
  );
}
