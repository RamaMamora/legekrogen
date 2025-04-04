import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/products/Products";
import Faq from "./pages/Faq";
import Navigation from "./components/Navigation";
import Footer from "./components/footer/Footer";
import MemberShip from "./components/memberShip/MemberShip";
import Shipping from "./components/shipping/Shipping";
import ProductDetails from "./pages/products/ProductDetails";
import MyFavorites from "./components/myFavorites/MyFavorites";
import CartPage from "./components/cartPage/CartPage";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/products", element: <Products /> },
    { path: "/products/:_id", element: <ProductDetails /> },
    { path: "/faq", element: <Faq /> },
    { path: "/myFavorites", element: <MyFavorites /> },
    { path: "/memberShip", element: <MemberShip /> },
    { path: "/cartPage", element: <CartPage /> },
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
