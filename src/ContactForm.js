import React, { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Sorry, invalid format here";
    }
    if (!formData.email) {
      newErrors.email = "Sorry, invalid format here";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Sorry, invalid format here";
    }
    if (!formData.message) {
      newErrors.message = "Sorry, invalid format here";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Form submission logic
      console.log("Form submitted successfully", formData);
      // Clear form data
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          placeholder="NAME"
          className={`contact-input ${errors.name ? "input-error" : ""}`}
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div className="input-container">
        <input
          type="email"
          placeholder="EMAIL"
          className={`contact-input ${errors.email ? "input-error" : ""}`}
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="input-container">
        <textarea
          placeholder="MESSAGE"
          className={`contact-textarea ${errors.message ? "input-error" : ""}`}
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <p className="error">{errors.message}</p>}
      </div>
      <button type="submit" className="contact-submit">
        SEND MESSAGE
      </button>
    </form>
  );
}
