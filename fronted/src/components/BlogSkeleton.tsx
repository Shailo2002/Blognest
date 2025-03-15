

export const BlogSkeleton = () => {
    return (
        <div className="w-full max-w-screen-md mx-auto mb-10">  
            <div className="flex items-center mb-4"> 
                <svg
                    className="w-8 h-8 text-gray-200 me-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <div className="w-20 h-2.5 bg-gray-200 rounded-full  me-3"></div>
                <div className="w-20 h-2.5 bg-gray-200 rounded-full  me-3"></div>
            </div>

            <div className="mt-5 h-6 bg-gray-200 rounded-full  w-60 mb-4"></div>

            <div className="pt-2">
                <div className="pt-1 h-2 bg-gray-200 rounded-full  max-w-[480px] mb-2.5"></div>
                <div className="pt-1 h-2 bg-gray-200 rounded-full  max-w-[440px] mb-2.5"></div>
                <div className="pt-1 h-2 bg-gray-200 rounded-full  max-w-[460px] mb-2.5"></div>
                <div className="pt-1 h-2 bg-gray-200 rounded-full  max-w-[400px]"></div>
            </div>

            <div className="m-4 w-20 h-2.5 bg-gray-200 rounded-full "></div>
        </div>
    );
};



        
