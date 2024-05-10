export default function ViewComments({ post }) {
  return (
    <div>
      {post.comments.map((comment, index) => (
        <div key={index}>
          <p>{comment.displayName}</p>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
}
