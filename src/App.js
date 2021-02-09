import { Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shoppage/shoppage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/" component={Homepage} />
        <Homepage />
      </Switch>
    </div>
  );
}

export default App;
