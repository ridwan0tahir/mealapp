import style from "@/styles/Gallery.module.scss";
import Spoon from "@/components/icons/Spoon";
import Pic1 from "@/assets/cala.png";
import Pic2 from "@/assets/coquet.png";
import Pic3 from "@/assets/blackwell.png";
import Pic4 from "@/assets/tanwar.png";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Gallery() {
  const Images = [{ src: Pic1 }, { src: Pic2 }, { src: Pic3 }, { src: Pic4 }];

  // const [clientX, setClientX] = useState(0);
  // const [scrollX, setScrollX] = useState(0);
  // const [isScrolling, setIsScrolling] = useState(false);
  // const scrollRef = useRef(null);

  // const handleMouseDown = e => {
  //   setIsScrolling(true);
  //   setClientX(e.clientX)
  // }

  // const handleMouseUp = e =>  {
  //   setIsScrolling(false)
  // }

  // const handleMouseMove =e=> {
  //   if(isScrolling && scrollRef.current !== null) {
  //     scrollRef.current.scrollLeft = scrollX + e.clientX - clientX;
  //   }
  // }

  return (
    <section className={style.gallery}>
      <article className={style.content}>
        <h5>Instagram</h5>
        <Spoon className={style.icon} />
        <h2>Photo Gallery</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button className={style.btn}>View More</button>
      </article>
      <ul
        className={style.imageList}
        // onMouseDown={handleMouseDown}
        // onMouseUp={handleMouseUp}
      >
        {Images.map(({ src }, index) => (
          <li key={index} className={style.imageContainer}>
            <Image src={src} alt={"Images"} fill />
          </li>
        ))}
      </ul>
    </section>
  );
}
