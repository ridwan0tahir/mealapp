import Image from "next/image";
import Spoon from "@/components/icons/Spoon";
import Pic from "@/assets/mgg.png";
import style from "@/styles/Award.module.scss";
import AwardConfigs from "@/configs/AwardConfig";
import G from "@/components/icons/G";

export default function Award() {
  return (
    <section className={style.award}>
      <article className={style.content}>
        <h5>Awards & recognition</h5>
        <Spoon className={style.icon} />
        <h2>Our Laurels</h2>
        <ul className={style.awardList}>
          {AwardConfigs.map(({ icon, header, body }, index) => (
            <li key={index} className={style.awardItem}>
              {icon}
              <div className={style.awardDesc}>
                <h5>{header}</h5>
                <p>{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </article>
      <figure className={style.imgContainer}>
        <Image src={Pic} alt="Glass Drink Image" fill={true} />
        <G />
      </figure>
    </section>
  );
}
