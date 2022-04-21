import { useState } from "react";
import { loggedInUser } from "./context";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import * as api from "../api";

export default function PostComment({ setComments, setPosted }) {
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [commentCount, setCommentCount] = useState(0);
  const { loggedIn } = useContext(loggedInUser);
  const { id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setCommentCount((currCount) => currCount + 1);
    api
      .postComment({ username: loggedIn, body: newComment }, id)
      .then(({ comment }) => {
        setComments((currComments) => {
          setNewComment("");
          return [comment, ...currComments];
        });
        setIsLoading(false);
        alert("Comment posted!");
        setCommentCount(0);
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
      <p className="mt-5">
        To post a comment, please log in <Link to="/login">here</Link>
      </p>
    );
  }

  return (
    <form className=" postComment content is-spaced" onSubmit={handleSubmit}>
      <p className="mt-5 heading has-text-weight-semibold has-text-link">Logged in as {loggedIn}</p>
      <label htmlFor="body"></label>
      <textarea
        className="textarea is-small"
        value={newComment}
        required="required"
        name="body"
        type="text"
        placeholder="Add your comment"
        onChange={(event) => {
          setNewComment(event.target.value);
        }}
      ></textarea>
      <button className="button is-responsive mt-5" type="submit" disabled={commentCount > 0}>
        Post comment
      </button>
    </form>
  );
}
