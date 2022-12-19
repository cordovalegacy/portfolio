import { useState } from "react";
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormGroup from "react-bootstrap/esm/FormGroup";
import Image from 'react-bootstrap/Image';
import CODING from '../img/coding.jfif';

const ContactMe = () => {

    const greetingHandler = (message, color, shadow, sizing) => {
        const greeting = document.getElementById('contact-greeting');
        greeting.innerText = message;
        greeting.style.color = color;
        greeting.style.textShadow = shadow;
        greeting.style.width = sizing;
        greeting.style.margin = "auto"
    }

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
        if (fullName && company && emailAddress && message) {
            emailjs.send('service_id', 'Portfolio', contactForm, 'LW4RMYIvhRvf0Fz9c')
                .then((res) => {
                    console.log("Success!", res.data);
                }, (err) => {
                    console.log("Email was not sent", err);
                });
            setFullName("")
            setCompany("")
            setEmailAddress("")
            setMessage("")
            const success = document.getElementById('contact-greeting');
            success.innerText = "Thanks for reaching out!\nI will get right back to you.";
            success.style.color = "blue";
        } else {
            const warning = document.getElementById('contact-greeting');
            warning.innerText = "Please complete the form to submit message";
            warning.style.color = "red";
        }
    }

    return (
        <Form id='contact-me-form' onSubmit={submitHandler}>
            <FormGroup>
                <Form.Label style={{ fontSize: "2em" }}>
                    Contact Form
                    <br />
                </Form.Label>
                <Image className="contact-me-form-image" src={CODING} alt="coding cartoon image"></Image>
            </FormGroup>
            <FormGroup id="contact-me-form-group">
                <h6 id="contact-greeting">I am looking forward to hearing from you!</h6>
                <br />
                <label>Name:</label>
                <input
                    type="text"
                    value={fullName}
                    onClick={(e) => {
                        greetingHandler("Good to meet you! My name is Brendan. Thanks for taking the time to look at my page.", "orange", "0px 0px 1px black", "100%")
                    }}
                    onChange={(e) => setFullName(e.target.value)}
                />
                <label>Company:</label>
                <input
                    type="text"
                    value={company}
                    onClick={(e) => {
                        greetingHandler(fullName && `Hi ${fullName}! Where do you work?`, "red", "0px 0px 1px gray", "100%")
                    }}
                    onChange={(e) => setCompany(e.target.value)}
                />
                <label>Email Address:</label>
                <input
                    type="text"
                    value={emailAddress}
                    onClick={(e) => {
                        greetingHandler(company && `Wow you work at ${company}?! I am honored. Enter your work email address so we can chat!`, "darkblue", "0px 0px 1px blue", "100%")
                    }}
                    onChange={(e) => setEmailAddress(e.target.value)}
                />
                <label>Message:</label>
                <textarea
                    type="text"
                    value={message}
                    onClick={(e) => {
                        greetingHandler(`${fullName}\n${company}\n${emailAddress}\n\n` + 'Looking forward to connecting with you!', "goldenrod", "0px 0px 1px black", "100%")
                    }}
                    onChange={(e) => setMessage(e.target.value)}>
                </textarea>
                <br />
                <input type="submit" value="Submit" />
            </FormGroup>
        </Form>
    )
}

export default ContactMe;