import styles from "./footer.module.css";
import logoIcon from "../../assets/gym1.png";
import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.footer}>
      <div className={styles.footer_image}>
        <h2>
          Subcribed and Follow me on 
          <a
            href="https://m.youtube.com/channel/UCCtPZSyh4FwBptrLOySz5mQ?fbclid=PAAaYo3Eu1v46i-9VA4a0XO43ThQjGJV2i-BAIn8lnJG3KSgVOlVcgtKBCGrY">
              YouTube
          </a>
        </h2>
      </div>
      <div className={`${styles.footer_content} container `}>
        <div>
          <div className={styles.logo_holder}>
            <img src={logoIcon} alt="Logo Icon" />

            <h3>Dream Fitness Point</h3>
          </div>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable.
          </p>
          <div className={styles.info}>
            <span>Call :+91 9503991870</span>
            <p></p>
            <span>Email :dreamfitness340@gmail.com</span>
            <p></p>
            <span>Location :<a href="https://maps.app.goo.gl/Ug6KHki5PKbkbFE66" >Google Map</a></span>
          </div>
        </div>
        <div>
          <ul>
            <li>Utility Pages</li>
            <li onClick={() => navigate("/calculator")}>BMI Calculator</li>
            <li onClick={() => navigate("/schedule")}>Schedule</li>
            <li onClick={() => navigate("/errorPage")}>404 Page</li>
            <li>Licenses</li>
            <li onClick={() => navigate("/Contact")}>Contact</li>
          </ul>
        </div>
        <div>
          <h3>Newsletter</h3>
          <input type="text" placeholder="Enter Your Email" />
         <button>Subscribe</button>
          <div className={styles.footer_icons}>
            <a
              href="https://www.facebook.com/profile.php?id=100063936709814&mibextid=ZbWKwL">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://instagram.com/dream_fitness_point?igshid=MzRlODBiNWFlZA==" >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://m.youtube.com/channel/UCCtPZSyh4FwBptrLOySz5mQ?fbclid=PAAaYo3Eu1v46i-9VA4a0XO43ThQjGJV2i-BAIn8lnJG3KSgVOlVcgtKBCGrY" >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
