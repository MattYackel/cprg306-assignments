import StudentInfo from "./StudentInfo";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl">CPRG 306 Web Dev 2 Assignments</h1>
      <StudentInfo />
      <p>
        <Link href="/week2" className="text-blue-500 hover:text-blue-600">
          Week 2
        </Link>
      </p>
      <p>
        <Link href="/week3" className="text-blue-500 hover:text-blue-600">
          Week 3
        </Link>
      </p>
      <p>
        <Link href="/week4" className="text-blue-500 hover:text-blue-600">
          Week 4
        </Link>
      </p>
      <p>
        <Link href="/week5" className="text-blue-500 hover:text-blue-600">
          Week 5
        </Link>
      </p>
      <p>
        <Link href="/week6" className="text-blue-500 hover:text-blue-600">
          Week 6
        </Link>
      </p>
      <p>
        <Link href="/week7" className="text-blue-500 hover:text-blue-600">
          Week 7
        </Link>
      </p>
      <p>
        <Link href="/week8" className="text-blue-500 hover:text-blue-600">
          Week 8
        </Link>
      </p>
      <p>
        <Link href="/week10" className="text-blue-500 hover:text-blue-600">
          Week 10
        </Link>
      </p>
    </main>
  );
}
