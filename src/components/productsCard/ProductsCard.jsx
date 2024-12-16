import styles from "./productsCard.module.css";

const ProductsCard = ({ product, cardStyle }) => {
  return (
    <div className={`${styles.productCard} ${styles[cardStyle] || ""}`}>
      <figure className={styles.box}>
        <img className={styles.image} src={product.image} alt={product.title} />
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
