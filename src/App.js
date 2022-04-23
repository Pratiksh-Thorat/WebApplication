import {
  Address,
  PageNotFound,
  Register,
  Login,
  Productdetails,
  OrderSuccess,
  Cart,
  Home,
} from "./Pages/index";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./Component/Navbar";
function App() {
  return (
    <div>
      <BrowserRouter basename="/index.html">
        <Navbar />
        <Switch>
          <Route exact path={"/"} component={Home}></Route>
          <Route path={"/login"} component={Login}></Route>
          <Route path={"/register"} component={Register}></Route>
          <Route path={"/cart"} component={Cart}></Route>
          <Route path={"/address"} component={Address}></Route>
          <Route path={"/product-details"} component={Productdetails}></Route>
          <Route path={"/order-success"} component={OrderSuccess}></Route>
          <Route path={"/pagenotfound"} component={PageNotFound}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
