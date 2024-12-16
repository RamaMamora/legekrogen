import Button from "../button/Button";
import styles from "./newsletter.module.css";
import { useNavigate } from "react-router-dom";

const Newsletter = () => {
  const navigate = useNavigate();
  return (
    <article className={styles.newsletterInfo}>
      <p>Kunne du også tænke dig at blive medlem af vores</p>
      <h3>Kundeklub?</h3>
      <Button
        buttonText="BLIV MEDLEM NU!"
        type="submit"
        onClick={() => navigate("/memberShip")}
      />
    </article>
  );
};
export default Newsletter;
