import styles from "./contact.module.css";

const Third = () => {
  return (
    <div className={`${styles.third}  sections-padding`} data-aos="zoom-in">
      <div className={`${styles.third_content} container`}>
        <div>
          <i className="fa-solid fa-phone"></i>
          <h4>Phone</h4>
          <p>+91 9503991870</p>
        </div>
        <div>
          <i className="fa-solid fa-envelope"></i>
          <h4>Email</h4>
          <p>dreamfitness340@gmail.com</p>
        </div>
        <div>
          <i className="fa-solid fa-location-dot"></i>
          <a href="https://maps.app.goo.gl/Ug6KHki5PKbkbFE66" target="_blank">
          <h4>Location</h4>
          </a>
          <p>Sudarshan English School Road, Dhaniv Baug, Naka, Nala Sopara, Maharashtra 401209</p>
          
        </div>
      </div>
    </div>
  );
};

export default Third;
