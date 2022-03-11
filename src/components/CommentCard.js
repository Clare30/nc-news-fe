import DeleteComment from "./DeleteComment";
export default function CommentCard({ comment, setComments }) {
  return (
    <div className="commentCard">
      <h3>{comment.author}</h3>
      <DeleteComment comment={comment} setComments={setComments} />
      <p>
        {new Date(comment.created_at).toLocaleString("en-GB", {
          timeZone: "Europe/London",
        })}
      </p>
      <p>{comment.body}</p>
    </div>
  );
}
