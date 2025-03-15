import { Link } from "react-router-dom";

interface BlogCardProps {
    id: number;
    authorname: string;
    title: string;
    content: string;
    publishedDate: string;
}

export const BlogCard = ({
    id,
    authorname,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return <Link to={`/blogs/${id}`}>
    <div className=" cursor-pointer">
        <div className="pl-20 pt-10 max-w-screen-md ">
            <div className="flex align-middle ">
                <Avatar name={authorname} size={7}/>
                <div className="pr-2 text-l">{authorname}</div>
                <div className=""> &#9679; </div>
                <div className="font-thin text-slate-500 pl-2">  {publishedDate} </div> 
            </div>
            <div className="font-bold text-2xl pt-1">
                {title}
            </div>
            <div className="pt-1">
                {content.slice(0, 100) + "..."}
            </div>
            <div className="border-b-2 border-slate-200 p-4 text-slate-500">
                {`${Math.ceil(content.length / 100)} minutes`}
            </div>
        </div>

    </div>
    </Link>
}

export function Avatar({ name , size = 7}: { name: string, size? : number }) {
    return <div className={`relative inline-flex items-center justify-center w-7 h-7 mr-2 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
        <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>
    </div>
}


