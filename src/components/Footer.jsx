import PropTypes from "prop-types";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { RxTwitterLogo } from "react-icons/rx";
import style from "@/styles/Footer.module.scss";
import Spoon from "@/components/Spoon";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <section className={style.newsletter}>
        <article className={style.intro}>
          <h5>
            Newsletter <Spoon className={style.icon} />
          </h5>
          <h2>Subscribe to Our Newsletter</h2>
          <p>And never miss latest Updates!</p>
        </article>

        <div className={style.subscribe}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
          />
          <button>subscribe</button>
        </div>
      </section>
      <section className={style.info}>
        <article className={style.address}>
          <h4 className={style.header3}>Contact Us</h4>
          <p>9 W 53rd St, New York, NY 10019, USA</p>
          <p>
            +1 212-344-1230 <br />
            +1 212-555-1230
          </p>
        </article>

        <article className={style.business}>
          <h4 className={style.header1}>Gerícht</h4>
          <p>
            &ldquo;The best way to find yourself is to lose yourself in the
            service of others.&rdquo;
          </p>
          <Spoon className={style.icon} />
          <ul className={style.socialList}>
            {[
              { icon: <FaFacebookF size={24} color="#F5EFDB" /> },
              { icon: <RxTwitterLogo size={24} color="#F5EFDB" /> },
              { icon: <FaInstagram size={24} color="#F5EFDB" /> },
            ].map(({ icon }, index) => (
              <li key={index}>{icon}</li>
            ))}
          </ul>
        </article>

        <article className={style.workingHours}>
          <h4 h3 className={style.header3}>
            Working Hours
          </h4>
          <p id="weekdays">
            <label htmlFor="weekdays">Monday-Friday:</label>
            08:00 am -12:00 am
          </p>
          <p id="weekends">
            <label htmlFor="weekends">Saturday-Sunday:</label>
            07:00am -11:00 pm
          </p>
        </article>
      </section>

      <span className={style.addendum}>2023 Developed by Tahir Ridwan</span>
    </footer>
  );
}

Footer.propTypes = {};
