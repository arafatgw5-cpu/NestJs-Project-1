import Link from "next/link";
import React from "react";

const blogs = [
  {
    id: 1,
    title: "Getting Started with React.js",
    description:
      "Learn the basics of React.js and how to build your first component-based application.",
    category: "React",
    author: "Easin Arafat",
    date: "2026-04-01",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    description:
      "A complete guide to building modern UI using Tailwind CSS utility classes.",
    category: "CSS",
    author: "Easin Arafat",
    date: "2026-04-02",
    image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3",
  },
  {
    id: 3,
    title: "JavaScript ES6 Features Explained",
    description:
      "Understand ES6 concepts like arrow functions, destructuring, and promises.",
    category: "JavaScript",
    author: "Easin Arafat",
    date: "2026-04-03",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
  {
    id: 4,
    title: "Next.js for Beginners",
    description:
      "Build fast and SEO-friendly apps using Next.js and understand routing.",
    category: "Next.js",
    author: "Easin Arafat",
    date: "2026-04-04",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
  },
  {
    id: 5,
    title: "Git & GitHub Complete Guide",
    description:
      "Learn version control with Git and manage your projects using GitHub.",
    category: "Git",
    author: "Easin Arafat",
    date: "2026-04-05",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb",
  },
];

const BlogPages = () => {
  return (
    <div className="min-h-screen bg-base-100 px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            My <span className="text-primary">Blogs</span>
          </h1>
          <p className="text-gray-500">
            Insights, tutorials and guides about web development
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-base-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >
              
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-5">
                
                {/* Category */}
                <span className="badge badge-primary badge-outline mb-2">
                  {blog.category}
                </span>

                {/* Title */}
                <h2 className="text-xl font-bold mb-2">
                  {blog.title}
                </h2>

                {/* Description */}
                <p className="text-gray-500 text-sm mb-4">
                  {blog.description}
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                  <span>{blog.author}</span>
                  <span>{blog.date}</span>
                </div>

                {/* ✅ FIXED BUTTON */}
                <Link href={`/Blogs/${blog.id}`}>
                  <button className="btn btn-sm btn-primary w-full rounded-full">
                    Read More →
                  </button>
                </Link>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPages;