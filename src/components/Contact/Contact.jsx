import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import  {useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5x0q1qf', 'template_ftn8iak', form.current, 'sks8pxPuv-rhCnnBh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
           <article className='contact_option'>
             <MdOutlineEmail className='contact_option_icon'/>
             <h4>Email</h4>
             <h5>shafeekzmails@gmail.com</h5>
             <a href="mailto:shafeekzmails@gmail.com" target="_blank">Send a message</a>
           </article>
           <article className='contact_option'>
             <BsWhatsapp className='contact_option_icon'/>
             <h4>WhatsApp</h4>
             <h5>+123456789</h5>
             <a href="https://api.whatsapp.com/send?phone=91+8220864371" target="_blank">Send a message</a>
           </article>
           <article className='contact_option'>
             <MdOutlineEmail className='contact_option_icon'/>
             <h4>Email</h4>
             <h5>shafeekzmails@gmail.com</h5>
             <a href="mailto:shafeekzmails@gmail.com" target="_blank">Send a message</a>
           </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact