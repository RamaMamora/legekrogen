import styles from "./PageHeader.module.css";

const PageHeader = ({
  headerImg,
  title,
  text,
  subTitle,
  customClass = "",
  isHomePage = false,
  addTextBg = false,
}) => {
  return (
    <header
      className={`${styles.header} ${customClass} ${
        isHomePage ? styles.homePage : ""
      }`}
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      <div
        className={`${styles.headerContent} ${
          addTextBg ? styles.headerContentWithBg : ""
        }`}
      >
        <h2>{title}</h2>
        {subTitle && <h1>{subTitle}</h1>}
        {text && <p>{text}</p>}
      </div>
    </header>
  );
};

export default PageHeader;
