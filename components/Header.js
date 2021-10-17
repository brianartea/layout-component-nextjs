import Link from "next/link";
//import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className="bg-gray-100 border-b-2 border-gray-200">
      <header className="max-w-6xl mx-auto flex justify-between px-10 ">
        <div className="py-4">
          <Link href="/">
            <a>Devs</a>
          </Link>
        </div>

        <nav className="py-4">
          <ul>
            <li>
              <Link href="/react">
                <a>React</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
