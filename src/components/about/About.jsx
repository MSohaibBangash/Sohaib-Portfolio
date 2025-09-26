import React from 'react'
import { motion } from 'framer-motion'
import profileImage from "../../assets/images/profile.png"
import "./about.css"
const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6
            }
        }
    };

    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className='section container'>
                <motion.h2
                    className="title"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                >
                    About Me
                </motion.h2>
                <motion.p
                    className="sub-title"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.2 }}
                >
                    My Introduction
                </motion.p>
            <motion.div
                className='about-container'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    className='about-img'
                    variants={imageVariants}
                >
                    <svg className="home_blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <mask id="mask0" mask-type="alpha">
                            <rect x="0" y="0" width="200" height="200" rx="20" ry="20" />
                        </mask>
                        <g mask="url(#mask0)">
                            <rect x="0" y="0" width="200" height="200" rx="20" ry="20" />
                            <image className="home_blob-img" x="-25" y="-100" href={profileImage} />
                        </g>
                    </svg>
                </motion.div>
                <motion.div
                    className='about-content'
                    variants={itemVariants}
                >
                    <motion.h5
                        className='about-title'
                        variants={itemVariants}
                    >
                        Hello! I'm M.Sohaib Khalid
                    </motion.h5>
                    <motion.p
                        className='about-para'
                        variants={itemVariants}
                    >
                       Diligent MERN stack developer with a proven track record of nearly 3 years of experience. Experienced in developing, deploying, testing, and troubleshooting web apps, ensuring high performance and seamless user interaction. Passionate about achieving professional development, enhancing my existing skills, and gaining exposure to new technologies
                    </motion.p>
                    <motion.span
                        className='border-line'
                        variants={itemVariants}
                    ></motion.span>
                    <motion.div
                        className="info-content"
                        variants={itemVariants}
                    >
                        <div className="info">
                            <span>Name:</span>
                            <p>M.Sohaib Khalid</p>
                        </div>
                        <div className="info">
                            <span>Email:</span>
                            <p><a>sohaibkhalid514@gmail.com</a></p>
                        </div>
                        <div className="info">
                            <span>Location:</span>
                            <p>Islamabad, Pakistan</p>
                        </div>
                        <div className="info">
                            <span>Availability:</span>
                            <p>Open for work</p>
                        </div>
                    </motion.div>

                    <motion.a
                        href='/Sohaib Resume.pdf'
                        download
                        className="button"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Download Cv
                        <i className="uil uil-download-alt"></i>
                    </motion.a>

                </motion.div>
            </motion.div>
        </div>
    )
}

export default About
