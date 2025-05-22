import { getAllUsers } from "../lib/actions";

export default async function Users() {
  const users = await getAllUsers();
  return (
    <main className="p-5 font-sans">
      <table className="w-full border-collapse shadow-lg bg-white rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 text-left text-gray-700 font-bold border-b-2 border-gray-300">Name</th>
            <th className="py-3 px-4 text-left text-gray-700 font-bold border-b-2 border-gray-300">Email</th>
            <th className="py-3 px-4 text-left text-gray-700 font-bold border-b-2 border-gray-300">Phone</th>
            <th className="py-3 px-4 text-left text-gray-700 font-bold border-b-2 border-gray-300">Location</th>
            <th className="py-3 px-4 text-left text-gray-700 font-bold border-b-2 border-gray-300">Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b border-gray-200 last:border-b-0">
              <td className="py-2 px-4 text-left text-gray-700">{user.name}</td>
              <td className="py-2 px-4 text-left text-gray-700">{user.email}</td>
              <td className="py-2 px-4 text-left text-gray-700">{user.phone}</td>
              <td className="py-2 px-4 text-left text-gray-700">{user.location}</td>
              <td className="py-2 px-4 text-left text-gray-700">{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}