import { Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shoppage/shoppage";
import Header from "./components/header/header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/" component={Homepage} />
        <Homepage />
      </Switch>
    </div>
  );
}

export default App;
