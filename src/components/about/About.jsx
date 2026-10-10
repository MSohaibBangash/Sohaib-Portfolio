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
                    Who I am and what I build
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
                    <div className="about-photo">
                        <img
                            src={profileImage}
                            alt="M. Sohaib Khalid"
                            width={300}
                            height={300}
                        />
                    </div>
                </motion.div>
                <motion.div
                    className='about-content'
                    variants={itemVariants}
                >
                    <motion.h5
                        className='about-title'
                        variants={itemVariants}
                    >
                        Hello! I&apos;m M. Sohaib Khalid
                    </motion.h5>
                    <motion.p
                        className='about-para'
                        variants={itemVariants}
                    >
                        Full Stack Developer with 4+ years of experience building scalable web applications using React.js, Next.js, Node.js, Express.js, TypeScript, MongoDB, and SQL. Experienced in enterprise applications, ERP systems, microservices, REST APIs, authentication, Docker, RabbitMQ, Redis, and third-party integrations, with a strong focus on performance, security, and maintainable solutions.
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
                            <p>M. Sohaib Khalid</p>
                        </div>
                        <div className="info">
                            <span>Email:</span>
                            <p>
                                <a href="mailto:sohaibkhalid514@gmail.com">
                                    sohaibkhalid514@gmail.com
                                </a>
                            </p>
                        </div>
                        <div className="info">
                            <span>Location:</span>
                            <p>Islamabad, Pakistan</p>
                        </div>
                        <div className="info">
                            <span>Role:</span>
                            <p>Full Stack Developer</p>
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
                        Download CV
                        <i className="uil uil-download-alt"></i>
                    </motion.a>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default About
