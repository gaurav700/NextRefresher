import Link from "next/link";

export default function BlogPage() {
  return (
    <main>
      <h1>Blog Posts are here </h1>
      <p>
        <Link href="/blog/post">Post 1</Link>
      </p>
      <p>
        <Link href="/blog/post">Post 2</Link>
      </p>
    </main>
  );
}
