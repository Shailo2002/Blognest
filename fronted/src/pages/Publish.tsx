import axios from "axios";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { BACKEND_URL } from "./config";

interface Bloginputs {
  title: string;
  content: string;
}

export const Publish = () => {
  const navigate = useNavigate();

  const [blogInputs, setBlogInputs] = useState<Bloginputs>({
    title: "",
    content: "",
  });

  async function sendBlog() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/blog`,
        blogInputs,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      navigate(`/blogs/${response.data.id}`);
    } catch (e) {
      alert("posting of blog is unsuccesfull due to error");
    }
  }

  return (
    <div>
      <Appbar />
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-sm">
        <div className="flex items-center mb-4">
          <div
            onClick={sendBlog}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center mr-4  hover:bg-slate-500 "
          >
            <Plus className="w-5 h-5 text-gray-400" />
          </div>
          <input
            onChange={(e) => {
              setBlogInputs({
                ...blogInputs,
                title: e.target.value,
              });
            }}
            type="text"
            placeholder="Title"
            className="text-3xl font-semibold text-gray-700 w-full outline-none placeholder-gray-300"
          />
        </div>
        <textarea
          onChange={(e) => {
            setBlogInputs({
              ...blogInputs,
              content: e.target.value,
            });
          }}
          placeholder="Tell your story..."
          className="w-full h-96 text-lg text-gray-600 outline-none resize-none placeholder-gray-300"
        />
      </div>
    </div>
  );
};
