export default function AddPost({ onShow }) {
  return (
    <div className="flex justify-center items-center m-3">
      <button
        onClick={() => onShow(true)}
        className="flex justify-center items-center bg-amber-500 p-2 rounded text-blue-900 font-bold text-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 6a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H7a1 1 0 110-2h4V7a1 1 0 011-1z" />
        </svg>
        Add Post!
      </button>
    </div>
  );
}
