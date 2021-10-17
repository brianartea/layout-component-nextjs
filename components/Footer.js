import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className="flex justify-center absolute left-0 bottom-0 w-full mx-auto bg-gray-100 text-gray-600 border-t-2 border-gray-200">
      <p className="text-sm">
        Copyright &copy;
        <span>
          <Link href="/">
            <a>Devs</a>
          </Link>
        </span>{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
