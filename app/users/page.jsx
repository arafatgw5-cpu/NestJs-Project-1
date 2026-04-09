import Link from "next/link";

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  const users = await res.json();

  return (
    <div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10">
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Users List 👥
        </h1>
        <p className="text-gray-500 mt-2">All users fetched from API</p>
      </div>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {user.name}
            </h2>

            <p className="text-sm text-gray-500 mb-3">@{user.username}</p>

            <div className="space-y-1 text-gray-600 text-sm">
              <p>
                <span className="font-medium">📧 Email:</span> {user.email}
              </p>
              <p>
                <span className="font-medium">📞 Phone:</span> {user.phone}
              </p>
              <p>
                <span className="font-medium">🌐 Website:</span> {user.website}
              </p>
            </div>

            <div className="mt-4 text-sm text-gray-500">
              📍 {user.address?.city}, {user.address?.street}
            </div>

            <div className="mt-2 text-sm text-gray-500">
              🏢 {user.company?.name}
            </div>

            <Link
              href={`/users/${user.id}`}
              className="mt-5 inline-block w-full text-center bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-300"
            >
              User Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;