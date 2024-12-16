import { useState } from "react";
import Button from "../button/Button";
import styles from "./MemberShip.module.css";
import Modal from "../modal/Modal";
import headerImg from "../../assets/medlem.jpg";
import PageHeader from "../pageHeader/PageHeader";

const MemberShip = () => {
  const [inputName, setInputName] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputText, setInputText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleNameChange = (event) => {
    setInputName(event.target.value);
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleTextChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://legekrogen.webmcdm.dk/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: inputName,
          email: inputValue,
          message: inputText,
        }),
      });
      const result = await response.json();
      console.log(result);

      if (result.created) {
        openModal();
      }
      setInputValue("");
    } catch (error) {
      console.error("Fejl ved tilmelding:", error.message);
    }
  };

  return (
    <>
      <PageHeader
        headerImg={headerImg}
        title="Bliv medlem af vores"
        subTitle="KUNDEKLUB"
        text="og få eksklusive nyheder før alle andre"
        addTextBg={true} // Tilføjer baggrundsfarve til teksten
      />
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="name"
          placeholder="Fulde navn"
          value={inputName}
          onChange={handleNameChange}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={inputValue}
          onChange={handleInputChange}
          required
        />

        <textarea
          placeholder="Hvem Køber du legetøj til?"
          cols="30"
          rows="10"
          onChange={handleTextChange}
        ></textarea>
        <Button buttonText="BLIV MEDLEM NU!" type="submit" value={inputText} />
      </form>

      {isModalOpen && (
        <Modal>
          <h2>Tak {inputName}!</h2>
          <p>Vi er så glade for at du vil være en del af vores kundeklub</p>
          <p>
            Tag et kig på din indbakke. Vi har givet dig fri fragt på din næste
            ordre.
          </p>
        </Modal>
      )}
    </>
  );
};
export default MemberShip;
