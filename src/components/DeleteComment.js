import { useContext, useState } from "react";
import { loggedInUser } from "./context";
import * as api from "../api";

export default function DeleteComment({ comment, setComments }) {
  const [disabled, setDisable] = useState(false);

  const { loggedIn } = useContext(loggedInUser);

  const handleClick = () => {
    setDisable((currCount) => currCount + 1);
    api.deleteComment(comment.comment_id).then(() => {
      alert("comment deleted!");
    });
  };

  if (loggedIn === comment.author)
    return (
      <div>
        <button disabled={disabled > 0} onClick={handleClick}>
          Delete
        </button>
      </div>
    );

  return <div></div>;
}
