import Image from "next/image";
import Pic from "@/assets/jason.png";
import style from "@/styles/Video.module.scss";

export default function Video() {
  return (
    <section className={style.video}>
      <figure className={style.imgContainer}>
        <Image src={Pic} alt="Glass Drink Image" fill={true} />
      </figure>
    </section>
  );
}
