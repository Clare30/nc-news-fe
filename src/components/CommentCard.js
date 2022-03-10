export default function CommentCard({ comment }) {
  return (
    <div className="commentCard">
      <h3>{comment.author}</h3>
      <p>
        {new Date(comment.created_at).toLocaleString("en-GB", {
          timeZone: "Europe/London",
        })}
      </p>
      <p>{comment.body}</p>
    </div>
  );
}
