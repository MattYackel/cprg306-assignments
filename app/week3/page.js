import ItemList from "./item-list";
import Link from "next/link";

export default function Page() {
  return (
    <main className="p-4">
      <h1 className="text-pink-500 text-2xl text-bold max-w-xs">
        Shopping List
      </h1>
      <ItemList />
      <Link
        href="/"
        className="p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Home
      </Link>
    </main>
  );
}
