import CommentCard from "./CommentCard";
import Expandable from "./Expandable";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostComment from "./PostComment";
import * as api from "../api";

export default function ArticleComments() {
  const [comments, setComments] = useState([]);
  const [commentCount, setCommentCount] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    api.fetchComments(id).then(({ comments }) => {
      setComments(comments);
    });
  }, [id]);

  return (
    <section>
      Comments {comments.length + commentCount}
      <Expandable className="commentButton">
        <PostComment
          setCommentCount={setCommentCount}
          commentCount={commentCount}
        />
        <div className="commentList">
          {comments.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })}
        </div>
      </Expandable>
    </section>
  );
}
