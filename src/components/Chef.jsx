import Image from "next/image";
import Spoon from "@/components/Spoon";
import style from "@/styles/Chef.module.scss";
import Pic from "@/assets/rc.png";

export default function Chef() {
  return (
    <section className={style.chef}>
      <figure className={style.imgContainer}>
        <div className={style.box}></div>
        <div className={style.box}></div>
        <Image src={Pic} alt="Glass Drink Image" fill={true} />
      </figure>
      <article className={style.content}>
        <h5>Chef&quot;s Word</h5>
        <Spoon className={style.icon} />
        <h2>What We Believe In</h2>
        <q>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, quae
          corporis? Quae natus sapiente dicta expedita delectus debitis quo
          cupiditate voluptates non praesentium velit quibusdam, sunt amet
          officiis quod dolorem?
        </q>
        <h3>Kevin Luo</h3>
        <p>Chef & Founder</p>

        <span className={style.sign}>Kevin Luo</span>
      </article>
    </section>
  );
}
