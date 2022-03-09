import profilePhoto from "../../assets/profile.jpg";
import NavBar from "../NavBar";

import styles from "./index.module.css";

const Header = () => (
  <div className={styles.container}>
    <header>
      <img src={profilePhoto} alt="" />
      <h1>Richard Rodrigues</h1>
    </header>
    <NavBar />
  </div>
);

export default Header;