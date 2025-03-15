import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"


export const Fullblog = ({ blog }: { blog: Blog }) => {
    return <div>
        <Appbar />
        <div className="grid grid-cols-8">
            <div className=" col-span-5 m-20">
                <div className="text-4xl font-bold">{blog.title}</div>
                <div className=" pt-2 text-slate-500">Post on 28 December 1937</div>
                <div className=" pt-2 ">{blog.content}</div>
            </div>

            <div className="col-span-3 ml-14 mt-20 ">
                <div className=" font-normal">Author</div>
                <div className="flex w-full">
                    <div className="pr-1 pt-5 flex items-center">
                      <Avatar name={blog.author.name || "Anonymous"}/>
                     </div>
                    <div>
                        <div className="text-xl font-bold pt-4">{blog.author.name || "Anonymous"}</div>
                        <div className="  text-slate-500">author detail</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
}