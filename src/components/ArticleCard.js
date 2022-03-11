import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <div className="articleCard">
      <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
      <p>By {article.author}</p>
      <p>{new Date(article.created_at).toLocaleDateString()}</p>
      <p>{article.topic}</p>
    </div>
  );
}
