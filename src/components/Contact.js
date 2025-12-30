import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(""); // success / error message
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_2amx40j",   // 🔴 EmailJS → Email Services → Service ID
        "template_89mll2j",  // 🔴 EmailJS → Email Templates → Template ID
        form.current,
        "nOgEKMIVzDTLbNUEJ"  // 🔴 EmailJS → Account → API Keys → Public Key
      )
      .then(
        () => {
          setStatus("✅ Thank you! Your message has been sent.");
          form.current.reset();
          setLoading(false);
        },
        () => {
          setStatus("❌ Oops! Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p className="contact-subtitle">
          Feel free to reach out for projects, collaborations, or just a hello 👋
        </p>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && <p className="form-status">{status}</p>}
        </form>

        {/* Social Icons */}
        <div className="social-icons">
          <a
            href="https://facebook.com/Aasifansarii.90813"
            className="facebook"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://instagram.com/aasu_1.5"
            className="instagram"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://github.com/Aasu15-ops"
            className="github"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
