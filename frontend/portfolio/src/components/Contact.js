import React, { useState } from "react";
import axios from "axios";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        if (name === "" || email === "" || message === "") {
            alert("Populate all fields");
            return;
        }
        axios.post("http://127.0.0.1:8000/users/signup", {
            name: name,
            email: email,
            message: message,
        })
        .then(response => console.log(response.data))
        .catch(error => console.error(error));
        alert(`${name}, thanks for reaching out.`);
    };

    return (
        <div className="contact-page">
            <h1 className="contact-header">CONTACT</h1>
            <div className="contact-container">
                <input
                    className="contact-input"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="contact-input"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    className="contact-textarea"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button
                    className="contact-button"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default Contact;
