import Image from "next/image";
import CreatePoem from "./components/CreatePoem";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/feed">
        <h1>Welcome to the Haiku River</h1>
      </Link>
    </main>
  );
}
