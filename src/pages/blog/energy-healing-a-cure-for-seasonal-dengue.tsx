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
                            Energy Healing a cure for seasonal Dengue
                        </h1>

                        {/* Blog Meta */}
                        <div className="flex items-center text-gray-400 text-sm mb-6">
                            <span>Published on: October 21, 2022</span>
                        </div>
                    </div>

                    {/* Blog Image */}
                    <div className="relative">
                        <img
                            src="/blog-21-10-2022.jpg"
                            alt="Energy Healing a cure for seasonal Dengue"
                            className="w-full max-h-[500px] object-contain object-center"
                        />
                    </div>

                    {/* Blog Content */}
                    <div className="p-6">
                        {/* Blog Text */}
                        <div className="text-gray-300 leading-8 space-y-6">
                            <p>
                                Dengue can be considered as a viral disease with rapid declining of blood platelets.
                            </p>
                            <p>
                                If with immune system building viral load can be eliminated fast then this decline can be reversed. <br />
                                Platelets going down beyond 50000 can be severe for patient .
                            </p>
                            <p>
                                We have seen that just within 1 to 3 days of hospitalized patient healing .....there is marked improvement in external conditions and internal parameters including  appetite, liver condition, fever, abdominal pain condition, rashes and finally platelets reversal. <br />
                                Though at least 15 days healing is recommended to bring patient condition to normal with platelets count more than 1.5 to 4.5 lac .
                            </p>
                            <p>
                                Energy healing specially yoga prana vidya is a great help when used with modern allopathy in integration.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
