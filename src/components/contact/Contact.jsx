import {useState} from "react";
import {sendForm} from '@emailjs/browser';
import {Loader} from "../loader/Loader";
import Swal from "sweetalert2";
import "./Contact.css";
import "../loader/Loader.css";

export const Contact = () => {
    const [isDisabled, setIsDisabled] = useState(false);

    const alert = (icon, title) => {
        Swal.fire({
            position: "center",
            icon: icon,
            title: title,
            showConfirmButton: false,
            timer: 2500,
            background: 'transparent',
            backdrop: false,
            customClass: {
                popup: 'alert-background'
            }
        }).then(r => r);
    }

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsDisabled(true);

        await sendForm('service_dbmwhsb', 'template_a8p9d3q', e.target, {
            publicKey: '38CE0iSCiKDS4ar1a',
        })
            .then(
                () => {
                    document.getElementById("name").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("phone").value = "";
                    document.getElementById("message").value = "";
                    alert("success", "The message has been sent");
                },
                () => {
                    alert("error", "Failed to send message");
                },
            );

        setIsDisabled(false);
    }

    return (
        <section className="contact" id="contact">

            <div className="contact-content section-content">

                <p className="section-subtitle">Contact</p>

                <h2 className="h3 section-title">Contact</h2>

                <p className="section-text">
                    If you have any questions, suggestions or would like to discuss a potential collaboration, please use any of the contact information below or fill out the form and I will contact you myself.
                </p>

                <ul className="contact-list">

                    <li className="contact-list-item">

                        <div className="contact-item-icon">
                            <ion-icon name="location-outline"></ion-icon>
                        </div>

                        <div className="wrapper">
                            <h3 className="h4 contact-item-title">Address:</h3>

                            <address className="contact-info">
                                10-291 Olsztyn, Warminsko-Mazurskie, Poland
                            </address>
                        </div>

                    </li>

                    <li className="contact-list-item">

                        <div className="contact-item-icon">
                            <ion-icon name="call-outline"></ion-icon>
                        </div>

                        <div className="wrapper">
                            <h3 className="h4 contact-item-title">Phone:</h3>

                            <a href="tel:+48 791 030 758" className="contact-info">+48 791 030 758</a>

                        </div>

                    </li>

                    <li className="contact-list-item">

                        <div className="contact-item-icon">
                            <ion-icon name="mail-outline"></ion-icon>
                        </div>

                        <div className="wrapper">
                            <h3 className="h4 contact-item-title">Email:</h3>

                            <a href="mailto:oleksandrosypenko1989@gmail.com"
                               className="contact-info">Oleksandrosypenko1989@gmail.com</a>

                        </div>

                    </li>

                    <li>
                        <ul className="contac-social-list">

                            <li>
                                <a href="https://www.linkedin.com/in/oleksandr-osypenko-8a4933243/"
                                   className="contact-social-link">
                                    <div className="tooltip">Linkedin</div>

                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="https://github.com/OleksandrOsypenko89" className="contact-social-link">
                                    <div className="tooltip">GitHub</div>

                                    <ion-icon name="logo-github"></ion-icon>
                                </a>
                            </li>

                        </ul>
                    </li>

                </ul>

            </div>

            <form action="" className="contact-form" onSubmit={sendEmail}>

                <div className="form-wrapper">

                    <label htmlFor="name" className="form-label">Name</label>

                    <div className="input-wrapper">

                        <input type="text" name="name" id="name" required placeholder="e.g John Doe"
                               className="input-field"/>

                        <ion-icon name="person-circle"></ion-icon>

                    </div>

                </div>

                <div className="form-wrapper">

                    <label htmlFor="email" className="form-label">Email</label>

                    <div className="input-wrapper">

                        <input type="email" name="email" id="email" required placeholder="e.g johndoe@mail.com"
                               className="input-field"/>

                        <ion-icon name="mail"></ion-icon>

                    </div>

                </div>

                <div className="form-wrapper">

                    <label htmlFor="phone" className="form-label">Phone</label>

                    <div className="input-wrapper">

                        <input type="tel" name="phone" id="phone" required placeholder="Phone Number"
                               className="input-field"/>

                        <ion-icon name="call"></ion-icon>

                    </div>

                </div>

                <div className="form-wrapper">

                    <label htmlFor="message" className="form-label">Message</label>

                    <div className="input-wrapper">

                        <textarea name="message" id="message" required placeholder="Write message..."
                                  className="input-field"></textarea>

                        <ion-icon name="chatbubbles"></ion-icon>

                    </div>

                </div>

                <button type="submit" className="btn btn-primary" disabled={isDisabled}>
                    {isDisabled ? <Loader/> : 'Send'}
                </button>

            </form>

        </section>
    )
}