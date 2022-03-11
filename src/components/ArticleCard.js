import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <div className="card" key={article.article_id}>
      <div className="card-header-title is-centered">
        <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
      </div>
      <div className="card-content has-text-centered">
        <p>By {article.author}</p>
      
     
        <p>{new Date(article.created_at).toLocaleDateString()}</p>
      
      
        <p>{article.topic}</p>
     </div>
    </div>
  );
}
