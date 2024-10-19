import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/auth/Layout";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import AdminLayout from "./components/admin-view/AdminLayout";
import Dashboard from "./Pages/admin-view/Dashboard";
import Products from "./Pages/admin-view/Products";
import Orders from "./Pages/admin-view/Orders";
import Features from "./Pages/admin-view/Features";
import ShoppingLayout from "./components/shopping-view/ShoppingLayout";
import NotFound from "./Pages/notfound/NotFound";
import Account from "./Pages/shoppig-view/Account";
import Checkout from "./Pages/shoppig-view/Checkout";
import Home from "./Pages/shoppig-view/Home";
import Listing from "./Pages/shoppig-view/Listing";
import CheckAuth from "./components/common/CheckAuth";
import Unauth from "./Pages/unauth-page/Unauth";

const App = () => {
  const isAuthenticated = false;
  const user = null;

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <Layout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="features" element={<Features />} />
        </Route>
        <Route
          path="shopping"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path="account" element={<Account />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="home" element={<Home />} />
          <Route path="Lists" element={<Listing />} />
        </Route>
        <Route path="unauth-page" element={<Unauth />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default App;
