import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "react-toastify/dist/ReactToastify.css";

// components
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
// pages
import Homepage from "./pages/Homepage";
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
      <div style={{ borderBottom: "1px solid #f1f1f1" }}>
        <Header />
        <Navbar />
        <CSSTransition
          in={isOpen}
          nodeRef={nodeRef}
          timeout={100}
          classNames="alert"
          unmountOnExit
        >
          <MobileNav innerRef={nodeRef} />
        </CSSTransition>
      </div>
      <main style={{ flexGrow: 1, padding: "0" }}>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Router>
        <BasicLayout>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/category" element={<Category />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/wishlist" element={<Shop />} />
            <Route exact path="/account" element={<Account />} />
            <Route exact path="/shop/:slug" element={<ProductDetails />} />
            <Route exact path="/account/login" element={<Login />} />
            <Route exact path="/account/register" element={<Register />} />
            <Route path="*" element={<Homepage />} />
          </Routes>
        </BasicLayout>
      </Router>
    </div>
  );
};

export default App;
