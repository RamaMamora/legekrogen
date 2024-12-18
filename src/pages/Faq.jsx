import PageHeader from "../components/pageHeader/PageHeader";
import headerImg from "../assets/FAQ.jpg";
import Newsletter from "../components/newsletter/Newsletter";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import styles from "../styles/faq.module.css";

const Faq = () => {
  // useState holder styr på, hvilket spørgsmål der er åbent.
  // Initialværdi er null (alle spørgsmål er lukkede).
  const [openQuestion, setOpenQuestion] = useState(null);

  // Funktion til at åbne/lukke et spørgsmål. Hvis det samme spørgsmål klikkes, lukkes det; ellers åbnes det.
  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  // Data-array med spørgsmål og svar til FAQ
  const faqData = [
    {
      question: "Hvor lang tid er leveringstiden?",
      answer:
        "2-4 hverdage. Det kan tage længere tid op til højtider og helligdage.",
    },
    {
      question:
        "Hvad kan jeg gøre, hvis jeg finder varen billigere et andet sted?",

      answer: (
        <div>
          <p>Vi prismatcher på følgende parametre:</p>
          <ul>
            <li>Prisen skal gælde på handelstidspunktet.</li>
            <li>Varen skal være i samme model, farve og evt. størrelse.</li>
            <li>
              Varen skal være på lager hos konkurrenten på tidspunktet for
              prismatch.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "Hvor lang tid har jeg til at returnere?",
      answer:
        "Vi tilbyder 30 dages retur/bytteret fra den dag, hvor du modtager varerne.",
    },
  ];

  return (
    <>
      {/* Sidehovedet med titel, undertitel og billede */}
      <PageHeader
        headerImg={headerImg}
        title="Har du nogle"
        subTitle="SPØRGSMÅL?"
        text="Måske er de allerede besvaret herunder. Ellers er du altid velkommen til at kontakte os"
        addTextBg={true} // Tilføjer baggrundsfarve til teksten
      />

      <div className={styles.faqContainer}>
        {/* Løkke over alle spørgsmål og svar */}
        {faqData.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            {/* Spørgsmålssektionen, som er klikbar */}
            <div
              className={styles.faqQuestion}
              onClick={() => toggleQuestion(index)} // Klik for at åbne/lukke spørgsmål
            >
              <p>{item.question}</p> {/* Viser spørgsmålet */}
              <p
                className={`${styles.faqIcon} ${
                  openQuestion === index ? styles.open : "" // Tilføjer en klasse, hvis spørgsmålet er åbent
                }`}
              >
                {/* Viser enten caret-up (åben) eller caret-down (lukket) */}
                {openQuestion === index ? <FaCaretUp /> : <FaCaretDown />}
              </p>
            </div>

            {/* Viser svaret kun, hvis spørgsmålet er åbent */}
            {openQuestion === index && (
              <div className={styles.faqAnswer}>{item.answer}</div>
            )}
          </div>
        ))}
      </div>

      <Newsletter />
    </>
  );
};

export default Faq;

/* (openQuestion === index) tjekker om det aktuelle spørgsmål
(index) // er det samme som det spørgsmål, der er gemt i
openQuestion // openquestion holder styer på, hvilket spørgsmål er
åbent */
