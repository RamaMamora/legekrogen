import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/pageHeader/PageHeader";
import styles from "../products/productDetails.module.css";

const ProductDetails = () => {
  const { _id } = useParams();

  const [product, setProduct] = useState(null);
  const fetchProductsById = async (_id) => {
    setIsLoading(true);
    const response = await fetch(
      `https://legekrogen.webmcdm.dk/products/${_id}`
    );
    const data = await response.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    fetchProductsById(_id);
  }, [_id]);
  console.log(product);
  return (
    <>
      <article className={styles.detailsProduct}>
        {/*   <PageHeader headerImg={headerImg} /> */}
        <div className={styles.productContent}>
          <img src={product.image} alt={product.title} />
          <Discount discount={product?.discountInPercent} />
        </div>
        <h2>{product.title}</h2>
        <div className={styles.productDescription}>
          <p>{product.description}</p>
        </div>
        <div className={styles.price}>
          <p> Price {product.price}kr.</p>
        </div>
      </article>
    </>
  );
};

export default ProductDetails;
