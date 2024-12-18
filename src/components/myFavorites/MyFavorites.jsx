import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import styles from "./myFavorites.module.css";
import ProductsCard from "../productsCard/ProductsCard";
import usefetchProducts from "../../hooks/useFetchProducts";
import PageHeader from "../pageHeader/PageHeader";
import headerImg from "../../assets/produkter.jpg";

const MyFavorites = () => {
  const [favorites] = useLocalStorage("Favorites", []);
  const { products } = usefetchProducts();
  const [, setProduct] = useState([]);
  // error varibal holder fejlbeskeder, hvis noget går galt under datahentning.
  // seterror en en funktion, der opdater error. hvis der opstå en fejl vil vi bruge denne funktion til at gemme fejlinformationer i error.
  // error bliver initaliseret med null, fordi der er ingen fjel i starten
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      //Henter data fra API (Laver en GET-anmodning til URL'en)
      //dvs. den beder servern om at sende data om produkter
      const response = await fetch("https://legekrogen.webmcdm.dk/products");
      const data = await response.json();
      console.log(data);
      setProduct(data.product);
    } catch (error) {
      //hvis der opstår en fejl, opdateres error med fejlinforamtion ved hjælp af setError(error.message);
      setError(error.message);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const favoriteProducts = products.filter((products) =>
    favorites.includes(products._id)
  );

  return (
    <>
      <PageHeader
        headerImg={headerImg}
        title="Din Favoritter"
        addTextBg={true}
      />
      <section className={styles.MyFavorites}>
        {favoriteProducts?.map((product) => (
          //her sendes hele produkt-objektet som en prop til ProductsCard
          <ProductsCard key={product._id} product={product} />
        ))}
      </section>
    </>
  );
};

export default MyFavorites;
