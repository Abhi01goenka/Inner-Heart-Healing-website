import { useRouter } from "next/router";

const BlogPage = () => {
    const router = useRouter();

    return (
        <div className="min-h-screen py-10">
            <div className="container mx-auto px-4 w-[90vw]">
                {/* Back Button */}
                <div className="mb-8">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center text-sm text-gray-400 hover:text-white transition duration-150"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        Back to Blogs
                    </button>
                </div>

                {/* Blog Card */}
                <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">

                    <div className="p-6">
                        {/* Blog Title */}
                        <h1 className="text-3xl font-extrabold text-white mb-4">
                            Managing Fatigue and Improving Happiness using YPV Energy Healing
                        </h1>

                        {/* Blog Meta */}
                        <div className="flex items-center text-gray-400 text-sm mb-6">
                            <span>Published on: November 20, 2023</span>
                        </div>
                    </div>

                    {/* Blog Image */}
                    <div className="relative">
                        <img
                            src="/blog-20-11-2023.jpeg"
                            alt="Managing Fatigue and Improving Happiness using YPV Energy Healing"
                            className="w-full max-h-[500px] object-contain object-center"
                        />
                    </div>

                    {/* Blog Content */}
                    <div className="p-6">
                        {/* Blog Text */}
                        <div className="text-gray-300 leading-8 space-y-6">
                            <p>
                                Facebook <br /> 📸 Watch this live video on Facebook<br />
                                <a href="https://fb.watch/opUx3H5fSc/?mibextid=ZbWKwL" target="_blank" className="text-blue-500 hover:underline">https://fb.watch/opUx3H5fSc/?mibextid=ZbWKwL</a>
                            </p>
                            <p>
                                Youtube link <br />
                                <a href="https://www.youtube.com/live/Arxah4dUb8k?si=xM2x7WFA0sYXYsDZ" target="_blank" className="text-blue-500 hover:underline">https://www.youtube.com/live/Arxah4dUb8k?si=xM2x7WFA0sYXYsDZ</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
