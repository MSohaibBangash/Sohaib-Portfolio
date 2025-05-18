import React, { useState } from 'react'
import TBML from "../../assets/images/tbml.png"
import CDA from "../../assets/images/cda.png"
import Eztech from "../../assets/images/eztech.png"
import Personality_Quest from "../../assets/images/personality-quest.png"
import Movix from "../../assets/images/movix.png"
import Rahper from "../../assets/images/rahper.png"
import Resturant from "../../assets/images/resturant.png"
import WMS from "../../assets/images/wms.png"
import Margalla from "../../assets/images/margalla.png"
import Odontx from "../../assets/images/odontx.png"
import './project.css'
const Project = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className='section container'>
            <h2 className="title">Project</h2>
            <p className="sub-title">Most Recent Works</p>
            <div className='project_container'>
                <div className='project_box'>
                    <img className='object_center' src={TBML} alt='' />
                    <div className='project_info'>
                        <div className='caption'>
                            <h4>TBML</h4>
                            <p>Trade-Based Money Laundering (TBML) is an application designed to monitor and prevent illegal financial activities that occur within international trade transactions</p>
                        </div>
                    </div>
                </div>
                <div className='project_box'>
                    <img className='object_center' src={CDA} alt='' />
                    <div className='project_info'>
                        <div className='caption'>

                            <h4>CDA SURVEY</h4>
                            <p>CDA Survey is a platform where employees are assigned specific areas to conduct and submit structured field survey reports efficiently.</p>
                        </div>
                    </div>
                </div>
                <div className='project_box'>
                    <img className='object_center' src={Eztech} alt='' />
                    <div className='project_info'>
                        <div className='caption'>
                            <h4>EZ TECH</h4>
                            <p>Eztech is an application that provides comprehensive Desktop Support and IT Support Services</p>
                        </div>
                    </div>
                </div>
                <div className='project_box'>
                    <img className='object_left' src={WMS} alt='' />
                    <div className='project_info'>
                        <div className='caption'>

                            <h4>WMS</h4>
                            <p>A Warehouse Management System (WMS) is an application that automates check-in
                                and checkout inventory and asset tracking with detailed warehouse reports.</p>
                        </div>
                    </div>
                </div>
                <div className='project_box'>
                    <img className='object_left' src={Margalla} alt='' />
                    <div className='project_info'>
                        <div className='caption'>

                            <h4>MARGILLA HILLS</h4>
                            <p>Margalla Hills is a UK-based construction company specializing in technological innovation and sustainable building solutions </p>
                        </div>
                    </div>
                </div>
                <div className='project_box'>
                    <img className='object_center' src={Resturant} alt='' />
                    <div className='project_info'>
                        <div className='caption'>

                            <h4>RESTURANT</h4>
                            <p>The best restaurant for organic food, offering fresh, healthy, locally-sourced meals with natural ingredients and a focus on sustainability.</p>
                        </div>
                    </div>
                </div>
                <div className='project_box'>
                    <img className='object_left' src={Odontx} alt='' />
                    <div className='project_info'>
                        <div className='caption'>
                            <h4>Odontx</h4>
                            <p>OdontX is a modern dental website offering expert services, appointment booking, treatment information, and patient care for healthy smiles.</p>
                        </div>
                    </div>
                </div>
                <div className='project_box'>
                    <img className='object_center' src={Rahper} alt='' />
                    <div className='project_info'>
                        <div className='caption'>

                            <h4>RAHPER</h4>
                            <p>Rahper is a ride-hailing service platform that provides transportation solutions through
                                mobile and web app</p>
                        </div>
                    </div>
                </div>
                <div className='project_box'>
                    <img className='object_left' src={Personality_Quest} alt='' />
                    <div className='project_info'>
                        <div className='caption'>

                            <h4>PERSNALITY QUEST</h4>
                            <p>The Personality Quest Application is an interactive software where users answer multiple-choice questions. The software analyzes their personality traits and generates a personalized PDF report based on their answers. </p>
                        </div>
                    </div>
                </div>
                <div className='project_box'>
                    <img className='object_center' src={Movix} alt='' />
                    <div className='project_info'>
                        <div className='caption'>

                            <h4>MOVIX</h4>
                            <p>Movix is an online platform to explore, stream, and discover movies, offering detailed information, trailers, and personalized recommendations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
