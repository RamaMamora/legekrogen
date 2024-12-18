import { useEffect, useState } from "react";

const usefetchProducts = () => {
  //Her har vi to state-variabler, {products} og {error}
  //products variabel opbevarer listen af pordukter, som bliver hentet fra API'et
  // products er initailseret med en tom list ([]), da der er ikke nogen produkter, før API er blevet kaldt og svarer.
  // setproducts er en funktion, der bruges til at opdater products.
  //når vi får deta fra API, bruger vi setProducts til at opdatere denne state med de hentede produkter.

  //products indholder produkterne
  // setproducts opdater disse produkter, når vi henter data fra APIet
  const [products, setProducts] = useState([]);

  //error variabel holder fejlbeskeder, hvis noget går galt under datahentning
  //seterror funktion, bruges til at opdater error. Hvis der opstår en fejl, vil vil bruge denne funktion til at gemme fejlinformation i error.
  // når hooken bliver kaldt, bliver products initaliseret til en tom list ([])
  // og error bliver initaliseret til (null) ingen fejl, fordi der er ikke fejl i starten.
  // Når API-kaldt lykkes, opdateres products med de hentede data ved hjælp af setproducts(data)
  // hvis der opstår en fejl opdateres error med fjelinformation ved hjælp af seterror(error.message. )

  //error gemmer informationer om fejl, hvis der opstår et problem
  //seterror opdaterer værdien af error, hvis der opstår en fejl.
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://legekrogen.webmcdm.dk/products");
      const data = await response.json();
      // altid først console.log(data) her for at se
      console.log(data);
      // Når API-kaldt lykkes, opdateres products med de hentede data ved hjælp af setproducts(data)
      setProducts(data);
    } catch (error) {
      // hvis der opstår en fejl opdateres error med fjelinformation ved hjælp af seterror(error.message.)
      setError(error.message);
      console.log(error);
    }
  };

  //filterer anbefalinger (recommended)
  let recommended = products.filter((r) => r.recommended === true);
  console.log(recommended);

  //useeffect bruges til at hente data fra API, når komponent bliver først rendere, og sørgr for, at API kladet kun sker en gang.
  useEffect(() => {
    // fetchProducts kalder vi i useEffect fetchProducts() som henter data fra API
    fetchProducts();

    // [] det er tom array, betyder at effekten kun bliver kørt en gang,
    // når komponenten bliver rendere første gang
    // hvis der var variabel i arrayet ville effekkten køre igen, hver gang en af disse variabler ændrer sig.
    // da nu arrayet er tom, sikrer det, at fetchProducts kun bliver kaldt en gang, og ikke være gang der sker en opdatering
  }, []);

  return { products, error, recommended };
};
export default usefetchProducts;

// sammenhæng mellem useState og useEffect her er at
//useState bruges til at opbevarer de produkter, vi henter fra API.
//og også til at opbevare eventulle fejl.
//useEffect her sørger for, at fetchProducts bliver kladt, når komponenten først bliver rendere,
// så produkter bliver hentet fra API en gang
