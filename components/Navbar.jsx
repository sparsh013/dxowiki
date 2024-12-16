import Link from "next/link";
import Search from "./Search";

export default function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between bg-gray-800 text-white shadow-lg p-6 mb-6 rounded-lg">
      <h1 className="text-4xl font-bold hover:text-indigo-400 transition duration-300 ease-in-out">
        <Link href="/">DXO Wiki</Link>
      </h1>
      <div className="mt-4 md:mt-0">
        <Search />
      </div>
    </nav>
  );
}
