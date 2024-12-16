import PageHeader from "../../components/pageHeader/PageHeader";
import ProductsCard from "../../components/productsCard/ProductsCard";
import usefetchProducts from "../../hooks/useFetchProducts";
import headerImg from "../../assets/produkter.jpg";
import Newsletter from "../../components/newsletter/Newsletter";
import styles from "../products/products.module.css";

const Products = () => {
  const { products } = usefetchProducts();
  console.log(products);
  return (
    <>
      <PageHeader
        headerImg={headerImg}
        title="På udkig efter nyt"
        text="LEGETØJ?"
        addTextBg={true} // Tilføjer baggrundsfarve til teksten
      />

      <div className={styles.products}>
        <h1>Alt vores</h1>
        <p>LEGETØJ</p>
        <div className={styles.productsGrid}>
          {products?.map((product) => (
            <ProductsCard
              key={product._id}
              product={product}
              cardStyle="productsPage"
            />
          ))}
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default Products;
