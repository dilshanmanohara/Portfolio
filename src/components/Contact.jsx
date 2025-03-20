import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    // Initialize EmailJS
    emailjs.init("xdWuV2T7c62iG7_e7");

    emailjs.sendForm(
      'service_pyy0ulg',     // Your service ID
      'template_f3r36xt',    // Your new template ID
      form.current,
      'xdWuV2T7c62iG7_e7'   // Your public key
    )
      .then((result) => {
        console.log('Success:', result.text);
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.'
        });
        form.current.reset();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setSubmitStatus({
          type: 'error',
          message: 'Something went wrong. Please try again later.'
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-20">
      <h2 className="section-title">Get In Touch</h2>
      <div className="max-w-xl mx-auto px-4">
        <p className="text-textSecondary text-center mb-8">
          I'm currently looking for new opportunities and my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-textPrimary mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="user_name"
              id="name"
              required
              className="w-full px-4 py-2 bg-dark-100/50 border border-dark-200 
              rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary 
              outline-none transition-all duration-300 text-textPrimary placeholder-textSecondary/50"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-textPrimary mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="user_email"
              id="email"
              required
              className="w-full px-4 py-2 bg-dark-100/50 border border-dark-200 
              rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary 
              outline-none transition-all duration-300 text-textPrimary placeholder-textSecondary/50"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-textPrimary mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              className="w-full px-4 py-2 bg-dark-100/50 border border-dark-200 
              rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary 
              outline-none transition-all duration-300 text-textPrimary placeholder-textSecondary/50"
              placeholder="Project Inquiry"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-textPrimary mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows="5"
              className="w-full px-4 py-2 bg-dark-100/50 border border-dark-200 
              rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary 
              outline-none transition-all duration-300 text-textPrimary placeholder-textSecondary/50 
              resize-none"
              placeholder="Your message here..."
            ></textarea>
          </div>

          {submitStatus.message && (
            <div className={`text-center p-3 rounded-lg ${
              submitStatus.type === 'success' 
                ? 'bg-green-900/20 text-green-400 border border-green-500/20' 
                : 'bg-red-900/20 text-red-400 border border-red-500/20'
            }`}>
              {submitStatus.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full btn-primary ${
              isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : 'Send Message'}
          </button>
        </form>

        {/* Contact Information */}
        <div className="mt-12 space-y-4 text-center">
          <p className="text-textSecondary">
            <span className="font-semibold text-textPrimary">Email:</span>{" "}
            <a href="mailto:dilshmudalige@gmail.com" className="hover:text-secondary transition-colors duration-300">
              dilshmudalige@gmail.com
            </a>
          </p>
          <p className="text-textSecondary">
            <span className="font-semibold text-textPrimary">Phone:</span>{" "}
            <a href="tel:+94768961921" className="hover:text-secondary transition-colors duration-300">
              +94 768961921
            </a>
          </p>
          <p className="text-textSecondary">
            <span className="font-semibold text-textPrimary">Location:</span>{" "}
            Galle, Southern Province, Sri Lanka
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact; 