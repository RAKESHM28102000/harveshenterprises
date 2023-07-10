import React, { useState} from 'react';
import { AiFillYoutube, AiFillTwitterCircle } from 'react-icons/ai';
import { motion } from 'framer-motion';

// import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
// import { urlFor, client } from '../../client';
import './Work.scss';

const Work = () => {
  const data=[{title:'HOMES',description:'Youtube clone in Reactjs with MUI-5 and RapidAPI',src:"../image/33910.jpg",linkProject:"https://youtube-rakesh.onrender.com/",tags:['Home'] },
  {title:'READY TO BUILD PLOTS',description:'Movie search app with React,App will be able to search for movies via the OMDB API. ',src:"../image/5138438.jpg",linkProject:"https://moviefinder-c9zg.onrender.com/",tags:['Building'] },
  {title:'Brindavanam',description:'portfolio app using Reactjs and threejs',src:"../image/construction-site.jpg",linkProject:"https://rakeshm-web-developer.onrender.com/",tags:['Home'] },
  {title:'Earth',description:'Social media using React and Mui',src:"../image/construction-workers-sunset.jpg",linkProject:"https://reactapp2023.onrender.com/",tags:['Building'] },
  {title:'Poongavanam',description:'Tanpsycon event website using Ejs,Nodejs,Expressjs,MongoDB.',src:"../image/pointing-sketch.jpg",linkProject:"https://tanpsycon2023.onrender.com",tags:['Home']},
  {title:'Sangamam',description:'Blog website using node.js and express.js and mongodb and ejs.',src:"../image/33910.jpg",linkProject:"https://myblog-r2zp.onrender.com/" ,tags:['Building'] },
  {title:'KVG',description:'Clone of google keep app using Reactjs.',src:"../image/construction-site.jpg",linkProject:"https://reactgooglekeepapp.onrender.com/" ,tags:['Home'] },
  {title:'Flat',description:'Dynamic Frontend, through EJS,which is an NPM package ,Backend built with Nodejs,Database Used: MongoDB Atlas',src:"../image/construction-workers-sunset.jpg",linkProject:"https://todolist-v2-qc8a.onrender.com/" ,tags:['Building'] },]
 
 
  const [works, setWorks] = useState(data);
  const [filterWork, setFilterWork] = useState(data);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  // useEffect(() => {
  //   const query = '*[_type == "works"]';

  //   client.fetch(query).then((data) => {
  //     setWorks(data);
  //     setFilterWork(data);
  //   });
  // }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">Works <span>under </span>progress</h2>

      <div className="app__work-filter">
        {['Home', 'Villa', 'Building', 'Flat', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={work.src} alt={work.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.linkProject} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillYoutube/>
                  </motion.div>
                </a>
                <a href={"https://github.com/"} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillTwitterCircle/>
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'Projects',
  'app__primarybg',
);