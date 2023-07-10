import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

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
    <motion.div
      whileInView={{ x: [-300, 0], opacity: [0, 1] }}
      transition={{ duration:0.4}}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>🏠</span>
          <div style={{ marginLeft: 20 }}>
            <h1 className="head-text">HARVESH ENTERPRISES</h1>
            <p className="p-text">WE BUILD YOUR DREAM HOME</p>
          </div>
        </div>

        {/* <div className="tag-cmp app__flex">
          <p className="p-text">Web Developer</p>
          <p className="p-text">Freelancer</p>
        </div> */}
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
        
      {/* <img style={{borderRadius:"50%"}} src={images.helmetconstruction} alt="profile_bg" /> */}
      <h1 className="head-text">HARVESH ENTERPRISES</h1>
      <motion.img
        whileInView={{ scale: [0,.5] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.construction, images.helmetconstruction, images.pointingsketch].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img style={{borderRadius:"50%"}} src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header,'Home');