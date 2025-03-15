import { useParams } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { Fullblog } from "../components/Fullblog";
import { useBlog } from "../hooks";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });

  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="space-y-4">
          {" "}
          {/* Add vertical space between skeletons */}
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
        </div>
      </div>
    );
  }

  return <div>{blog && <Fullblog blog={blog} />}</div>;
};
