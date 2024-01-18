import Singleproduct from "./Component/Singleproduct/Singleproduct";
import Profile from "./Page/Account/Profile";
import Cart from "./Page/Cart/Cart";
import Home from "./Page/Home";  
import Login from "./Page/Login/Login";
import Product from "./Page/Product/Product"
import Register from "./Page/Register/Register";
function App() {
  return (
    <div className="App">
     <Home/>
     <Singleproduct/>
     <Product/>
     <Cart/>
     <Login/>
      <Register/>
      <Profile/>
    </div>
  );
}

export default App;
