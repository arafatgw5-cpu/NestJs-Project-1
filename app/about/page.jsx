import image from "../assets/my-profile.jpeg";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            About <span className="text-primary">Me</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Passionate web developer who loves building modern, responsive and
            user-friendly applications.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <Image
              src={image}
              alt="profile"
              width={288}
              height={288}
              className="w-72 h-72 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Easin Arafat</span> 👋
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              I am an aspiring web developer from Bangladesh 🇧🇩. I love creating
              clean and modern websites using HTML, CSS, JavaScript and React.
              My goal is to become a professional full-stack developer.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              I enjoy solving real-world problems and continuously improving my
              skills. Currently, I am focusing on React, Next.js and modern web
              technologies.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="badge badge-primary badge-outline px-4 py-3">
                HTML
              </span>
              <span className="badge badge-primary badge-outline px-4 py-3">
                CSS
              </span>
              <span className="badge badge-primary badge-outline px-4 py-3">
                JavaScript
              </span>
              <span className="badge badge-primary badge-outline px-4 py-3">
                React
              </span>
              <span className="badge badge-primary badge-outline px-4 py-3">
                Tailwind
              </span>
            </div>

            {/* Button */}
            <button className="btn btn-primary rounded-full px-6 shadow-md hover:scale-105 transition-transform duration-300">
              Contact Me
            </button>
          </div>
        </div>

        {/* Extra Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-base-200 shadow-md hover:shadow-xl transition duration-300">
            <h3 className="font-bold text-xl mb-2">🚀 Fast Learner</h3>
            <p className="text-gray-500">
              Quickly adapt to new technologies and frameworks.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-base-200 shadow-md hover:shadow-xl transition duration-300">
            <h3 className="font-bold text-xl mb-2">💡 Problem Solver</h3>
            <p className="text-gray-500">
              Love solving real-world coding challenges.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-base-200 shadow-md hover:shadow-xl transition duration-300">
            <h3 className="font-bold text-xl mb-2">🎯 Goal Oriented</h3>
            <p className="text-gray-500">
              Focused on becoming a professional developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;