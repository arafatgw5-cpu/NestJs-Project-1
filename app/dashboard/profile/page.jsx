import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">

      {/* Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center gap-6">

          {/* Profile Image */}
          <img
            src="https://i.pravatar.cc/150"
            alt="profile"
            className="w-32 h-32 rounded-full border-4 border-primary shadow"
          />

          {/* Info */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Easin Arafat
            </h1>
            <p className="text-gray-500">
              Aspiring Web Developer 🚀
            </p>

            <div className="mt-3 flex flex-wrap justify-center md:justify-start gap-2">
              <span className="badge badge-primary">React</span>
              <span className="badge badge-secondary">Next.js</span>
              <span className="badge badge-accent">Tailwind</span>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-8 border-t"></div>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">

          <div>
            <h3 className="font-semibold text-gray-800">📧 Email</h3>
            <p className="text-gray-500">arafatgw5@gmail.com</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">📍 Location</h3>
            <p className="text-gray-500">Bangladesh</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">🎓 Education</h3>
            <p className="text-gray-500">English Department (NU)</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">💼 Role</h3>
            <p className="text-gray-500">Frontend Developer</p>
          </div>

        </div>

        {/* Button */}
        <div className="mt-8 flex justify-center md:justify-end">
          <button className="btn btn-primary rounded-full px-6">
            ✏️ Edit Profile
          </button>
        </div>

      </div>
    </div>
  );
};

export default Profile;