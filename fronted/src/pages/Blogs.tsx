import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

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

  return (
    <div>
      <Appbar />

      <div className="flex flex-col ml-25 items-center min-h-screen ">
        <div>
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorname={blog.author.name || "Anonymus"}
              title={blog.title}
              content={blog.content}
              publishedDate={"9th oct 2024"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
