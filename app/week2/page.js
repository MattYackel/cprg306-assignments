import StudentInfo from "../StudentInfo";
import Link from "next/link";

export default function Page() {
  return (
    <main className="text-2xl">
      <h1>My Shopping List</h1>
      <StudentInfo />
      <p><Link href="/" >Home</Link></p>
    </main>
  )
}