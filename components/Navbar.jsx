import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/page1">page1</Link>
        </li>
        <li>
          <Link href="/page2">page2</Link>
        </li>
      </ul>
    </nav>
  );
}
