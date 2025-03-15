import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const Appbar = () => {
  return (
    <div className="flex justify-between items-center bg-white shadow-md px-6 py-4 sticky top-0 w-full z-50">
      <Link
        to="/blogs"
        className="text-xl font-semibold text-gray-700 hover:text-gray-900"
      >
        Medium
      </Link>
      <div className="flex items-center gap-4">
        <Link to="/publish">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            New
          </button>
        </Link>
        <Avatar size={8} name="Shailesh" />
      </div>
    </div>
  );
};
