import CommentCard from "./CommentCard";
import Expandable from "./Expandable";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostComment from "./PostComment";
import * as api from "../api";

export default function ArticleComments() {
  const [comments, setComments] = useState([]);
  const [posted, setPosted] = useState(false)

  const { id } = useParams();

  useEffect(() => {
    api.fetchComments(id).then(({ comments }) => {
      setComments(comments);
    });
  }, [id, posted]);

  return (
    <section className="is-flex-direction-row">
      Comments {comments.length}
      <Expandable classAssign="button is-responsive mt-2" textOpen={"Show Comments"} textClose={"Hide Comments"}>
        <PostComment setComments={setComments} setPosted={setPosted}/>
        {comments.map((comment) => {
          return (
         <CommentCard key={comment.comment_id} comment={comment} setComments={setComments} />

          );
        })}
      </Expandable>
    </section>
  );
}
