import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contac</Link>
    </nav>
  );
}
