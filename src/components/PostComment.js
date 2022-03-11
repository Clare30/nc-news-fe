import { useState } from "react";
import { loggedInUser } from "./context";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import * as api from "../api";

export default function PostComment({ setComments }) {
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [commentCount, setCommentCount] = useState(0);
  const { loggedIn } = useContext(loggedInUser);
  const { id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    api
      .postComment({ username: loggedIn, body: newComment }, id)
      .then(({ comment }) => {
        setComments((currComments) => {
          setNewComment("");
          return [comment, ...currComments];
        });
        setCommentCount((currCount) => currCount + 1);
        setIsLoading(false);
      })
      .catch((error) => {
        setCommentCount((currCount) => currCount - 1);
        setError("Sorry, that didn't work, please try again");
      });
  };

  if (error) return <p>{error}</p>;
  if (isLoading) return <p>Posting...</p>;
  if (loggedIn.length <= 0) {
    return (
      <p className="commentLogin">
        To post a comment, please log in <Link to="/login">here</Link>
      </p>
    );
  }

  if (commentCount === 1) return <p> Comment posted! </p>;

  return (
    <form onSubmit={handleSubmit}>
      <p>Logged in as {loggedIn}</p>
      <label htmlFor="body"></label>
      <input 
        value={newComment}
        required="required"
        name="body"
        type="text"
        placeholder="Add your comment"
        onChange={(event) => {
          setNewComment(event.target.value);
        }}
      ></input>
      <button type="submit" disabled={commentCount > 0}>
        Post comment
      </button>
    </form>
  );
}
