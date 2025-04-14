import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

function App() {
 

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About/>} />
        <Route path="Products" element={<Products/>}/>
        <Route path="ProductDetail" element={<ProductDetail/>}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
