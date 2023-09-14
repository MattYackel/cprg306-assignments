import StudentInfo from "./StudentInfo";
import Link from "next/link";

export default function Home() {
  return (
    <main className="m-auto">
      <h1 className="text-2xl">CPRG 306 Web Dev 2 Assignments</h1>
      <StudentInfo />
      <Link
        href="https://github.com/MattYackel/cprg306-assignments"
        target="_blank"
        className="text-blue-500 hover:text-blue-600"
      >
        Github Repo
      </Link>
      <p>
        <Link href="/week2" className="text-blue-500 hover:text-blue-600">
          Week 2
        </Link>
      </p>
    </main>
  );
}
