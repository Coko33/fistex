import styles from "./LogoFistex.module.css";

export default function LogoFistex() {
  return (
    <svg
      id={styles.logoFistex}
      data-name="Capa 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 149.57 184.92"
    >
      <path
        id={styles.forma1}
        d="M322.43,328v61.64h30.81a19,19,0,0,0,19-19V328Z"
        fill="#6abd99"
        /* fill="#69c0b4" */
      />
      <path
        id={styles.forma2}
        d="M284.35,328a11.79,11.79,0,0,0-11.78,11.79v49.85h49.86V328Z"
        fill="#1f5764"
        /* fill="#027181" */
      />
      <path
        id={styles.forma3}
        d="M272.57,389.68v61.64h30.82a19,19,0,0,0,19-19V389.68Z"
        fill="#83000d"
        /* fill="#931c25" */
      />
      <path
        id={styles.forma4}
        d="M234.5,389.68a11.78,11.78,0,0,0-11.78,11.79v49.85h49.85V389.68Z"
        fill="#ff1001"
        /* fill="#e42919" */
      />
      <path
        id={styles.forma5}
        d="M222.72,451.32V513h30.81a19,19,0,0,0,19-19v-42.6Z"
        transform="translate(-222.72 -328.04)"
        fill="#000000"
        /* fill="#1d1d1b" */
      />
    </svg>
  );
}
