import styles from "./page.module.css";
import LogoFistex from "./../components/svgs/LogoFistex";
import Link from "next/link";
export default function NotFound() {
  return (
    <section>
      <h1>404</h1>
      <p>Página no encontrada</p>
      <div className={styles.logo404}>
        <LogoFistex></LogoFistex>
      </div>
      <Link href="/">Volver</Link>
    </section>
  );
}
