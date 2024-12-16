import usefetchProducts from "../../hooks/useFetchProducts";
import ProductsCard from "../productsCard/ProductsCard";
import styles from "../recommended/recommended.module.css";

const Recommended = () => {
  const { recommended } = usefetchProducts();
  return (
    <div className={styles.recommendedcard}>
      {recommended?.map((product) => (
        <ProductsCard
          key={product._id}
          product={product}
          cardStyle="recommended"
        />
      ))}
    </div>
  );
};

export default Recommended;
