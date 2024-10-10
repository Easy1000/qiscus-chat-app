import Image from "next/image";

export default function ChatBoxExt({ comments }) {
  return (
    <div className="p-4 max-h-screen overflow-y-auto">
      {comments.map((comment) => (
        <div key={comment.id} className="mb-3">
          {comment.type === "text" && (
            <div>
              <p className="text-sm font-semibold">{comment.sender}</p>
              <p className="text-sm bg-gray-100 p-2 rounded-lg">
                {comment.message}
              </p>
            </div>
          )}

          {comment.type === "image" && (
            <div className="bg-gray-100 p-2 rounded-lg">
              <p className="text-sm font-semibold">{comment.sender}</p>
              <Image
                src={comment.url}
                alt="image"
                width={500}
                height={500}
                className="h-auto rounded-lg mb-2"
              />
            </div>
          )}

          {comment.type === "video" && (
            <div className="bg-gray-100 p-2 rounded-lg">
              <p className="text-sm font-semibold">{comment.sender}</p>
              <video width={320} height={240} controls preload="none">
                <source src={comment.url} type="video/mp4" />
              </video>
            </div>
          )}

          {comment.type === "pdf" && (
            <div className="bg-gray-100 p-2 rounded-lg">
              <p className="text-sm font-semibold">{comment.sender}</p>
              <a
                href={comment.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {comment.filename}
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
