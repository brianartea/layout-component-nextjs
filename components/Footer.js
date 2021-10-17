import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy;Devs {new Date().getFullYear()}</p>
      <p>
        <Link href="/">
          <a>Devs</a>
        </Link>
      </p>
    </footer>
  );
}
