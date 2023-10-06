import ItemList from "./item-list.js";
import Link from "next/link";

export default function page() {
  return (
    <main>
      <h1>Shopping List</h1>
      <ItemList />
      <Link
        href="/"
        className="p-1 text-white bg-blue-500 rounded hover:bg-orange-400"
      >
        Home
      </Link>
    </main>
  );
}
