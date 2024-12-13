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
                            RELATIONSHIP HEALING USING YOGA PRANA VIDYA (YPV) HEALING PROTOCOLS: AN IN-DEPTH CASE STUDY
                        </h1>

                        {/* Blog Meta */}
                        <div className="flex items-center text-gray-400 text-sm mb-6">
                            <span>Published on: December 13, 2024</span>
                        </div>
                    </div>

                    {/* Blog Image */}
                    <div className="relative">
                        <img
                            src=""
                            alt="RELATIONSHIP HEALING USING YOGA PRANA VIDYA (YPV) HEALING PROTOCOLS: AN IN-DEPTH CASE STUDY"
                            className="w-full max-h-[500px] object-contain object-center"
                        />
                    </div>

                    {/* Blog Content */}
                    <div className="p-6">
                        {/* Blog Text */}
                        <div className="text-gray-300 leading-8 space-y-6">
                            <p>Publications: International Journal of Research - GRANTHAALAYAH
                            </p>
                            <p>
                                Article link :
                                <a href="https://dx.doi.org/10.29121/granthaalayah.v12.i11.2024.5842" target="_blank" className="text-blue-500 hover:underline">https://dx.doi.org/10.29121/granthaalayah.v12.i11.2024.5842</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
