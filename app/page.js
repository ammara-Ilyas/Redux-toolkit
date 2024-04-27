import Link from "next/link";
export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-between items-center">
      <Link href="/product">Go to Product page</Link>
      <h1>Hello</h1>
    </div>
  );
}
