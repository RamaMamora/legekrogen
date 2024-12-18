import { useParams } from "react-router-dom";
import PageHeader from "../../components/pageHeader/PageHeader";
import styles from "../products/productDetails.module.css";
import usefetchProducts from "../../hooks/useFetchProducts";
import headerImg from "../../assets/forsiden.jpg";
import Discount from "../../components/discount/Discount";

const ProductDetails = () => {
  const { products } = usefetchProducts(); // Henter produktdata fra hooken
  const { _id } = useParams(); // Henter produktets id fra URL'en via useParams
  const product = products.find((item) => item._id === _id); // Finder det specifikke produkt baseret på id'et fra URL'en

  // Hvis produktet ikke findes, vis en fejlbesked
  if (!product) {
    return <p>Produkt detaljer ikke fundet.</p>;
  }

  return (
    <>
      <PageHeader
        headerImg={headerImg}
        title="Informationer om produktet"
        addTextBg={true}
      />
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
            <p>
              Pris: <span>{product.price}kr.</span>
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default ProductDetails;
