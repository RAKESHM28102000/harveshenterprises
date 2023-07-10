import React from 'react';
import {BsTelegram, BsTwitter, BsLinkedin } from 'react-icons/bs';
// import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href='https://www.linkedin.com/in/' target='blank' ><BsLinkedin/></a> 
    </div>
    <div>
    <a href='https://www.linkedin.com/in/' target='blank' ><BsTwitter /></a>
    </div>
    <div>
    <a href='https://www.linkedin.com/in/' target='blank' ><BsTelegram/></a>
    </div>
  </div>
);

export default SocialMedia;