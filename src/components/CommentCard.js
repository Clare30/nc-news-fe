import { useContext, useState } from "react";
import { loggedInUser } from "./context";
import * as api from "../api";
import { useParams } from "react-router-dom";

export default function CommentCard({ comment, setComments }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const { loggedIn } = useContext(loggedInUser);
  const { id } = useParams();
  const handleClick = () => {
    setIsLoading(true);

    api
      .deleteComment(comment.comment_id)
      .then(() => {
        return api.fetchComments(id);
      })
      .then(({ comments }) => {
        setComments(comments);
        alert("Comment deleted!");
        setIsLoading(false)
      })
      .catch(() => {
        setError("Sorry, that didn't work, please try again");
      });
  };

  return (
    <div className="content comment card has-background-link-light pt-2">
      <div className="level mx-4">
        <h3 className="card-header"> {comment.author}</h3>
        <p>{comment.created_at}</p> />
        {error && <p>{error}</p>} {isLoading && !error && <p>Removing comment...</p>}
        {loggedIn === comment.author && !isLoading && (
          <button className="button is-small is-responsive level-right" onClick={handleClick}>
            Delete
          </button>
        )}

      </div>
      <p className="mb-5 card-content">{comment.body}</p>
    </div>
  );
}
