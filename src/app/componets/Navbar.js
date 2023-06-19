"use client";
import Link from "next/link";
import styles from "../../../public/Navbar.module.css";
import { useRouter } from "next/navigation";
import Search from "../componets/Search";

function Navbar() {
  const router = useRouter();

  const handleSearchClick = (e) => {
    e.preventDefault();
    router.push("/search");
  };

  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <a href="/search" onClick={handleSearchClick}>
            Búsqueda de restaurantes
          </a>
        </li>
        <li>
          <Link href="/nuevo">Nuevo restaurante</Link>
        </li>
      </ul>
      <Search />
    </nav>
  );
}

export default Navbar;
