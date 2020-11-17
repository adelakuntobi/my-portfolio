import React, { useState } from 'react'
import TextareaAutosize from 'react-autosize-textarea'
import Heading from '../Heading/Heading'
import emailjs from 'emailjs-com'
import Loading from './Loading'

function Contact() {
  
  const [loading, setLoading] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs.sendForm('gmail2', 'tobi', e.target, 'user_jUIxEF1crTt8lfw5ebKxY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }

  function handleChange(newValue) {
    setLoading(newValue);
  }

  return (
    <div className="container mx-auto w-full lg:w-11/12">
      <div className="flex flex-col lg:flex-row md:px-4 lg:px-0">
        <div className="w-full lg:w-1/2 lg:pr-12 my-12 lg:my-2">
          <Heading name="Contact Me" />
          <p className="my-4">
            Please feel free to drop me a line. If you don't get an answer immediately, I might
            just be travelling through the middle of nowhere. I'll get back to you as soon as I can.
            That's a promise.
          </p>
          <a className="text-xl md:text-2xl font-bold my-6 block"
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=adelakuntobiloba1@gmail.com"
            rel="noopener noreferrer" target="_blank">
            adelakuntobiloba1@gmail.com</a>
          <p className="my-4">I am a just a call away</p>
          <a href="tel:+2348168527167" className="font-bold text-3xl">+234 816 852 7167</a>
        </div>
        {/* <Loading /> */}
        <div className="w-full lg:w-1/2 lg:my-2 my-12">
          <h2 className="text-4xl font-bold primaryColor lg:text-white">Get In Touch</h2>
          <form className="my-4" onSubmit={sendEmail}>
            <div className="flex flex-col lg:flex-row gap-4">
              <input name="from_name" required className="bg-transparent lg:w-6/12 w-full p-2 border-b-1 focus:outline-none focus:shadow-inner mb-2" placeholder="Fullname" />
              <input name="user_email1" required className="bg-transparent lg:w-6/12 w-full p-2 border-b-1 focus:outline-none focus:shadow-inner mb-2" placeholder="Email" />
            </div>
            <TextareaAutosize required placeholder="Message" rows={1} name="message" 
              className="bg-transparent my-4 p-2 resize-none h-16 w-full overflow-hidden focus:outline-none focus:shadow-inner" />
            <button className="border hover:border-transparent px-16 my-6 py-2 whiteBtn focus:outline-none focus:shadow-outline">Send</button>
          </form>
        </div>
      </div>
      {
        loading ? <Loading load={loading} handler={handleChange} /> : ""
      }
    </div>

  )
}

export default Contact
