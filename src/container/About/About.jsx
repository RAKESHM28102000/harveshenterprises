import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { images } from '../../constants';
// import { urlFor, client } from '../../client';
const abouts=[{title:'50 years of trust',description:'Into its 50th year, the Harvesh Enterprises brand exemplifies the values of Respect and Trust. These values are reflected in the Harvesh Enterprises Developers mantra of "Customer First".',src:images.construction},
{title:'Unconditional reliability',description:'All Harvesh Enterprises projects have been delivered on time, and in some cases, before time. With a customer-friendly team to support you, wherever, whenever - You can truly rely on us!',src:images.helmetconstruction},
{title:'Impressive track record',description:'With rapid expansion into the real estate sector, Harvesh Enterprises has completed over 5 lac sq. ft. each in Residential and Commercial spaces, with another 1 million sq. ft. under development in each category.',src:images.pointingsketch},
{title:'Spaces created for you',description:'A modern office space or a comfortable home, every Harvesh Enterprises creation combines meticulous planning, fine aesthetics and impeccable execution, with you in mind.',src:images.horizon}]


const About = () => {
  // const [abouts, setAbouts] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';

  //   client.fetch(query).then((data) => {
  //     setAbouts(data);
  //   });
  // }, []);
 

  return (
    <>
      {/* <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2> */}
      <h2 className="head-text">Who We Are</h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.src} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'About Us',
  'app__whitebg',
);