import styles from "../feedBack/feedBack.module.css";
const FeedBack = () => {
  return (
    <article className={styles.feedback}>
      <h3>Vores Kunder</h3>
      <h2>UDTALER</h2>
      <div className={styles.customFeedback}>
        <p>
          “Pakken kom dagen efter jeg bestilte. Der blev jeg positivt
          overrasket, da der står på deres hjemmeside at leveringstiden er 2-4
          hverdage. Og min lille Hugo elsker sin nye træhest.”
        </p>
        <h4>- Heidi, mor til Hugo på 3 år</h4>

        <p>
          “Jeg fik varen tilsendt i den forkerte farve, men da jeg kontaktede
          Legekrogens kundeservice, var de meget hurtige til at sende mig den
          rigtige farve. Jeg fik endda en gratis slikpose med. Det var meget
          lækkert”
        </p>
        <h4>- Omar, onkel til Anton på 11 år</h4>

        <p>
          “Når jeg skal bestille julegaver til alle mine 14 børnebørn, er det
          næsten en umulig opgave. Mine døtre har meget høje krav, når det
          kommer til legetøj til deres børn. Jeg tør næsten ikke købe noget. Men
          efter min gode ven Lars tippede mig om Legekrogen.dk, har jeg ikke
          længere problemer med at købe de perfekte julegaver. Tak til
          Legekrogen. Og Lars”
        </p>
        <h4>- Karsten Hansen, Morfar</h4>
      </div>
    </article>
  );
};
export default FeedBack;
