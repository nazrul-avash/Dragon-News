import Link from "next/link";


const notFound = () => {
    return (
        <div>
             <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white">
      <h1 className="text-6xl font-bold text-gray-900">404</h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-700">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-500 max-w-md">
        The page you’re looking for doesn’t exist, moved, or got swallowed by the internet void.
      </p>

      <Link
        href="/"
        className="mt-6 px-5 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition"
      >
        Go Home
      </Link>
    </div>
        </div>
    );
};

export default notFound;