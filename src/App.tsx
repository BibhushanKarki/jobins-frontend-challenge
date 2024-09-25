import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/DashboardPage';
import OrderManagement from './pages/OrderManagementPage';
import Brand from './pages/BrandPage';
import AddProduct from './pages/AddProductPage';
import ProductList from './pages/ProductListPage';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<OrderManagement />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/product-list" element={<ProductList />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
