import { useContext, useState } from "react";
import { loggedInUser } from "./context";
import * as api from "../api";

export default function DeleteComment({ comment, setComments }) {
  const [disabled, setDisable] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { loggedIn } = useContext(loggedInUser);

  const handleClick = () => {
    setIsLoading(true);
    setDisable((currCount) => currCount + 1);
    api
      .deleteComment(comment.comment_id)
      .then(() => {
        setComments((currComments) => {
          return currComments.filter((currComment) => {
            return currComment !== comment;
          });
        });
        alert("Comment deleted!");
        setIsLoading(false);
        setDisable(0);
      })
      .catch(() => {
        setError("Sorry, that didn't work, please try again");
      });
  };
  if (error) return <p>{error}</p>;
  if (isLoading) return <p>Removing comment...</p>;
  if (loggedIn === comment.author)
    return (
      <button className="button content" disabled={disabled > 0} onClick={handleClick}>
        Delete
      </button>
    );

  return <p></p>;
}
