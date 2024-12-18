//Impoter nødvendige biblioteker og komponenter
import { Link } from "react-router-dom"; //Link bruges til at navigaer mellem sider
//react router gør det muligt at oprette flere sider i min app uden at reloade browseren, det gør applikationer hurtigere og mere brugevenlig.
import Discount from "../discount/Discount"; //Importer discount-komponent til at vise rabatter
import styles from "./productsCard.module.css"; // til styling
import { FcLike, FcDislike } from "react-icons/fc"; //hjerteikoner til favoritter
import { useLocalStorage } from "@uidotdev/usehooks"; //hook til håndtering af localStorage

//Product-objekt hentes oprindeligt fra API'et i useFetchProducts.
//I MyFavorites filteres de produkter, der er i favoritter, og de sendes videre som props til ProductsCard.

//ProductsCard-komponent modtager produktdata (product) og til styling (cardstyle) som props
//Props giver mulighed for at sende data fra en forældre-komponent som er MyFavorites til ProductsCard
//Her modtages {products} som er et objekt til at vise produktinformation med f.eks _id, title, price, image
//Props gør komponenten genbrugelig og dynmaisk, fordi man kan sende forskellige product-data
//og styling afhængigt af, hvor komponenten bruges.
//dette gøre koden genanvendelig, da ProductsCard ikke behøver at vide, hvor data kommer fra
//den skal bare have et product- objekt som input

const ProductsCard = ({ product, cardStyle }) => {
  //brugs useLocaalStoarge til at holde styr på favorit-produkter
  const [favorites, setFavorites] = useLocalStorage("Favorites", []);
  //  (product._id) Tjekker om produktet allerede er i favoritter eller ej
  const isFavorite = favorites.includes(product._id);

  // funktion til at håndtere tilføjlse og fjernelse af favoritter
  const handleLike = () => {
    // (product._id bruges til at tilføje eller fjerne produktet fra favoritter med setFavorites)
    setFavorites(
      (prevFavorites) =>
        isFavorite
          ? prevFavorites.filter((fav) => fav !== product._id) // Fjern produktet
          : [...prevFavorites, product._id] // Tilføj produktet
    );
  };

  return (
    <div className={`${styles.productCard} ${styles[cardStyle] || ""}`}>
      <figure className={styles.box}>
        {/* to attributten bestemmer, hvor linket fører hen. */}
        <Link to={`/products/${product._id}`}>
          <img
            className={styles.image}
            src={product.image}
            alt={product.title}
          />
          {/* discount-komponent til visning af rabatter */}
          <Discount discount={product?.discountInPercent} />
        </Link>
        <div className={styles.info}>
          <h3>{product.title}</h3>
          <h4>{product.description}</h4>
          <div className={styles.priceAndIcon}>
            <h2>{product.price} kr</h2>
            {/* Favorit ikon ved siden af prisen */}
            <span onClick={handleLike} className={styles.icon}>
              {isFavorite ? <FcDislike size={30} /> : <FcLike size={30} />}
            </span>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default ProductsCard; // eksporterer komponenten til brug i andre filer
