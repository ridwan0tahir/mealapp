import style from "@/styles/Contact.module.scss";
import Spoon from "@/components/icons/Spoon";
import Pic from "@/assets/glassdrink.png";
import Image from "next/image";

export default function Contact() {
  return (
    <section className={style.contact}>
      <article className={style.content}>
        <h5>Contact</h5>
        <Spoon className={style.icon} />
        <h2>Find Us</h2>
        <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <h5>Opening Hours</h5>
        <p>Mon - Fri: 10:00 am - 02:00 am</p>
        <p>Sat - Sun: 10:00 am - 03:00 am</p>
        <button className={style.btn}>Visit Us</button>
      </article>

      <figure className={style.imgContainer}>
        <div className={style.box}></div>
        <div className={style.box}></div>
        <Image src={Pic} alt="Glass Drink Image" fill={true} />
      </figure>
    </section>
  );
}
