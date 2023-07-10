import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

// import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img style={{borderRadius:"50%",width:"40px",height:"40px",marginRight:"10px"}} src='./image/3.png' alt="logo" />
        <h1>HARVESH</h1>
      </div>
      <ul className="app__navbar-links">
        {['Home', 'About Us', 'Projects', 'News & Events','Partner With Us','Contact','Testimonial'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            {/* <div /> */}
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration:0.5, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['Home','About Us','Projects', 'News & Events','Partner With Us','Contact','Testimonial'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;