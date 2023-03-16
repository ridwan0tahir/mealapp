import Image from "next/image";
import Spoon from "@/components/icons/Spoon";
import Pic from "@/assets/popular3.png";
import style from "@/components/views/menu/hero/Hero.module.scss";

export default function Hero() {
  return (
    <section className={style.hero}>
      <article className={style.content}>
        <h2>Burger Generated</h2>
        <Spoon className={style.icon} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          omnis facilis consectetur dicta officiis, perspiciatis molestias!
          Repellat.
        </p>
        <div className={style.btnContainer}>
          <button>Save Recipe</button>
          <button>View Recipe</button>
        </div>
      </article>

      <figure className={style.imgContainer}>
        <Image src={Pic} alt="Glass Drink Image" fill={true} />
      </figure>
    </section>
  );
}
