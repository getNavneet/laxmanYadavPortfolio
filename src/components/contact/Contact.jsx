import React from 'react';
import SocialLinks from '../social/Social';
import ContactForm from './ContactForm';
const ContactSection = () => {
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
      <p className="text-center text-lg mb-8">
        Reach out for collaborations, speaking engagements, or inquiries.
      </p>
      
      <div className="flex flex-col  justify-between items-center gap-8">
        <div className="lg:w-1/2 w-full">
        <ContactForm/>
        </div>
        <div className='border-2 border-white'>
        <h2 className='text-2xl p-6 '>Dr. Laxman is Actively present on major social media </h2>
        <div className='p-4'>
        <SocialLinks/>
        </div>
      </div>
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
          <p className="mb-2"><strong>Email:</strong> laxmanhindi88@gmail.com</p>
          <p className="mb-2"><strong>Phone:</strong> +91-1234567890</p>
          <p><strong>Location:</strong> Azamgarh, Uttar Pradesh, India</p>
          </div>
          <hr></hr>
      
        
      </div>
    </div>
  );
};

export default ContactSection;
