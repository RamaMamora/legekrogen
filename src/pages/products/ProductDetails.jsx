import { useParams } from "react-router-dom";
import PageHeader from "../../components/pageHeader/PageHeader";
import styles from "../products/productDetails.module.css";
import usefetchProducts from "../../hooks/useFetchProducts";
import headerImg from "../../assets/forsiden.jpg";
import Discount from "../../components/discount/Discount";

const ProductDetails = () => {
  const { products } = usefetchProducts();
  const { _id } = useParams();
  const product = products.find((item) => item._id === _id);

  if (!product) {
    return <p>Produkt detaljer ikke fundet.</p>;
  }

  return (
    <>
      <PageHeader headerImg={headerImg} />
      <article className={styles.detailsProduct}>
        {/* Billedet og rabatmærket */}
        <div className={styles.productContent}>
          <div className={styles.imageWrapper}>
            <img src={product.image} alt={product.title} />
            <Discount discount={product?.discountInPercent} />
          </div>
        </div>

        {/* Titel, beskrivelse og pris */}
        <div className={styles.productInfo}>
          <h2>{product.title}</h2>
          <div className={styles.productDescription}>
            <p>{product.description}</p>
          </div>
          <div className={styles.price}>
            <p>Price: {product.price}kr.</p>
          </div>
        </div>
      </article>
    </>
  );
};

export default ProductDetails;
