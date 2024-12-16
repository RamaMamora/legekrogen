import PageHeader from "../components/pageHeader/PageHeader";
import headerImg from "../assets/forsiden.jpg";
import SectionHeader from "../components/sectionHeader/SectionHeader";
import FeedBack from "../components/feedBack/FeedBack";
import Newsletter from "../components/newsletter/Newsletter";
import Recommended from "../components/recommended/Recommended";
import Discount from "../components/discount/Discount";

/* import { useLocation } from "react-router-dom"; */

const Home = () => {
  /*  const isHomePage = path:'/'  */
  return (
    <article>
      <PageHeader
        headerImg={headerImg}
        title="At lege er at leve"
        text="Her hos os har vi et stort udvalg af legetøj i høj kvalitet"
        isHomePage={true} //bagrundsfarve aktiveres
      />
      <SectionHeader title="Et udpluk af vores" text="LEGETØJ" />
      <Recommended />

      <FeedBack />
      <Newsletter />
    </article>
  );
};
export default Home;
