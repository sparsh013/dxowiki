'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    setSearch('');
    router.push(`/${search}/`);
  }

  return (
    <form
      className="flex items-center bg-gray-700 rounded-full shadow-lg px-4 py-2 w-full max-w-md"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 bg-transparent text-white text-lg focus:outline-none placeholder-gray-400 px-2"
      />
      <button
        className="text-white bg-indigo-500 hover:bg-indigo-600 transition duration-300 ease-in-out px-4 py-2 rounded-full ml-2"
      >
        🔎
      </button>
    </form>
  );
}
