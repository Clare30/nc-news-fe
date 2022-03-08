import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api";
import ArticleCard from "./ArticleCard";

export default function TopicPage() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    api.fetchArticlesByTopic(topic).then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic]);

  if (isLoading) {
    return (
      <>
        <progress className="progress is-small is-primary" max="100">
          15%
        </progress>
      </>
    );
  }
  return (
    <section className="articleList">
      {articles.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </section>
  );
}
