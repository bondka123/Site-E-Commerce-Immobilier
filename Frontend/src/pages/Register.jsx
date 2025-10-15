import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Appeler API register
    console.log({ name, email, password });
    navigate('/login');
  };

  return (
    <div className="container col-md-4">
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nom :</label>
          <input type="text" className="form-control" value={name}
            onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Email :</label>
          <input type="email" className="form-control" value={email}
            onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Mot de passe :</label>
          <input type="password" className="form-control" value={password}
            onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-success">S’inscrire</button>
      </form>
    </div>
  );
}

export default Register;
