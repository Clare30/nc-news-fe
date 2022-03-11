import { useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api";

export default function ArticleVote({ article }) {
  const [votes, setVotes] = useState(0);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const handleVoteClick = (num) => {
    setVotes((currVotes) => currVotes + num);
    setError(null);
    api.amendVoteCount(id, num).catch(() => {
      setVotes((currVotes) => currVotes - num * -1);
      setError("Sorry, that didn't work, please try again");
    });
  };

  if (error) return <p>{error}</p>;

  return (
    <div>
      Votes {article.votes + votes} <br></br>
      <button className="voteButton"
        disabled={votes === 1}
        onClick={() => {
          handleVoteClick(1);
        }}
      >
        +
      </button>
      <button className="voteButton"
        disabled={votes <= 0}
        onClick={() => {
          handleVoteClick(-1);
        }}
      >
        -
      </button>
    </div>
  );
}
