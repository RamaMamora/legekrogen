import { useEffect, useState } from "react";

const usefetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://legekrogen.webmcdm.dk/products");
      const data = await response.json();
      // altid først console.log(data) her for at se
      console.log(data);
      setProducts(data);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  //filterer anbefalinger (recommended)
  let recommended = products.filter((r) => r.recommended === true);
  console.log(recommended);

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, error, recommended };
};
export default usefetchProducts;
