import Link from "next/link";
import { useState } from "react";

export default function Index() {
  const [value, setValue] = useState("");
  return (
    <div>
      {/* Login Page */}
      <h1>Login</h1>
      <form>
        <input
          type="text"
          placeholder="User Name"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <input type="number" placeholder="Password" />
      </form>
      <Link href="/contact">submit</Link>
      <h1>Index Route</h1>
      <Link href="/about">Go to About</Link>
      <Link href="/blogs">GO to blogs</Link>
    </div>
  );
}
