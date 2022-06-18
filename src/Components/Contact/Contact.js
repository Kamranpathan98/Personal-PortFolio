import React, { useRef, useState, useContext } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser'
import { themeContext } from "../../Context";

const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_ltn10pn",
                "template_jth6b4m",
                form.current,
                "9YQmaXpWRJKl9dUCb"
            )
            .then(
                (result) => {
                    setDone(true);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <div className='contact-form' id="Contact">
            <div className='c-left'>
                <div className='awsm'>
                    <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
                    <span>Contact me</span>
                    <div className='blur a-blur1' style={{ background: '#ABF1FF94' }}>
                    </div>
                </div>
            </div>
            <div className='c-right'>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='user_name' className='user' placeholder='Name' />
                    <input type='email' name='user_email' className='user' placeholder='Email' />
                    <textarea name='message' className='user' placeholder='Message' />
                    <input type='submit' value='Contact me' className='button' />
                    <span>{done && "Thanks for Contacting me....!! I will get back to you soon..."}</span>
                    <div className='blur contact-blur1' style={{ background: 'var(--purple)' }} />
                </form>

            </div>
        </div>
    )
}

export default Contact