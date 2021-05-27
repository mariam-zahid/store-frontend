import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
// pages
import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/account" component={Account} />
            <Route path="/account/login" component={Login} />
            <Route path="/account/register" component={Register} />
            <Route path="*" component={Homepage} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
