import AboutPage from "../pages/about/about";
import HomePage from "../pages/home/home";
import Todos from "../pages/todos/todos";

// import Header from "../components/header/header";
import Header from "../features/header/Header";
import Footer from "../components/footer/footer";

import { Route, Routes } from "react-router-dom";
import CounterPage from "../pages/counter/counter-page";
import CartPage from "../pages/cart/cart";
import PostsPage from "../pages/posts/postsPage";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { headerActions } from "../features/header/header-slice";
const App = () => {

  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(headerActions.toggle_isTopMenuOpen());
  }, [pathname, dispatch]);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="*" element={<div>not found</div>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
