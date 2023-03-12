import Link from "next/link";
import PropTypes from "prop-types";
import style from "@/styles/Header.module.scss";
import NavConfigs from "@/configs/NavConfig";
import { useRouter } from "next/router";
import classNames from "classnames";
import useShowNavbar from "@/hooks/useShowNavbar";

export default function Header() {
  const router = useRouter();
  const { MainNavConfigs, OtherNavConfigs } = NavConfigs;

  const show = useShowNavbar();

  return (
    <header className={classNames(style.header, { [style.headerShow]: show })}>
      <nav className={style.navbar}>
        <Link href="/" className={style.logo}>
          GERICHT
        </Link>

        <ul className={style.mainNavList}>
          {MainNavConfigs.map(({ name, href }) => (
            <li key={href} className={style.navItem}>
              <Link
                href={href}
                className={classNames(style.navLink, {
                  [style.activeLink]: router.asPath === href,
                })}
              >
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
