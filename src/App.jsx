import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/products/Products";
import Faq from "./pages/Faq";
import Navigation from "./components/Navigation";
import Footer from "./components/footer/Footer";
import MemberShip from "./components/memberShip/MemberShip";
import Shipping from "./components/shipping/Shipping";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/products", element: <Products /> },
    { path: "/faq", element: <Faq /> },
    { path: "/memberShip", element: <MemberShip /> },
  ]);

  return (
    <div>
      <Shipping />
      <Navigation />
      <div>{routes}</div>
      <Footer />
    </div>
  );
}

export default App;
