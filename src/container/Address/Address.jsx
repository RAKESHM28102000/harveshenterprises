import React from 'react'
import './Address.scss';
function Address() {
  return (
    <div className="container address">
     <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-hrefp">
    <div className="col mb-3">
      <p className="text-body-secondary">© Harvesh Enterprises 2023  </p>
    </div>
    <div className="col mb-3">
      <h5 style={{color:"black"}}>Contact</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2" style={{color:"black"}}>+91-1111111111-OWNER</li>
        <li className="nav-item mb-2" style={{color:"black"}}>+91-222222222-MANAGER</li>
        <li className="nav-item mb-2" style={{color:"black"}}>+91-33333333-MEP</li>
        <li className="nav-item mb-2" style={{color:"black"}}>+91-44444444-Assistant</li>

        </ul>
    </div>

   

    <div className="col mb-3">
      <h5 style={{color:"black"}}>Company</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a className="nav-link new " href="/" >Home</a></li>
        <li className="nav-item mb-2"><a className="nav-link new" href="/about" >About</a></li>
        <li className="nav-item mb-2"><a className="nav-link new" href="/work" >Works</a></li>
        <li className="nav-item mb-2"><a className="nav-link new" href="/project" >Projects</a></li>
        <li className="nav-item mb-2"><a className="nav-link" href="/contact" >Contact</a></li>
      </ul>
    </div>
    <div className="col mb-3">
      <h5 style={{color:"black"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg> ADDRESS</h5>
      <ul className="nav flex-column">
      <li className="nav-item mb-2" style={{color:"black"}}>NO.111,</li>
        <li className="nav-item mb-2" style={{color:"black"}}>tambaram 2nd Street,</li>
        <li className="nav-item mb-2" style={{color:"black"}}>Chennai-00000,</li>
        <li className="nav-item mb-2" style={{color:"black"}}>TamilNadu,India.</li>
    </ul>
    </div>
  </footer>
  <p>Privacy Policy</p>
  <p>* The above mentioned price is the base price of the individual project.</p>
</div>

  )
}

export default Address