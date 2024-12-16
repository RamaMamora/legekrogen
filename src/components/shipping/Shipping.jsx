import { MdLocalShipping } from "react-icons/md";
import styles from "../shipping/shipping.module.css";
const Shipping = () => {
  return (
    <p className={styles.shipping}>
      {" "}
      <MdLocalShipping /> Fri fragt ved køb over 499,-{" "}
    </p>
  );
};
export default Shipping;
