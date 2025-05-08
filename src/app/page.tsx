import Image from "next/image";
import CreatePoem from "./components/CreatePoem";
import Link from "next/link";
import TopNav from "./components/TopNav";

export default function Home() {
  return (
    <main>
      <TopNav />
      <Link href="/stream">
        <h1>Welcome to the Haiku River</h1>
      </Link>
    </main>
  );
}
