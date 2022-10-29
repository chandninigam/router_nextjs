import Link from "next/link";

export default function Index() {
  return (
    <div>
      <h1>Index Route</h1>
      <Link href="/about">Go to About</Link>
      <br />
      <Link href="/contact">Go to Contact Us</Link>
      <br />
      <Link href="/blogs">GO to blogs</Link>
    </div>
  );
}
