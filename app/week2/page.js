import StudentInfo from "../StudentInfo";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl">My Shopping List</h1>
      <StudentInfo />
      <p>
        <Link href="/" className="text-blue-500 hover:text-blue-600">
          Home
        </Link>
      </p>
    </main>
  );
}
