import profilePhoto from "../../assets/profile.jpg";
import NavBar from "../NavBar";

import styles from "./index.module.css";

const Header = () => (
  <div className={styles.container}>
    <NavBar />
    <header>
      <img src={profilePhoto} alt="" />
      <h1>Richard Rodrigues</h1>
    </header>
  </div>
);

export default Header;
