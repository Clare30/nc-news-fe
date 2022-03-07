import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as api from "../api";
export default function TopicPage() {
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    api.fetchArticlesByTopic(topic).then(({ articles }) => {
      setArticles(articles);
    });
  }, [topic]);

  return (
    <div>
      <Link to="/">Home</Link>
      {articles.map((article) => {
        return (
          <div className="articleCard" key={article.article_id}>
            <Link to={`/${topic}/${article.article_id}`}>{article.title}</Link>
            <p>By {article.author}</p>{" "}
            <p>{new Date(article.created_at).toLocaleDateString("en-uk")}</p>
            <p>{article.topic}</p>
          </div>
        );
      })}
    </div>
  );
}
