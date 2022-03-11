import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <div className="articleCard">
      <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
      <p>By {article.author}</p>
      <p>{new Date(article.created_at).toLocaleDateString()}</p>
      <p>{article.topic}</p>
      <div className="tile" key={article.article_id}>
        <div className="card-header-title is-centered">
          <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
        </div>
        <div className="card-content has-text-centered">
          <p>By {article.author}</p>
          <p>{new Date(article.created_at).toLocaleDateString()}</p>
          <p>{article.topic}</p>
        </div>
        <div>
          <div className="icon-text">
            <ion-icon name="thumbs-up-sharp"></ion-icon>
            {article.votes}
          </div>
          <div className="icon-text">
            <ion-icon name="chatbubble-sharp"></ion-icon>{" "}
            {article.comment_count}
          </div>
        </div>
      </div>
    </div>
  );
}
