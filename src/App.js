import React, { useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "react-toastify/dist/ReactToastify.css";

// components
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
// pages
import Homepage from "./pages/Homepage";
import Catalogue from "./pages/Catalogue";
import Category from "./pages/Category";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Register from "./pages/Register";
import MobileNav from "./Components/MobileNav";
import { useAtom } from "jotai";
import { mobileNavVisible } from "./atoms/UIAtoms";
import { currentUser } from "./atoms/UserAtoms";
import { getMe } from "./services/UserServices";
import Wishlist from "./pages/Wishlist";
import Topper from "./Components/Header/Components/Topper";
import PriceList from "./pages/PriceList";

const BasicLayout = ({ children }) => {
  const [isOpen] = useAtom(mobileNavVisible);
  const [userDetails, setUserDetails] = useAtom(currentUser);
  useEffect(() => {
    getMe()
      .then((response) => {
        setUserDetails(response?.data);
      })
      .catch(() => {
        setUserDetails({});
      });
  }, []);
  const nodeRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Topper />
      <div className="primary_header pb-4">
        {/* <div style={{ position: "sticky", top: "0" }}> */}
        <Header />
        {/* <Navbar /> */}
        {/* </div> */}
        {/* <CSSTransition
          in={isOpen}
          nodeRef={nodeRef}
          timeout={100}
          classNames="alert"
          unmountOnExit
        >
          <MobileNav innerRef={nodeRef} />
        </CSSTransition> */}
      </div>
      <main style={{ flexGrow: 1, padding: "0" }}>{children}</main>
      <Footer />
    </div>
  );
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <BasicLayout>
          <Routes>
            <Route exact path="/" element={<Catalogue />} />
            {/* <Route exact path="/" element={<Homepage />} />
            <Route exact path="/catalogue" element={<Catalogue />} />
            <Route exact path="/price-list" element={<PriceList />} />
            <Route exact path="/category" element={<Category />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/wishlist" element={<Wishlist />} />
            <Route exact path="/account" element={<Account />} />
            <Route exact path="/shop/:slug" element={<ProductDetails />} />
            <Route exact path="/account/login" element={<Login />} />
            <Route exact path="/account/register" element={<Register />} />
            <Route path="*" element={<Homepage />} /> */}
          </Routes>
        </BasicLayout>
      </Router>
    </div>
  );
};

export default App;
