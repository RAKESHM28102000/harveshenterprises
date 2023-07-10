import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
// import { images } from '../../constants';
import './Home.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
  <div className='flexcenter'>
  <motion.div
      whileInView={{ x: [-200, 0], opacity: [0, 1] }}
      transition={{ duration:0.5}}
      className="app__header-info"
    >
     <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>🏠</span>
          <div style={{ marginLeft: 20 }}>
          <h1>HARVESH ENTERPRISES</h1>
          </div>
        </div>
        </div>

    </motion.div>
    <motion.div
      whileInView={{ x: [-200,0], opacity: [0,1] }}
      transition={{ duration:0.7}}
      className="app__header-info"
    >
    <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <h2>WE CONCRETE YOUR DREAMS</h2>
        </div>
        </div>
    </motion.div>

    <motion.div
      whileInView={{ x: [-200, 0], opacity: [0, 1] }}
      transition={{ duration:.9}}
      className="app__header-info"
    >
     <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <h3>SUPPLY OF ALL KIND OF CONSTRUCTION MATERIAL</h3>
        </div>
        </div>
    </motion.div>

    <motion.div
      whileInView={{ x: [-200,0], opacity: [0, 1] }}
      transition={{ duration:1.1}}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
        <h4>WE BUILD YOUR DREAM HOME</h4>
        </div>
        </div>
    
   
    </motion.div>
  </div>

  
  </div>
  
);

export default AppWrap(Header,'Home');