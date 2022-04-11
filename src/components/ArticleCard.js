import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  const background = {
    coding: "articleCoding",
    football: "articleFootball",
    cooking: "articleCooking",
  };
  return (
    
      <article className={`tile is-child box ${background[article.topic]} articleContent content`} key={article.article_id}>
        <Link className="has-text-light" to={`/articles/${article.article_id}`}>
          <h3 className="has-text-light"> {article.title} </h3>
          <p>By {article.author}</p>
          <p>{new Date(article.created_at).toLocaleDateString()}</p>
          <p>{article.topic}</p>
           <div className="level mx-5">
          <div>
            <ion-icon name="thumbs-up-sharp" /> {article.votes}
          </div>
          <div>
            <ion-icon name="chatbubble-sharp" /> {article.comment_count}
          </div>
        </div>
        </Link>
      </article>
   
  );
}
