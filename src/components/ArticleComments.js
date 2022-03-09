import CommentCard from "./CommentCard";
import Expandable from "./Expandable";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api";

export default function ArticleComments() {
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    api.fetchComments(id).then(({ comments }) => {
      setComments(comments);
    });
  }, [id]);

  return (
    <section>
      Comments {comments.length} <Expandable className="commentButton" >
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </Expandable>
    </section>
  );
}
