import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import HomeLayout from "./layouts/HomeLayout";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import UserProfile from "./pages/UserProfile";
import Categories from "./pages/Categories";
import Payment from "./pages/Payment";
import PaymentConfirm from "./pages/PaymentConfirm";
import TrackOrder from "./pages/TrackOrder";

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="categories" element={<Categories/>} />
        <Route path="c/:id" element={<Products />} />
        <Route path="p/:id" element={<Product />} />
        <Route path="cart" element={<Cart/>} />
        <Route path="checkout" element={<Checkout/>} />
        <Route path="payment" element={<Payment/>} />
        <Route path="payment-confirm" element={<PaymentConfirm/>} />
        <Route path="track-order" element={<TrackOrder/>} />
        <Route path="user/profile" element={<UserProfile/>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
