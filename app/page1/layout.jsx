import Link from "next/link";
import Home from "../../components/Home";

//metadata de la seccion
export const metadata = {
  title: "Page1",
};
export default function SubLayout({ children }) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/page1/categorias">Categorias</Link>
          </li>
          <li>
            <Link href="/page1/productos">Productos</Link>
          </li>
        </ul>
      </nav>
      <Home></Home>

      {children}
    </>
  );
}
