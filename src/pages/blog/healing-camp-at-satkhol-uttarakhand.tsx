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
                            Healing camp at satkhol, Uttarakhand
                        </h1>

                        {/* Blog Meta */}
                        <div className="flex items-center text-gray-400 text-sm mb-6">
                            <span>Published on: June 1, 2024</span>
                        </div>
                    </div>

                    {/* Blog Image */}
                    <div className="relative">
                        <img
                            src="/blog-1-06-2024.jpeg"
                            alt="Healing camp at satkhol, Uttarakhand"
                            className="w-full max-h-[500px] object-contain object-center"
                        />
                    </div>

                    {/* Blog Content */}
                    <div className="p-6">
                        {/* Blog Text */}
                        <div className="text-gray-300 leading-8 space-y-6">
                            <p>
                            जीवन मांगल्य ट्रस्ट  गुजरात शाखा उत्तराखंड के तत्वावधान मे  रामगढ ब्लोक के सतखोल मे प्रथम हिलिंग ग्रामीण स्वास्थ्य कैम्प में 12 लोगो ने आज लाभ लीया था,..विशेष श्रीप्रदीप गोयंकाजी ने  विस्तार से ऊर्जा से उपचार कैसे काम करता है समजाया था,तथा समूह को हिलींग दियाथा , आपने ध्यान और चित्तशुद्धि, सकारात्मक  चिंतन को दैनिक जीवन में कैसे करनाहै ओर कीतना जरूरी है उस की महत्ता समजाई थी, ध्यान ओर ऐकाग्रहता के बारमे   मागॅदशॅन  कीयाथा,  मरीजो ने प्रश्नोतरी से अपनी रुचि जताई थी, ट्रस्टी अनिरुद्धसिंह जडेजा ने जीवन शैली खानपान  आरोग्य,उपचार की बाते रखीथी , प्रति मंगल ओर गुरुवार यह शिबिर चलेगा , <br/> (नि:शुल्क ईलाज हैतु पंजीकरण करवाये-99099 54577)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
