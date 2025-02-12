import React from 'react'
import { FaBars } from 'react-icons/fa'
import Logo from './Logo'
const Navbar = () => {
  return (
     <nav className="navbar navbar-expand-lg">
       
 <div className='container'>
 <Logo/>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="#">Features</a>
      <a className="nav-item nav-link" href="#">Pricing</a>
    </div>
  </div>
  <div className='d-flex' role='search'>
    <button className='btn btn-sm btn-outline-light'>Login</button>
    <button className='btn btn-sm btn-outline-light mx-1'>Logout</button>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <FaBars color='white'/>
  </button>
  </div>
  </div>
</nav>
  )
}

export default Navbar
