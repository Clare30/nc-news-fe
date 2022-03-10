export default function CommentCard ({comment}) { 
    return (
        <div className="commentCard">
            <h3>{comment.author}</h3>
            <p>{new Date(comment.created_at).toLocaleDateString()}</p>
            <p>{comment.body}</p>
        </div>
    )
}