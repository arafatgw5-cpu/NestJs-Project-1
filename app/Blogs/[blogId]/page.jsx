import React from "react";
import Link from "next/link";

// same data (IMPORTANT: same array use korte hobe)
const blogs = [
  {
    id: 1,
    title: "Getting Started with React.js",
    description: "Learn the basics of React.js and build your first app.",
    category: "React",
    author: "Easin Arafat",
    date: "2026-04-01",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    content:
      "React is a powerful JavaScript library for building user interfaces. Start by learning components, props, and state. Then move to hooks like useState and useEffect. Practice by building real-world projects.",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    description: "Build modern UI using Tailwind CSS utility classes.",
    category: "CSS",
    author: "Easin Arafat",
    date: "2026-04-02",
    image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3",
    content:
      "Tailwind CSS is a utility-first framework. Learn spacing, flexbox, grid, and responsive design. It helps you build clean and modern UI very fast.",
  },
  {
    id: 3,
    title: "JavaScript ES6 Features Explained",
    description: "Understand modern JavaScript features easily.",
    category: "JavaScript",
    author: "Easin Arafat",
    date: "2026-04-03",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    content:
      "ES6 introduced arrow functions, destructuring, template literals, promises, and more. These features make JavaScript more powerful and easier to write.",
  },
  {
    id: 4,
    title: "Next.js for Beginners",
    description: "Learn Next.js and build SEO-friendly apps.",
    category: "Next.js",
    author: "Easin Arafat",
    date: "2026-04-04",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
    content:
      "Next.js is a React framework with powerful features like file-based routing, SSR, and SSG. It helps you build fast and scalable web apps.",
  },
  {
    id: 5,
    title: "Git & GitHub Complete Guide",
    description: "Learn version control and manage your code.",
    category: "Git",
    author: "Easin Arafat",
    date: "2026-04-05",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb",
    content:
      "Git helps you track changes in your code. GitHub allows you to store and share your projects. Learn commands like git add, commit, push, and pull.",
  },
];

const BlogDetails = async({ params }) => {
  const {blogId }= await params 

 const blog = blogs.find((item) => item.id === parseInt(blogId));

  // ❌ Not found
  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-red-500">
          Blog Not Found ❌
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-base-200 rounded-2xl shadow-lg overflow-hidden">

        {/* Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[250px] md:h-[400px] object-cover"
        />

        <div className="p-6 md:p-10">
          
          {/* Category */}
          <span className="badge badge-primary mb-3">
            {blog.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {blog.title}
          </h1>

          {/* Author + Date */}
          <div className="flex justify-between text-sm text-gray-500 mb-6">
            <span>✍️ {blog.author}</span>
            <span>📅 {blog.date}</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-4">{blog.description}</p>

          {/* Content */}
          <p className="text-gray-700 leading-relaxed">
            {blog.content}
          </p>

          {/* Back Button */}
          <div className="mt-8">
            <Link href="/Blogs">
              <button className="btn btn-primary rounded-full px-6">
                ← Back to Blogs
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;