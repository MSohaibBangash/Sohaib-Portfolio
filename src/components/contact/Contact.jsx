import React, { useState } from 'react'
import './contact.css'
import { toast } from 'react-toastify';
const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const toastId = toast.loading("Please wait....");
        const formData = new FormData(event.target);

        formData.append("access_key", "cba851c5-2fb7-4449-83e1-699306654c2e");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            toast.update(toastId, {
                render: "Message sent successfully!",
                type: "success",
                isLoading: false,
                autoClose: 3000,
            });
            event.target.reset();
        } else {
            toast.update(toastId, {
                render: "Failed to send message!",
                type: "error",
                isLoading: false,
                autoClose: 3000,
            });
        }
    };
    return (
        <section className="section container">
            <h2 className="title">Contact Me</h2>
            <p className="sub-title">Get in Touch</p>
            <div className="contact_container">
                <div>
                    <div className="contact_information">
                        <i className="uil uil-phone contact_icon"></i>
                        <div>
                            <h3 className="contact_title">Call Me</h3>
                            <span className="section__subtitle">0343 0669213</span>
                        </div>
                    </div>
                    <div className="contact_information">
                        <i className="uil uil-envelope contact_icon"></i>
                        <div>
                            <h3 className="contact_title">Email</h3>
                            <span className="section__subtitle">sohaibkhalid514@gmail.com</span>
                        </div>
                    </div>
                    <div className="contact_information">
                        <i className="uil uil-map-marker contact_icon"></i>
                        <div>
                            <h3 className="contact_title">Location</h3>
                            <span className="section__subtitle">Islamabad - Pakistan</span>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact_form grid">
                    <input type="hidden" name="access_key" value="cba851c5-2fb7-4449-83e1-699306654c2e" />
                    <input type="hidden" name="from_name" value="Sohaib Portfolio" />

                    <div className="contact_inputs grid">
                        <div className="contact_content">
                            <label htmlFor="name" className="contact_label">Name</label>
                            <input type="text" name="name" required className="contact_input" />
                        </div>
                        <div className="contact_content">
                            <label htmlFor="email" className="contact_label">Email</label>
                            <input type="email" name="email" required className="contact_input" />
                        </div>
                        <div className="contact_content">
                            <label htmlFor="project" className="contact_label">Project</label>
                            <input type="text" name="project" required className="contact_input" />
                        </div>
                        <div className="contact_content">
                            <label htmlFor="message" className="contact_label">Message</label>
                            <textarea name="message" rows="5" required className="contact_input" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="button button--flex">
                            Send Message
                            <i className="uil uil-message button_icon"></i>
                        </button>
                    </div>

                </form>
            </div>
        </section>
    )
}

export default Contact
