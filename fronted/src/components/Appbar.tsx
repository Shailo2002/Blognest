import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const Appbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    navigate("/signin"); // Redirect to sign-in page
  };

  return (
    <div className="flex justify-between items-center bg-white shadow-md px-6 py-4 sticky top-0 w-full z-50">
      <Link
        to="/blogs"
        className="text-xl font-semibold text-gray-700 hover:text-gray-900"
      >
        Medium
      </Link>
      <div className="flex items-center gap-4 relative">
        <Link to="/publish">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            New
          </button>
        </Link>

        {/* Avatar with Clickable Dropdown */}
        <div className="relative">
          <div
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className="cursor-pointer"
          >
            <Avatar size={8} name="Shailesh" />
          </div>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg">
              <button
                onClick={handleLogout}
                className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
