import DeleteComment from "./DeleteComment";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";

export default function CommentCard({ comment, setComments }) {
  TimeAgo.addDefaultLocale(en);
  TimeAgo.addLocale(ru);

  return (
    <div className="content comment card has-background-link-light pt-2">
      <div className="level mx-4">
        <h3 className="card-header"> {comment.author}</h3>
        <ReactTimeAgo date={new Date(comment.created_at)} locale="en-gb" />
        <DeleteComment comment={comment} setComments={setComments} />
      </div>
      <p className="mb-5 card-content">{comment.body}</p>
    </div>
  );
}
