import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Certificates from "./pages/Certificates";
import BI from "./pages/BI";
// import Brochures from "./pages/Brochures";
import Products from "./pages/products";
import ProductDetails from "./pages/ProductDetail";

import Gallery from "./pages/Gallery";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";

import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <div className="min-h-screen bg-white text-gray-900">
          <Navbar />

          <ScrollTop />

          <main className="pt-20">
            <Routes>
              {/* Home */}
              <Route path="/" element={<Home />} />

              {/* About */}
              <Route
                path="/about/our-story"
                element={<OurStory />}
              />

              <Route
                path="/about/certificates"
                element={<Certificates />}
              />

              <Route
                path="/about/bi"
                element={<BI />}
              />

              {/* Brochures */}
              {/* <Route
                path="/about/brochures"
                element={<Brochures />}
              /> */}

              {/* Products */}
              <Route
                path="/products"
                element={<Products />}
              />
              <Route
  path="/products/:id"
  element={<ProductDetails />}
/>

              {/* Gallery */}
              <Route
                path="/gallery"
                element={<Gallery />}
              />

              {/* Blogs */}
              <Route
                path="/blogs"
                element={<Blogs />}
              />

              {/* Blog Details */}
              <Route
                path="/blogs/:slug"
                element={<BlogDetails />}
              />

              {/* Contact */}
              <Route
                path="/contact"
                element={<Contact />}
              />
            </Routes>
          </main>

          <Footer />
        </div>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;