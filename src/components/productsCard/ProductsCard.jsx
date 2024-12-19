import { Link } from "react-router-dom"; // Link bruges til at navigere mellem sider
// React Router gør det muligt at oprette flere sider i min app uden at reloade browseren.
//Det gør applikationer hurtigere og mere brugervenlige.
import Discount from "../discount/Discount";
import styles from "./productsCard.module.css";
import { FcLike, FcDislike } from "react-icons/fc";
import { useLocalStorage } from "@uidotdev/usehooks";
import Button from "../button/Button";

// Product-objekt hentes oprindeligt fra API'et i useFetchProducts.
// I MyFavorites filteres de produkter, der er i favoritter, og de sendes videre som props til ProductsCard.

// ProductsCard-komponent modtager produktdata (product) og styling (cardStyle) som props.
// Props giver mulighed for at sende data fra en forældre-komponent som MyFavorites til ProductsCard.

// Her modtages {product}, som er et objekt til at vise produktinformation som _id, title, price og image.

// Dette gør koden genanvendelig, da ProductsCard ikke behøver at vide, hvor data kommer fra –
// den skal bare have et product-objekt som input.

const ProductsCard = ({ product, cardStyle }) => {
  // Brug useLocalStorage til at holde styr på favorit-produkter
  const [favorites, setFavorites] = useLocalStorage("Favorites", []);
  // (product._id) Tjekker, om produktet allerede er i favoritter eller ej
  const isFavorite = favorites.includes(product._id);

  // Håndter produkter i kurven ved hjælp af useLocalStorage
  const [cart, setCart] = useLocalStorage("Cart", []);

  // Funktion til at håndtere tilføjelse og fjernelse af favoritter
  const handleLike = () => {
    // (product._id bruges til at tilføje eller fjerne produktet fra favoritter med setFavorites)
    setFavorites(
      (prevFavorites) =>
        isFavorite
          ? prevFavorites.filter((fav) => fav !== product._id) // Fjern produktet
          : [...prevFavorites, product._id] // Tilføj produktet
    );
  };

  // Funktion til at tilføje et produkt til kurven
  const handleBuy = () => {
    setCart((prevCart) => {
      if (prevCart.some((item) => item._id === product._id)) {
        return prevCart; // Hvis produktet allerede er i kurven, gør ingenting
      }
      return [...prevCart, product]; // Tilføj produktet til kurven
    });
  };

  // Render produktkortet
  return (
    <div className={`${styles.productCard} ${styles[cardStyle] || ""}`}>
      <figure className={styles.box}>
        {/* to-attributten bestemmer, hvor linket fører hen */}
        <Link to={`/products/${product._id}`}>
          <img
            className={styles.image}
            src={product.image}
            alt={product.title}
          />
          {/* Discount-komponent til visning af rabatter */}
          <Discount discount={product?.discountInPercent} />
        </Link>

        {/* Information om produktet */}
        <div className={styles.info}>
          <h3>{product.title}</h3>
          <h4>{product.description}</h4>
          <div className={styles.priceAndIcon}>
            <h2>{product.price} kr</h2>
            {/* Favorit-ikon ved siden af prisen */}
            <span onClick={handleLike} className={styles.icon}>
              {isFavorite ? <FcDislike size={30} /> : <FcLike size={30} />}
            </span>
          </div>
          {/* Køb-knap til at tilføje produktet til kurven */}
          <Button buttonText="Køb" type="submit" onClick={handleBuy} />
        </div>
      </figure>
    </div>
  );
};

export default ProductsCard;
