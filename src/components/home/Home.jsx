import React from 'react'
import Typewriter from "typewriter-effect";
import { motion } from 'framer-motion'
import './home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    const waUrl = `https://wa.me/923430669213?text=${encodeURIComponent('Hi! I saw your site and would like to chat.')}`;

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

    const socialLinks = (
        <>
            <a
                href="https://www.linkedin.com/in/m-sohaib-khalid-102b38228/"
                target="_blank"
                rel="noopener noreferrer"
                className="home_social-icon icon"
                aria-label="LinkedIn"
            >
                <i className="uil uil-linkedin-alt"></i>
            </a>
            <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="home_social-icon icon"
                aria-label="WhatsApp"
            >
                <i className="uil uil-whatsapp"></i>
            </a>
            <a
                href="https://github.com/MSohaibBangash/"
                target="_blank"
                rel="noopener noreferrer"
                className="home_social-icon icon"
                aria-label="GitHub"
            >
                <i className="uil uil-github"></i>
            </a>
            <a
                href="mailto:sohaibkhalid514@gmail.com"
                className="home_social-icon icon"
                aria-label="Email"
            >
                <i className="uil uil-envelope"></i>
            </a>
        </>
    );

    return (
        <section className='section container'>
            <motion.div
                className='home_container'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="home_social" variants={itemVariants}>
                    {socialLinks}
                </motion.div>

                <motion.div className='home_data' variants={itemVariants}>
                    <motion.h1 className='home_title' variants={itemVariants}>
                        <span className="home_title__greeting">Hi,</span>
                        <span className="home_title__name">I&apos;m M. Sohaib Khalid</span>
                    </motion.h1>
                    <motion.p className='home_caption' variants={itemVariants}>
                        Full Stack Developer building scalable, secure enterprise web applications
                    </motion.p>
                    <motion.p className='home_subtitle' variants={itemVariants}>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .changeDelay(80)
                                    .typeString("React.js · Angular · Node.js")
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .typeString("Next.js · Express.js · TypeScript")
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .typeString("MongoDB · SQL · Docker")
                                    .pauseFor(1500)
                                    .start();
                            }}
                            options={{ loop: true }}
                        />
                    </motion.p>
                    <motion.div variants={itemVariants}>
                        <Link to={"/contact"} className="button">
                            Contact Me
                            <i className="uil uil-message"></i>
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div className="home_social_2" variants={itemVariants}>
                {socialLinks}
            </motion.div>
        </section>
    )
}

export default Home
