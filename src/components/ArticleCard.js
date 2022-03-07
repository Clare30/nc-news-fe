import { Link } from "react-router-dom";
import css from "../App.css";

export default function ArticleCard({ article }) {
  return (
    <div className="articleCard" key={article.article_id}>
      <Link to={`/${article.topic}/${article.article_id}`}>
        {article.title}
      </Link>
      <p>By {article.author}</p>{" "}
      <p>{new Date(article.created_at).toLocaleDateString("en-uk")}</p>
      <p>{article.topic}</p>
    </div>
  );
}
