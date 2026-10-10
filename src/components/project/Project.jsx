import React from 'react'
import TBML from "../../assets/images/tbml.png"
import CDA from "../../assets/images/cda.png"
import Eztech from "../../assets/images/eztech.png"
import WMS from "../../assets/images/wms.png"
import Margalla from "../../assets/images/margalla.png"
import Resturant from "../../assets/images/resturant.png"
import Odontx from "../../assets/images/odontx.png"
import Rahper from "../../assets/images/rahper.png"
import Personality_Quest from "../../assets/images/personality-quest.png"
import TAS from "../../assets/images/tas.jpg"
import Emformance from "../../assets/images/emformance.jpg"
import './project.css'

const projects = [
    // Main client projects first
    {
        title: "Talent Acquisition System",
        client: "PTCL",
        description:
            "Developed an enterprise career management portal that streamlines job postings, requisitions, candidate applications, recruitment workflows, and hiring processes.",
        image: TAS,
        objectClass: "object_left",
    },
    {
        title: "Trade-Based Money Laundering",
        client: "JS Bank",
        description:
            "Monitors and helps prevent illegal financial activities that occur within international trade transactions.",
        image: TBML,
        objectClass: "object_center",
    },
    {
        title: "Emformance",
        client: "USA-based client",
        description:
            "Developed an ERP application that integrates core business processes, including HR, finance, operations, workflow management, and reporting into a centralized platform.",
        image: Emformance,
        objectClass: "object_center",
    },
    {
        title: "Warehouse Management System",
        client: "Finland-based client",
        description:
            "Automates inventory check-in/checkout and asset tracking with detailed warehouse reports.",
        image: WMS,
        objectClass: "object_left",
    },
    {
        title: "EZTECH",
        client: "Saudi Arabia-based client",
        description:
            "Desktop support and end-to-end IT support services platform for smooth, reliable technology operations.",
        image: Eztech,
        objectClass: "object_center",
    },
    {
        title: "CDA Survey Portal",
        client: "Capital Development Authority",
        description:
            "Platform where employees are assigned areas to conduct and submit structured field survey reports efficiently.",
        image: CDA,
        objectClass: "object_center",
    },
    // Other projects
    {
        title: "Margalla Hills",
        description:
            "UK-based construction company site specializing in technological innovation and sustainable building solutions.",
        image: Margalla,
        objectClass: "object_left",
    },
    {
        title: "Restaurant",
        description:
            "Restaurant website for organic food, offering fresh, healthy, locally-sourced meals with a focus on sustainability.",
        image: Resturant,
        objectClass: "object_center",
    },
    {
        title: "Odontx",
        description:
            "Modern dental website offering expert services, appointment booking, treatment information, and patient care.",
        image: Odontx,
        objectClass: "object_left",
    },
    {
        title: "Rahper",
        description:
            "Ride-hailing service platform that provides transportation solutions through mobile and web apps.",
        image: Rahper,
        objectClass: "object_center",
    },
    {
        title: "Personality Quest",
        description:
            "Interactive app where users answer multiple-choice questions and receive a personalized PDF personality report.",
        image: Personality_Quest,
        objectClass: "object_left",
    },
];

const Project = () => {
    return (
        <div className='section container'>
            <h2 className="title">Projects</h2>
            <p className="sub-title">Enterprise and product work I&apos;ve delivered</p>
            <div className='project_container'>
                {projects.map((project) => (
                    <div className='project_box' key={project.title}>
                        {project.image ? (
                            <img
                                className={project.objectClass || "object_center"}
                                src={project.image}
                                alt={project.title}
                            />
                        ) : (
                            <div className="project_cover" aria-hidden="true">
                                <span>{project.initials}</span>
                            </div>
                        )}
                        <div className='project_info'>
                            <div className='caption'>
                                {project.client ? (
                                    <p className="project_client">Client: {project.client}</p>
                                ) : null}
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project
