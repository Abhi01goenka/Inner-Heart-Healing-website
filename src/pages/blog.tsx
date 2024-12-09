import React from "react";
import { useRouter } from "next/router";
import { blogs } from "@/components/Blog";


export default function Blog() {
    const router = useRouter();

    const handleBlogClick = (link: string) => {
        router.push(link); // Navigate to the blog link
    };

    return (
        <>
            <header className="bg-neutral-900 text-white text-center py-10">
                <h1 className="text-4xl font-bold">Our Blog</h1>
                <p className="text-gray-400 mt-2">
                    Stay updated with the latest insights and stories.
                </p>
            </header>
            <section className="py-10 bg-neutral-950">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogs.map((blog) => (
                            <div
                                key={blog.id}
                                onClick={() => handleBlogClick(blog.link)}
                                className="bg-neutral-900 rounded-md shadow-lg overflow-hidden cursor-pointer group transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="relative">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400">
                                        {blog.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-2">
                                        {blog.date}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
