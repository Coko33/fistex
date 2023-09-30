/* import Image from "next/image"; */
import LogoFistex from "../components/svgs/LogoFistex";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.pConstruccion_logo}>
        <LogoFistex></LogoFistex>
      </div>
      <h1 className={styles.pConstruccion_titulo}>Fistex</h1>
      <h6 className={styles.pConstruccion_subtitulo}>página en construcción</h6>
    </main>
  );
}
