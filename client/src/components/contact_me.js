import { useState } from "react";
import emailjs from '@emailjs/browser';
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactMe = () => {

    const [fullName, setFullName] = useState("");
    const [company, setCompany] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [message, setMessage] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        const contactForm = {
            fullName,
            company,
            emailAddress,
            message
        }
        emailjs.send('service_id', 'Portfolio', contactForm, 'LW4RMYIvhRvf0Fz9c')
            .then((res) => {
                console.log("Success!", res.data);
            }, (err) => {
                console.log("Email was not sent", err);
            });
    }

    return (
        <div>
            <form id='contact-me-alert-form-1' onSubmit={submitHandler}>
                <Card>
                    <div className='contact-form-top-row'>
                        <h2 style={{ textDecoration: "underline" }}>Contact Form</h2>
                    </div>
                    <label>Name:</label>
                    <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    <label>Company:</label>
                    <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
                    <label>Email Address:</label>
                    <input type="text" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
                    <label>Message:</label>
                    <textarea type="text" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </Card>
                <hr />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ContactMe;