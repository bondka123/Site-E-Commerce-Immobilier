import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import SellerDashboard from './pages/SellerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Recherche from'./pages/Recherche';
import Profil from './pages/Profil';
import Promotions from './pages/Promotions';
function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/seller/dashboard" element={<SellerDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/recherche" element={<Recherche />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/promotions" element={<Promotions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
