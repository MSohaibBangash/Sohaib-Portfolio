import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import html from "../../assets/images/html.png"
import CSS from "../../assets/images/css.png"
import Javascript from "../../assets/images/javascript.png"
import Typescript from "../../assets/images/typescript.png"
import Redux from "../../assets/images/redux.png"
import ReactIcon from "../../assets/images/react.png"
import Next from "../../assets/images/nextjs.png"
import Mongodb from "../../assets/images/mongodb.png"
import Net from "../../assets/images/net.png"
import Node from "../../assets/images/node.png"
import SQL from "../../assets/images/sql.png"
import './skill.css'

const Skill = () => {
    const [isShowFrontend, setIsShowFrontend] = useState(true)
    const [isShowBackend, setIsShowBackend] = useState(true)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1
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

    const skillBarVariants = {
        hidden: { width: 0 },
        visible: {
            width: "var(--skill-width)",
            transition: {
                duration: 1.2,
                ease: "easeOut",
                delay: 0.5
            }
        }
    };

    useEffect(() => {
    }, [isShowFrontend, isShowBackend])
    
    return (
        <div className='section container'>
            <motion.h2 
                className="title"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
            >
                Skills
            </motion.h2>
            <motion.p 
                className="sub-title"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
            >
                My Technical Level
            </motion.p>
            <motion.div 
                className="skills_container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >

                <div className=''>
                    <div className={`skills_content ${isShowFrontend ? "skills_open" : "skills_close"}  `}>

                        <div className="skills_header" onClick={() => setIsShowFrontend(!isShowFrontend)}>
                            <i className="uil uil-brackets-curly skills_icon"></i>
                            <div>
                                <h1 className="skills_title">Frontend developer</h1>
                                <p className="skills_subtitle text-left">More than 3 years</p>
                            </div>
                            <i className="uil uil-angle-down skills_arrow"  ></i>
                        </div>
                        <div className="skills_list grid grid-cols-2 gap-x-12 ">
                            <div className="skill_date">
                                <div className="skills_titles">
                                    <div className='skills-header'>
                                     <img className='skills-icon' src={html} alt="" srcset="" />   
                                    <h3 className="skills_name">HTML</h3>
                                    </div>
                                    <span className="skills_number">90%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_html"></span>
                                </div>
                            </div>
                            <div className="skill_date">
                                <div className="skills_titles">
                                    <div className='skills-header'>
                                     <img className='skills-icon' src={CSS} alt="" srcset="" />   
                                    <h3 className="skills_name">CSS</h3>
                                    </div>
                                    <span className="skills_number">90%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_css"></span>
                                </div>
                            </div>
                            <div className="skill_date">
                                <div className="skills_titles">
                                    <div className='skills-header'>
                                     <img className='skills-icon' src={Javascript} alt="" srcset="" />   
                                    <h3 className="skills_name">JavaScript</h3>
                                    </div>
                                    <span className="skills_number">90%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_js"></span>
                                </div>
                            </div>
                            <div className="skill_date">
                                <div className="skills_titles">
                                    <div className='skills-header'>
                                     <img className='skills-icon' src={Typescript} alt="" srcset="" />   
                                    <h3 className="skills_name">Typescript</h3>
                                    </div>
                                    <span className="skills_number ">80%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_typescript"></span>
                                </div>
                            </div>
                            <div className="skill_date">
                                <div className="skills_titles">
                                    <div className='skills-header'>
                                     <img className='skills-icon' src={ReactIcon} alt="" srcset="" />   
                                    <h3 className="skills_name">React</h3>
                                    </div>
                                    <span className="skills_number">90%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_react"></span>
                                </div>
                            </div>
                            <div className="skill_date">
                                <div className="skills_titles">
                                    <div className='skills-header'>
                                     <img className='skills-icon' src={Redux} alt="" srcset="" />   
                                    <h3 className="skills_name">React Redux</h3>
                                    </div>
                                    <span className="skills_number">90%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_reactredux"></span>
                                </div>
                            </div>
                            <div className="skill_date">
                                <div className="skills_titles">
                                    <div className='skills-header'>
                                     <img className='skills-icon' src={Next} alt="" srcset="" />   
                                    <h3 className="skills_name">Nextjs</h3>
                                    </div>
                                    <span className="skills_number">75%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_nextjs"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`skills_content ${isShowBackend ? "skills_close" : "skills_open"} `}>

                        <div className="skills_header" onClick={() => setIsShowBackend(!isShowBackend)}>
                            <i className="uil uil-server-network skills_icon"></i>
                            <div>
                                <h1 className="skills_title">Backend developer</h1>
                                <p className="skills_subtitle text-left">1 year</p>
                            </div>
                            <i className="uil uil-angle-down skills_arrow"></i>
                        </div>
                        <div className="skills_list grid grid-cols-2 gap-x-12">
                            
                            <div className="skill_date">
                                <div className="skills_titles">
                                    <div className='skills-header'>
                                     <img className='skills-icon' src={Node} alt="" srcset="" />   
                                    <h3 className="skills_name">Node Js</h3>
                                    </div>
                                    <span className="skills_number">80%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_node"></span>
                                </div>
                            </div>
                            <div className="skill_date">
                                <div className="skills_titles">
                                    <div className='skills-header'>
                                     <img className='skills-icon' src={Mongodb} alt="" srcset="" />   
                                    <h3 className="skills_name">MangoDB</h3>
                                    </div>
                                    <span className="skills_number">80%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_mongodb"></span>
                                </div>
                            </div>
                            <div className="skill_date">
                                <div className="skills_titles">
                                    <div className='skills-header'>
                                     <img className='skills-icon' src={SQL} alt="" srcset="" />   
                                    <h3 className="skills_name">SQL</h3>
                                    </div>
                                    <span className="skills_number">75%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_sql"></span>
                                </div>
                            </div>
                            <div className="skill_date">
                                <div className="skills_titles">
                                    <div className='skills-header'>
                                     <img className='skills-icon' src={Net} alt="" srcset="" />   
                                    <h3 className="skills_name">Asp.NET</h3>
                                    </div>
                                    <span className="skills_number">50%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_aspnet"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </motion.div>
        </div>
    )
}

export default Skill
