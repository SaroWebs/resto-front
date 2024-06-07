import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import HomeLayout from "./layouts/HomeLayout";
import Test from "./test";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="c/:id" element={<Products />} />
        <Route path="p/:id" element={<Product />} />
        <Route path="cart" element={<Cart/>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
