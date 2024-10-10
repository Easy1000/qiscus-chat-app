export default function ChatBox({ comments }) {
  return (
    <div className="p-4 overflow-y-auto">
      {comments.map((comment) => (
        <div key={comment.id} className="mb-3">
          <p className="text-sm font-semibold">{comment.sender}</p>
          <p className="text-sm bg-gray-100 p-2 rounded-lg">
            {comment.message}
          </p>
        </div>
      ))}
    </div>
  );
}
