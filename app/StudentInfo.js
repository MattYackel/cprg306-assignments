import Link from "next/link";

export default function StudentInfo() {
  return (
    <main>
      <p>Name: Matt Yackel</p>
      <p>Course Section: CPRG 306 B</p>
      <Link
        href="https://github.com/MattYackel/cprg306-assignments"
        target="_blank"
        className="text-blue-500 hover:text-blue-600"
      >
        Github Repo
      </Link>
    </main>
  );
}
