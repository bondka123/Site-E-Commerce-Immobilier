import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">E-Market</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Accueil</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">Panier</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Aide_FAQ">Aide/FAQ</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Promotions">Promotions</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Recherche">Recherche</Link>
          </li>
          
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/login">Connexion</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">Inscription</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Profil">Profil</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
