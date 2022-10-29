import { useState } from "react";
import Link from "next/link";

export default function Blogs() {
  const [value, setValue] = useState(1);
  return (
    <div>
      <h1>Blogs Page</h1>
      <input
        type="number"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <br />
      <Link href={`/blogs/blog-${value}`}>Got to blog-{value}</Link>
    </div>
  );
}
