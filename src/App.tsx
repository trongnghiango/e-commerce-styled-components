import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProductListPage from './pages/ProductListPage';
import ProductPage from './pages/ProductPage';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import CartPage from './pages/CartPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="product-list" element={<ProductListPage />} />
      <Route path="product" element={<ProductPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
