import styles from "../discount/discount.module.css";

const Discount = ({ discount }) => {
  if (!discount) return null;
  return <div className={styles.discountCard}>{discount}%</div>;
};

export default Discount;
