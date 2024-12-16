import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import styles from "./modal.module.css";

const Modal = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.content}>
        {children}
        <Button
          buttonText="TIL FORSIDEN"
          type="submit"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
};

export default Modal;
