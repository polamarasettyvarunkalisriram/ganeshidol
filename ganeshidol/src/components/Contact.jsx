import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message");
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Us</h2>

      <div className="contact-container">
        <div className="contact-info">
  <h3>🕉️ Ganesh Idol Store</h3>

  <div className="contact-info-card">
    <span>📍</span>
    <p>Visakhapatnam, Andhra Pradesh</p>
  </div>

  <div className="contact-info-card">
    <span>📞</span>
    <p>+91 9398171713</p>
  </div>

  <div className="contact-info-card">
    <span>✉️</span>
    <p>srirampksrirampk@gmail.com</p>
  </div>

  <div className="contact-info-card">
    <span>🕒</span>
    <p>Mon - Sun : 9:00 AM - 8:00 PM</p>
  </div>
</div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          />

          <button type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;