import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import TV from "./components/TV/TV";
import Download from "./components/Download/Download";
import Kids from "./components/Kids/Kids";
import Watch from "./components/Watch/Watch";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

import Login from "./pages/Login/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Header />
          <Hero />
          <TV />
          <Download />
          <Watch />
          <Kids />
          <FAQ />
          <Footer />
        </Route>
        <Route path="/auth" exact>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
