import Image from "next/image";
import Spoon from "@/components/icons/Spoon";
import Pic1 from "@/assets/cala.png";
import Pic2 from "@/assets/coquet.png";
import Pic3 from "@/assets/blackwell.png";
import Pic4 from "@/assets/tanwar.png";
import style from "@/components/views/home/gallery/Gallery.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper";

export default function Gallery() {
  const Images = [{ src: Pic1 }, { src: Pic2 }, { src: Pic3 }, { src: Pic4 }];

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
      <Swiper
        className={style.imageList}
        modules={[FreeMode, Mousewheel]}
        spaceBetween={32}
        slidesPerView={"auto"}
        mousewheel
        freeMode
      >
        {Images.map(({ src }, index) => (
          <SwiperSlide key={index} className={style.imageContainer}>
            <Image src={src} alt={"Images"} fill />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <ul
        className={style.imageList}
        // onMouseDown={handleMouseDown}
        // onMouseUp={handleMouseUp}
      >
        
      </ul> */}
    </section>
  );
}
