import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index,title,icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5 *index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
        options={{
          max: 45,
          scale: 1,
          speed:450
        }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title}
          className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        Introduction</p>
      <h2 className={styles.sectionHeadText}> Overview</h2>
    </motion.div>

    <motion.p
      varients={fadeIn("","", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a dedicated full stack developer ready to bring your digital projects to life. With a blend of front-end elegance and back-end functionality, I create captivating user experiences that surpass expectations. From flawless websites to intuitive web applications, I deliver exceptional results. I value collaboration and communication, ensuring every line of code aligns perfectly with your vision. With an insatiable thirst for innovation, I stay on the cutting edge of technology, leveraging the latest tools and frameworks. As your strategic ally in the digital landscape, I'll help you build a remarkable online presence. Choose me, Manav Hirey, and let's create a digital realm that inspires and captivates.
    </motion.p>
    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>

    </>
  )
}

export default SectionWrapper(About, "about")