import CommentCard from "./CommentCard";
import Expandable from "./Expandable";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostComment from "./PostComment";
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
    <section className="is-flex-direction-row">
      Comments {comments.length}
      <Expandable classAssign="button" textOpen={"Show Comments"} textClose={"Hide Comments"}>
        <PostComment setComments={setComments} />
        {comments.map((comment) => {
          return (
            <div key={comment.comment_id}>
              <CommentCard comment={comment} setComments={setComments} />
            </div>
          );
        })}
      </Expandable>
    </section>
  );
}
