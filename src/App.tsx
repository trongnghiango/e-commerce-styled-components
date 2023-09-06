import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProductListPage from './pages/ProductListPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="product-list" element={<ProductListPage />} />
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
