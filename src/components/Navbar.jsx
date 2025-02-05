import React from 'react';
import { useNavigate } from 'react-router-dom';
import avatar from '../images/avatar.jpg';

export default function NavBar() {
  const navigate = useNavigate();
  const username = localStorage.getItem('email'); 

  const handleLogout = () => {
    localStorage.removeItem('email');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
       
        <a className="navbar-brand" href="#">Perso Center</a>
        
     
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            {username ? (
              <>
                <li className="nav-item">
                  <span className="nav-link">Welcome, {username}</span>
                </li>
                <li className="nav-item d-flex align-items-center">
                  <div className="avatar" style={{ display: 'inline-block', marginRight: '10px' }}>
                    <img src={avatar} alt="User Avatar" style={{ width: '40px', borderRadius: '50%' }} />
                  </div>
                  <button className="btn btn-secondary" onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/login">Login</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
