import Link from "next/link";

const UserDetails = async ({ params }) => {
  const { userId } = await params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-red-500">
          User Not Found
        </h1>
      </div>
    );
  }

  const user = await res.json();

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          {user.name}
        </h1>

        <p className="text-gray-500 mb-6">@{user.username}</p>

        <div className="space-y-3 text-gray-700">
          <p>
            <span className="font-semibold">📧 Email:</span> {user.email}
          </p>
          <p>
            <span className="font-semibold">📞 Phone:</span> {user.phone}
          </p>
          <p>
            <span className="font-semibold">🌐 Website:</span> {user.website}
          </p>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold text-gray-800 mb-2">📍 Address</h3>
          <p className="text-gray-600">
            {user.address?.street}, {user.address?.city}
          </p>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold text-gray-800 mb-2">🏢 Company</h3>
          <p className="text-gray-600">{user.company?.name}</p>
        </div>

        <Link
          href="/users"
          className="mt-8 inline-block bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          ← Back to Users
        </Link>
      </div>
    </div>
  );
};

export default UserDetails;