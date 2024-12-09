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
                            SCANNING CHEMICAL ENERGIES
                        </h1>

                        {/* Blog Meta */}
                        <div className="flex items-center text-gray-400 text-sm mb-6">
                            <span>Published on: October 11, 2022</span>
                        </div>
                    </div>

                    {/* Blog Image */}
                    <div className="relative">
                        <img
                            src="/blog-11-10-2022.jpg"
                            alt="SCANNING CHEMICAL ENERGIES"
                            className="w-full max-h-[500px] object-contain object-center"
                        />
                    </div>

                    {/* Blog Content */}
                    <div className="p-6">
                        {/* Blog Text */}
                        <div className="text-gray-300 leading-8 space-y-6">
                            <p>
                                Mangoes, bananas are the most delicious of fruits but are often  ripened artificially by Chemical treatment thereby impregnating it with chemical energy which cannot be removed by water or other treatment.
                            </p>
                            <p>
                                Already many harmful chemicals are sprayed on these fruit plants during its cultivation practices.
                            </p>
                            <p>
                                Special attention should be given to obtain artificial ripening free fruits ..
                            </p>
                            <p>
                                Gastro intestinal diseases are often most common in masses due to indescrminate use of chemicals in fruits and vegetables.
                            </p>
                            <p>
                                Organic fruits and vegetables are often available in every city but should be scanned to ascertain their authenticity.
                            </p>
                            <p>
                                Our aura vibrations often matches with plants vibrational  frequency but chemical  contamination of plant kingdom often hinders these property.
                            </p>
                            <p>
                                As one cannot go for chemical test for each and every commodity so learning energy scanning is most suitable way to find right eatables for daily use.
                            </p>
                            <p>
                                This ability can be learned by attending just one day energy scanning workshop at a YPV Centre.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
