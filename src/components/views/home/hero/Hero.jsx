import Image from "next/image";
import Spoon from "@/components/icons/Spoon";
import Pic from "@/assets/khloe.png";
import style from "@/components/views/home/hero/Hero.module.scss";

export default function Hero() {
  return (
    <section className={style.hero}>
      <article className={style.content}>
        <h5>Chase The New Flavour</h5>
        <Spoon className={style.icon} />
        <h2>The Key To Fine Dining</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ab
          dolorum hic minima recusandae temporibus delectus quidem quae
          consectetur.
        </p>
        <button className={style.btn}>Explore Menu</button>
      </article>
      <figure className={style.imgContainer}>
        <div className={style.box}></div>
        <div className={style.box}></div>
        <Image src={Pic} alt="Glass Drink Image" fill={true} />
      </figure>
    </section>
  );
}
