import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  // State pour stocker les données de formulaire
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Fonction pour mettre à jour les données de formulaire lors de la saisie
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Envoi des données de connexion au backend
      const response = await fetch('http://localhost:4003/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      // Gestion de la réponse du backend
      if (response.ok) {
        // Redirection vers une autre page ou autre action
        console.log('User logged in successfully');
      } else {
        // Affichage d'un message d'erreur ou autre gestion
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className="bg-light py-3 py-md-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <div className="card border border-light-subtle rounded-3 shadow-sm">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <h2 className="fs-6 fw-normal text-center text-secondary mb-4">Sign in to your account</h2>
                <form onSubmit={handleSubmit}>
                  <div className="row gy-2 overflow-hidden">
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" required onChange={handleChange} />
                        <label htmlFor="email" className="form-label">Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input type="password" className="form-control" name="password" id="password" placeholder="Password" required onChange={handleChange} />
                        <label htmlFor="password" className="form-label">Password</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-grid my-3">
                        <button className="btn btn-primary btn-lg" type="submit">Log in</button>
                      </div>
                    </div>
                    <div className="col-12">
                      <p className="m-0 text-secondary text-center">Don't have an account? 
                      <Link to="/register" className="link-primary text-decoration-none"> Sign up</Link></p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
