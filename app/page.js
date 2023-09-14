import StudentInfo from "./StudentInfo";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-2xl">
      <h1>CPRG 306 Web Dev 2 Assignments</h1>
      <StudentInfo />
      <Link href="https://github.com/MattYackel/cprg306-assignments" target="_blank" >Github Repo</Link>
      <p><Link href="/week2" >Week 2</Link></p>
    </main>
  )
}
