import profilePhoto from "../../assets/profile.jpg";

import styles from "./index.module.css";

const Header = () => (
  <div className={styles.container}>
    <header>
      <img src={profilePhoto} alt="" />
      <div>
        <h1>Richard Rodrigues</h1>
        <h2>Developer | Technology enthusiast</h2>
      </div>
    </header>
  </div>
);

export default Header;
