import Link from "next/link";
import PropTypes from "prop-types";
import style from "@/styles/Header.module.scss";
import NavConfigs from "@/configs/NavConfig";

export default function Header() {
  const { MainNavConfigs, OtherNavConfigs } = NavConfigs;

  return (
    <header className={style.header}>
      <nav className={style.navbar}>
        <Link href="/" className={style.logo}>
          GERICHT
        </Link>

        <ul className={style.mainNavList}>
          {MainNavConfigs.map(({ name, href }) => (
            <li key={href} className={style.navItem}>
              <Link href={href} className={style.navLink}>
                {name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className={style.otherNavList}>
          {OtherNavConfigs.map(({ name, href }) => (
            <li key={href} className={style.navItem}>
              <Link href={href} className={style.navLink}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {};
