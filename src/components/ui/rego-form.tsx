import { insertion } from "@/app/lib/actions";
import { useActionState } from "react";
import { montserrat } from "@/components/ui/fonts";

const initState = {
  message: null,
}

export default function RegoForm() {
  const [state, formAction] = useActionState(insertion, initState);

  return (
<div className={`min-h-screen flex items-center justify-center bg-gray-100 p-4 font-sans ${montserrat.className}`}>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">YMG Online Registration</h1>
        <form action={formAction} className="space-y-4">
          <div>
            <label htmlFor="nameRequest" className="block text-sm font-medium text-gray-700 mb-1">Name:</label>
            <input
              type="text"
              id="nameRequest"
              name="nameRequest"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Paul"
              style={{ backgroundColor: 'white' }}
            />
          </div>
          <div>
            <label htmlFor="emailRequest" className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
            <input
              type="email"
              id="emailRequest"
              name="emailRequest"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="paul.apostle@example.com"
              style={{ backgroundColor: 'white' }}
            />
          </div>
          <div>
            <label htmlFor="numberRequest" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              id="numberRequest"
              name="numberRequest"
              required
              pattern="\d{10}"
              title="Phone number must be exactly 10 digits"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="0417123456"
              style={{ backgroundColor: 'white' }}
            />
          </div>
          <div>
            <label htmlFor="locationRequest" className="block text-sm font-medium text-gray-700 mb-1">Location:</label>
            <input
              type="text"
              id="locationRequest"
              name="locationRequest"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Sydney"
              style={{ backgroundColor: 'white' }}
            />
          </div>
          <div>
            <label htmlFor="ageRequest" className="block text-sm font-medium text-gray-700 mb-1">Age:</label>
            <input
              type="text"
              id="ageRequest"
              name="ageRequest"
              required
              pattern="^(?:[0-9]|[1-9][0-9]|1[01][0-9]|120)$"
              title="Age must be a number between 0 and 120"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="30"
              style={{ backgroundColor: 'white' }}
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
          <p>{state?.message}</p>
        </form>
      </div>
    </div>
  );
}

