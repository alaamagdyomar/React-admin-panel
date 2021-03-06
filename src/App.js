import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar.jsx';
import './app.css'
import Home from './pages/home/Home';
import UserList from './pages/userList/userList.jsx';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product.jsx';
import NewProduct from './pages/newProduct/NewProduct.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router className="App">
          <Topbar/>
          <div className="container">
              <Sidebar />
              <Switch>
                     <Route exact path="/">
                        <Home/>
                     </Route>
                     <Route path="/users">
                        <UserList/>
                     </Route>
                     <Route path="/user/:userId">
                        <User/>
                     </Route>
                     <Route path="/newUser">
                        <NewUser/>
                     </Route>
                     <Route path="/products">
                        <ProductList />
                        </Route>
                     <Route path="/product/:productId">
                        <Product />
                     </Route>
                     <Route path="/newproduct">
                        <NewProduct />
                     </Route>
              </Switch>
          </div>
    </Router>
  );
}

export default App;
