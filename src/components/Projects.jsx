import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {

  const handleCoDriverClick = () => {
    window.open("https://github.com/acm-projects/CoDriver", "_blank", "noopener,noreferrer");
  };
  
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/MAGIC8BALL.gif')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>iPhone 8-Ball</h3>
          <p>
          Simple lucky 8-Ball Game that generates a random response when the 
          user shakes their device.
          </p>
          <div className="project-tech">
            <span>SwiftUI</span>
            <span>StoryBoard</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={handleCoDriverClick} // <--- ADD THIS onClick HANDLER
          style={{ cursor: 'pointer' }} // <--- ADD THIS STYLE for visual cue
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/CoDriver.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          
          <h3>CoDriver</h3>
          <p>
          A conversational AI assistant mobile app designed to keep you safe, 
          focused, and engaged on the road. It monitors your behavior, provides real-time feedback 
          while driving, and engages conversations about your route.
          </p>
          <div className="project-tech">
            <span>React Native</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/RGBGame-3.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>RGB Color Matcher</h3>
          <p>
          Match a random color, provided by the system, by using Red, Green, 
          and Blue sliders to adjust the RBG hex values to form the color
          </p>
          <div className="project-tech">
            <span>SwiftUI</span>
            <span>StoryBoard</span>
            <span>React Native (Separate)</span>
          </div>
        </motion.div>

        
      </motion.div>
    </motion.section>
  );
};
