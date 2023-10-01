import Link from "next/link";
import Item from "./new-item";

export default function Page() {
  return (
    <main className="p-4">
      <h1 className="text-pink-500 text-2xl text-bold max-w-xs">Week 4</h1>
      <Item />
      <Link
        href="/"
        className="p-1 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Home
      </Link>
    </main>
  );
}
