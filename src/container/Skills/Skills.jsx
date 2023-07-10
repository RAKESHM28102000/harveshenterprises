import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import { Tooltip } from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import './Skills.scss';


const Skills = () => {
  const skillset=[{name:"home designing",bgColor:"white",icon:images.construction},
  {name:"painting",bgColor:"white",icon:images.helmetconstruction},
  {name:"title fitting",bgColor:"white",icon:images.construction},
  {name:"other",bgColor:"white",icon:images.pointingsketch},
  {name:"sand",bgColor:"white",icon:images.pointingsketch}];

  const experienceSet=[{year:"2022",works:[{name:"construction",company:"harvesh",desc:"All kind of construction work as done"}]},
  {year:"2022",works:[{name:"construction",company:"harvesh",desc:"All kind of construction work as done"}]},
  {year:"2022",works:[{name:"construction",company:"harvesh",desc:"All kind of construction work as done"}]},
 ];
  
  const [experiences, setExperiences] = useState(experienceSet);
  const [skills, setSkills] = useState(skillset);

  // useEffect(() => {
  //   const query = '*[_type == "experiences"]';
  //   const skillsQuery = '*[_type == "skills"]';

  //   client.fetch(query).then((data) => {
  //     setExperiences(data);
  //   });

  //   client.fetch(skillsQuery).then((data) => {
  //     setSkills(data);
  //   });
  // }, []);

  return (
    <>
      <h2 className="head-text">Famous Works</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences?.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience?.works?.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      // data-tip
                      // data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                      <p className="p-text"> {work.desc}</p>
                    </motion.div>
                    {/* <Tooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </Tooltip> */}
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'Partner With Us',
  'app__whitebg',
);