import Image from "next/image";
import Spoon from "@/components/icons/Spoon";
import Pic from "@/assets/knife.png";
import style from "@/components/views/home/about/About.module.scss";

export default function About() {
  return (
    <section className={style.about}>
      <article className={style.contentLeft}>
        <h2>About Us</h2>
        <Spoon className={style.icon} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          repellat ullam tenetur minus. Sapiente illum blanditiis inventore,
          tempora perspiciatis asperiores corpori.
        </p>
        <button className={style.btn}>Know More</button>
      </article>
      <figure className={style.imgContainer}>
        <Image src={Pic} alt="Glass Drink Image" fill={true} />
      </figure>
      <article className={style.contentRight}>
        <h2>Our History</h2>
        <Spoon className={style.icon} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          repellat ullam tenetur minus. Sapiente illum blanditiis inventore,
          tempora perspiciatis asperiores corpori.
        </p>
        <button className={style.btn}>Know More</button>
      </article>
    </section>
  );
}
