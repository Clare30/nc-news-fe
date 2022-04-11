import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  const background = {
    coding: "has-background-info-dark",
    football: "has-background-primary-dark",
    cooking: "has-background-danger",
  };
  return (
    <Link className=" tile is-parent is-4 content" to={`/articles/${article.article_id}`}>
      <div className={`tile is-child box ${background[article.topic]} box has-text-light has-shadow`} key={article.article_id}>
        <h2 className="has-text-light"> {article.title} </h2>
        <div className=" subtitle is-6 has-text-light">
          <p>By {article.author}</p>
          <p>{new Date(article.created_at).toLocaleDateString()}</p>
          <p className="">{article.topic}</p>
        </div>
        <div className="level is-align-content-center">
          <div>
            <ion-icon name="thumbs-up-sharp" /> {article.votes}
          </div>
          <div>
            <ion-icon name="chatbubble-sharp" /> {article.comment_count}
          </div>
        </div>
      </div>
    </Link>
  );
}
