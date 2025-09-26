import React from 'react'
import Typewriter from "typewriter-effect";
import { motion } from 'framer-motion'
import './home.css'
import { Link } from 'react-router-dom';
const Home = () => {
    const waUrl = `https://wa.me/${923430669213}?text=${'Hi! I saw your site and would like to chat.'}`;

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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <>
            <section className='section container' >
                <motion.div 
                    className='home_container'
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >

                    <motion.div 
                        className="home_social"
                        variants={itemVariants}
                    >
                        <a href="https://www.linkedin.com/in/m-sohaib-khalid-102b38228/" target="_blank" className="home_social-icon icon">
                            <i className="uil uil-linkedin-alt"></i>
                        </a>
                        <a href={waUrl} target="_blank" className="home_social-icon icon">
                            <i className="uil uil-whatsapp"></i>
                        </a>
                        <a href="https://github.com/MSohaibBangash/" target="_blank" className="home_social-icon icon">
                            <i className="uil uil-github"></i>
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sohaibkhalid514@gmail.com.com" target="_blank" className="home_social-icon icon">
                            <i className="uil uil-envelope"></i>
                        </a>
                    </motion.div>
                    <motion.div 
                        className='home_data'
                        variants={itemVariants}
                    >
                        <motion.h1 
                            className='home_title'
                            variants={itemVariants}
                        >
                            Hi, I'am M.Sohaib
                        </motion.h1>
                        <motion.p 
                            className='home_subtitle'
                            variants={itemVariants}
                        >
                            <Typewriter
                                className=""
                                onInit={(typewriter) => {
                                    typewriter
                                        .changeDelay(80)
                                        .typeString("I'm a MERN Stack Developer")
                                        .pauseFor(1500)
                                        .deleteAll()
                                        .typeString("Code. ")
                                        .pauseFor(500)
                                        .typeString("Create. ")
                                        .pauseFor(500)
                                        .typeString("Innovate.")
                                        .pauseFor(1500)
                                        .start();
                                }}
                                options={{
                                    loop: true
                                }}
                            />
                        </motion.p>
                        <motion.div variants={itemVariants}>
                            <Link to={"/contact"} className="button">Contact Me
                                <i className="uil uil-message"></i>
                            </Link>
                        </motion.div>
                    </motion.div>

                </motion.div>

                {/* <div className='home_scroll flex justify-center mt-16 md:mt-20'>
                    <a href="#about" className="home_scroll-button">
                        <i className="uil uil-mouse-alt home_social-icon"></i>
                        <span>Scroll Down</span>
                        <i className="uil uil-arrow-down home_social-icon"></i>
                    </a>
                </div> */}

                <motion.div 
                    className="home_social_2"
                    variants={itemVariants}
                >
                    <a href="https://www.linkedin.com/in/m-sohaib-khalid-102b38228/" target="_blank" className="home_social-icon icon">
                        <i className="uil uil-linkedin-alt"></i>
                    </a>
                    <a href={waUrl} target="_blank" className="home_social-icon icon">
                        <i className="uil uil-whatsapp"></i>
                    </a>
                    <a href="https://github.com/MSohaibBangash/" target="_blank" className="home_social-icon icon">
                        <i className="uil uil-github"></i>
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sohaibkhalid514@gmail.com.com" target="_blank" className="home_social-icon icon">
                        <i className="uil uil-envelope"></i>
                    </a>
                </motion.div>


            </section>
        </>
    )
}

export default Home
