import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import AuthService from "./services/auth.service";
import Homepage from "./components/Homepage";
import Thanks from "./components/Thanks";
// import Detailspage from "./components/Detailspage";
import Productspage from "./components/Productspage";

import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import ModeratorDashboard from "./components/ModeratorDashboard";

import ModeratorLogin from "./components/ModeratorLoginPage";
import UserLogin from "./components/UserLoginPage";
import UserSignUp from "./components/UserSignUp";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Profile from "./components/profile.component";

import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";

import AdminProductList from "./component2/AdminControl/product-details";
import ModProductList from "./component2/ModeratorControl/product-details2";
import UserProductList from "./component2/UserControl/product-details3";

import AdminAddProducts from "./component2/AdminControl/add-product";
import ModAddProducts from "./component2/ModeratorControl/add-product2";


import AddOrders from "./component3/UserControl/add-order";
import UserOrderDetails from "./component3/UserControl/order-details2";
import ModeratorOrderDetails from "./component3/ModeratorControl/order-details1";
import AdminOrderDetails from "./component3/AdminControl/order-details";
import AboutUs from "./components/AboutUs";

class App extends Component {
  
  render() {

    return (
      <div>
        <div className="mt-3">
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route path="/user" element={<BoardUser />} />
            <Route path="/mod" element={<BoardModerator />} />
            <Route path="/admin" element={<BoardAdmin />} />

            <Route
              path="/admin/allproduct/update/:id"
              element={<AdminAddProducts />}
            />
            <Route path="/allproduct/update/:id" element={<ModAddProducts />} />
            <Route path="/admin/addproduct" element={<AdminAddProducts />} />
            {/* <Route path="/order" element={<AddOrders/>}/> */}
            {/* <Route path="/login" element={<LoginPage/>}/> */}
            {/* <Route path="/signup" element={<Signup/>}/> */}
            <Route path="/admin/allproduct" element={<AdminProductList />} />
            <Route path="/mod/allproduct" element={<ModProductList />} />
            <Route path="/mod/addproduct" element={<ModAddProducts />} />
            <Route
              path="/mod/allproduct/update/:id"
              element={<ModAddProducts />}
            />
            <Route path="/user/allproduct" element={<UserProductList />} />

            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<Productspage />} />

            <Route path="/admin/login" element={<Login mode="admin" />} />
            <Route path="/admindashboard" element={<AdminDashboard />} />

            <Route path="/moderator/login" element={<Login mode="mod" />} />

            <Route path="/user/login" element={<Login mode="user" />} />
            <Route path="/user/signup" element={<Register />} />
            <Route path="/userdashboard" element={<UserDashboard />} />

            {/* <Route path="/order" element={<AddOrders/>}/>
            <Route path="/admin/allproduct" element={<AdminProductList/>}/> */}

            <Route path="/user/allorder" element={<UserOrderDetails />} />
            <Route path="/user/addorder" element={<AddOrders />} />
            <Route path="/allorder/update/:oid" element={<AddOrders />} />

            <Route path="/admin/allorder" element={<AdminOrderDetails />} />
            <Route
              path="/moderator/allorder"
              element={<ModeratorOrderDetails />}
            />
            <Route path="/moddashboard" element={<ModeratorDashboard />} />

            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/thanks" element={<Thanks />} />
          </Routes>
        </div>

        {/*<AuthVerify logOut={this.logOut}/> */}
      </div>
    );
  }
}

export default App;
