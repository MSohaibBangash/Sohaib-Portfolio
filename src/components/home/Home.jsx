import React from 'react'
import Typewriter from "typewriter-effect";
import './home.css'
import { Link } from 'react-router-dom';
const Home = () => {
    const waUrl = `https://wa.me/${923430669213}?text=${'Hi! I saw your site and would like to chat.'}`;

    return (
        <>
            <section className='section container' >
                <div className='home_container'>

                    <div className="home_social">
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
                    </div>
                    <div className='home_data '>
                        <h1 className='home_title'>Hi, I'am M.Sohaib</h1>
                        <p className='home_subtitle'>
                            <Typewriter
                                className=""
                                onInit={(typewriter) => {
                                    typewriter
                                        .changeDelay(80)
                                        .typeString("I'm a Frontend Developer")
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
                        </p>
                        <Link to={"/contact"} className="button">Contact Me
                            <i class="uil uil-message"></i>
                        </Link>
                    </div>

                </div>

                {/* <div className='home_scroll flex justify-center mt-16 md:mt-20'>
                    <a href="#about" className="home_scroll-button">
                        <i className="uil uil-mouse-alt home_social-icon"></i>
                        <span>Scroll Down</span>
                        <i className="uil uil-arrow-down home_social-icon"></i>
                    </a>
                </div> */}

                <div className="home_social_2 ">
                    <a href="https://www.linkedin.com/" target="_blank" className="home_social-icon icon text-2xl">
                        <i className="uil uil-linkedin-alt"></i>
                    </a>
                    <a href="https://dribbble.com/" target="_blank" className="home_social-icon icon text-2xl">
                        <i className="uil uil-dribbble"></i>
                    </a>
                    <a href="https://github.com/" target="_blank" className="home_social-icon icon text-2xl">
                        <i className="uil uil-github"></i>
                    </a>
                </div>


            </section>
        </>
    )
}

export default Home
