import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    alert("Thank you for contacting us!");
  };

  return (
    <>
      <div className="contact-us">
        <div className="form-container">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="service">Service</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a Service</option>
                <option value="consulting">Consulting</option>
                <option value="development">Development</option>
                <option value="design">Design</option>
                <option value="support">Support</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="contact">
  <h1>Contact Info</h1>
  <div className="contact-info-container">
    <div className="info-item">
      <h6>Office Address</h6>
      <p>Arhwan, Wazirganj, Beside, Gaya - 805131</p>
    </div>
    <div className="info-item">
      <h6>Project Address</h6>
      <p>1st Floor, Arhwan, Wazirganj, Beside, G</p>
    </div>
    <div className="info-item">
      <h6>Phone Numbers</h6>
      <p>+91 7808386051</p>
      <p>+91 8434950317</p>
    </div>
    <div className="info-item">
      <h6>Email Addresses</h6>
      <p>deepakarn2007@gmail.com</p>
      <p>deepakinfragroup@gmail.com</p>
    </div>
  </div>
</div>

      <div className="location">
        <h1>Our Location</h1>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13796.472179474642!2d85.2514849!3d24.8182917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f3200fc2da7f3f%3A0x39281d9c555d60f7!2sDevi%20Sthan%20Arhwam!5e0!3m2!1sen!2sus!4v1634635928393!5m2!1sen!2sus"
            style={{ width: "100%", height: "400px", border: "0" }} // Adjust height for better visibility
            allowFullScreen=""
            loading="lazy"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
