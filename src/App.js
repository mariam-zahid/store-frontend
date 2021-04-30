import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <header>Header</header>
        <nav>
          Navbar
          <ul>
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/shop" component={Shop} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
