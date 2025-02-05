import Link from "next/link";
import Header from "./components/header";
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Link href="/about">
          <button className="text-center">Go To About Page</button>
        </Link>
        <Link href="/blog">
          <button className="text-center">Go To Blog Page</button>
        </Link>
      </main>
    </>
  );
}
