import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
  });

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post('http://localhost:4003/register', formData);
          console.log(response.data);
          // Gérer la réponse de l'API (par exemple, rediriger l'utilisateur vers une autre page)
      } catch (error) {
          console.error(error);
          // Gérer les erreurs de l'API (par exemple, afficher un message d'erreur à l'utilisateur)
      }
  };

  return (
      <section className="p-3 p-md-4 p-xl-5">
          <div className="container">
              <div className="row">
                  <div className="col-12 col-md-6 bsb-tpl-bg-platinum">
                      <div className="d-flex flex-column justify-content-between h-100 p-3 p-md-4 p-xl-5">
                          <h3 className="m-0 text-center">Welcome to Event Tickets !</h3>
                          <p className="mb-0">Not a member yet? <a href="#!" className="link-secondary text-decoration-none">Register now</a></p>
                      </div>
                  </div>
                  <div className="col-12 col-md-6 bsb-tpl-bg-lotion">
                      <div className="p-3 p-md-4 p-xl-5">
                          <div className="row">
                              <div className="col-12">
                                  <div className="mb-5">
                                      <h2 className="h3">Register</h2>
                                      <h3 className="fs-6 fw-normal text-secondary m-0">Enter your details to register</h3>
                                  </div>
                              </div>
                          </div>
                          <form onSubmit={handleSubmit}>
                              <div className="row gy-3 gy-md-4 overflow-hidden">
                                  <div className="col-12">
                                      <label htmlFor="firstName" className="form-label">First Name <span className="text-danger">*</span></label>
                                      <input type="text" className="form-control" name="firstName" id="firstName" placeholder="First Name" required onChange={handleChange} />
                                  </div>
                                  <div className="col-12">
                                      <label htmlFor="lastName" className="form-label">Last Name <span className="text-danger">*</span></label>
                                      <input type="text" className="form-control" name="lastName" id="lastName" placeholder="Last Name" required onChange={handleChange} />
                                  </div>
                                  <div className="col-12">
                                      <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                                      <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" required onChange={handleChange} />
                                  </div>
                                  <div className="col-12">
                                      <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                                      <input type="password" className="form-control" name="password" id="password" required onChange={handleChange} />
                                  </div>
                                  <div className="col-12">
                                      <div className="form-check">
                                          <input className="form-check-input" type="checkbox" value="" name="iAgree" id="iAgree" required />
                                          <label className="form-check-label text-secondary" htmlFor="iAgree">
                                              I agree to the <a href="#!" className="link-primary text-decoration-none">terms and conditions</a>
                                          </label>
                                      </div>
                                  </div>
                                  <div className="col-12">
                                      <div className="d-grid">
                                          <button className="btn bsb-btn-xl btn-primary" type="submit">Sign up</button>
                                      </div>
                                  </div>
                              </div>
                          </form>
                          <div className="row">
                              <div className="col-12">
                                  <hr className="mt-5 mb-4 border-secondary-subtle" />
                                  <p className="m-0 text-secondary text-end">Already have an account? <Link to="/login" className="link-primary text-decoration-none">Sign in</Link></p>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-12">
                                  <p className="mt-5 mb-4">Or sign in with</p>
                                  <div className="d-flex gap-3 flex-column flex-xl-row">
                    <a href="#!" className="btn bsb-btn-xl btn-outline-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                      </svg>
                      <span className="ms-2 fs-6">Google</span>
                    </a>
                    <a href="#!" className="btn bsb-btn-xl btn-outline-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                      <span className="ms-2 fs-6">Facebook</span>
                    </a>
                    <a href="#!" className="btn bsb-btn-xl btn-outline-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg>
                      <span className="ms-2 fs-6">Twitter</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
