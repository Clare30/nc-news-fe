import CommentCard from "./CommentCard";
import Expandable from "./Expandable";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostComment from "./PostComment";
import * as api from "../api";
import DeleteComment from "./DeleteComment";

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
      Comments {comments.length}
      <Expandable classAssign="commentButton">
        <PostComment setComments={setComments} />
        <div className="commentList">
          {comments.map((comment) => {
            return (
              <div>
                {" "}
                <CommentCard key={comment.comment_id} comment={comment} />
                <DeleteComment
                  comment={comment}
                  setComments={setComments}
                />{" "}
              </div>
            );
          })}
        </div>
      </Expandable>
    </section>
  );
}
