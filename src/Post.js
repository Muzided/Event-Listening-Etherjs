import React from "react";

function Post({ userId, id, title, body }) {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      
      <h4 className="font-medium mb-1">User ID: {userId}</h4>
      <h4 className="font-medium mb-1">Post ID: {id}</h4>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="mt-2">{body}</p>
    </div>
  );
}

export default Post;