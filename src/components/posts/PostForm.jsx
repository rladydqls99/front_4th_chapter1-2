/** @jsx createVNode */
import { createVNode } from "../../lib";
import { globalStore } from "../../stores/index.js";

export const PostForm = () => {
  const { postContent } = globalStore.actions;

  const handlePostClick = () => {
    const content = document.getElementById("post-content").value;

    if (content.trim() !== "") {
      postContent(content);
    }
  };

  return (
    <div className="mb-4 bg-white rounded-lg shadow p-4">
      <textarea
        id="post-content"
        placeholder="무슨 생각을 하고 계신가요?"
        className="w-full p-2 border rounded"
      />
      <button
        onClick={handlePostClick}
        id="post-submit"
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
      >
        게시
      </button>
    </div>
  );
};
