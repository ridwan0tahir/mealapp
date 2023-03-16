import Image from "next/image";
import { Fragment } from "react";
import Spoon from "@/components/icons/Spoon";
import Pic from "@/assets/shaker.png";
import MenuConfigs from "@/configs/MenuConfig";
import style from "@/components/views/home/menu//Menu.module.scss";

export default function Menu() {
  const { BeerConfigs, CocktailConfigs } = MenuConfigs;

  return (
    <section className={style.menu}>
      <article className={style.header}>
        <h5>Menu that fits you palatte</h5>
        <Spoon className={style.icon} />
        <h2>Today&apos;s Special</h2>
      </article>
      <table className={style.menuTableLeft}>
        <caption>Wine & Beer</caption>
        <tbody>
          {BeerConfigs.map(({ name, type, price }, index) => (
            <Fragment key={index}>
              <tr>
                <td>{name}</td>
                <td>{`$${price}`}</td>
              </tr>
              <tr>
                <td>{type}</td>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
      <figure className={style.imgContainer}>
        <Image src={Pic} alt="Glass Drink Image" fill={true} />
      </figure>
      <table className={style.menuTableRight}>
        <caption>Cocktails</caption>
        <tbody>
          {CocktailConfigs.map(({ name, type, price }, index) => (
            <Fragment key={index}>
              <tr>
                <td>{name}</td>
                <td>{`$${price}`}</td>
              </tr>
              <tr>
                <td>{type}</td>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
      <button className={style.btn}>Know More</button>
    </section>
  );
}
