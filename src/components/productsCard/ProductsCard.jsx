import { Link } from "react-router-dom";
import Discount from "../discount/Discount";
import styles from "./productsCard.module.css";

const ProductsCard = ({ product, cardStyle }) => {
  return (
    <div className={`${styles.productCard} ${styles[cardStyle] || ""}`}>
      <figure className={styles.box}>
        <Link to={`/products/${product._id}`}>
          <img
            className={styles.image}
            src={product.image}
            alt={product.title}
          />
          <Discount discount={product?.discountInPercent} />
        </Link>
        <div className={styles.info}>
          <h3>{product.title}</h3>
          <h4>{product.description}</h4>
          <h2>{product.price} kr</h2>
        </div>
      </figure>
    </div>
  );
};

export default ProductsCard;
