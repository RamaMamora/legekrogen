import styles from "./sectionHeader.module.css";
const SectionHeader = ({ title, text }) => {
  return (
    <header className={styles.section}>
      <h2>{title}</h2>
      <p>{text}</p>
    </header>
  );
};
export default SectionHeader;
