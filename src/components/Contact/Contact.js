import React from 'react'
import TextareaAutosize from 'react-autosize-textarea'
import Heading from '../Heading/Heading'

function Contact() {
  return (
    <div className="container mx-auto lg:my-8 w-full lg:w-11/12">
      <div className="flex flex-col lg:flex-row md:px-4 lg:px-0">
        <div className="w-full lg:w-1/2 lg:pr-12 my-12 lg:my-2">
          <Heading name="Contact Me" />
          <p className="my-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumyeirmod temporinvidunt ut labore et dolormagna</p>
          <a className="text-2xl lg:text-2xl font-bold my-6 block"
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=adelakuntobiloba1@gmail.com"
            rel="noopener noreferrer" target="_blank">
            adelakuntobiloba1@gmail.com</a>
          <p className="my-4">You can also contact me through phone calls</p>
          <a href="tel:+2348168527167" className="font-bold text-3xl">+234 816 852 7167</a>
        </div>
        <div className="w-full lg:w-1/2 lg:my-2 my-12">
          <h2 className="text-4xl font-bold primaryColor lg:text-white">Get In Touch</h2>
          <form className="my-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <input className="bg-transparent lg:w-6/12 w-full p-2 border-b-1 focus:outline-none focus:shadow-inner" placeholder="Fullname" />
              <input className="bg-transparent lg:w-6/12 w-full p-2 border-b-1 focus:outline-none focus:shadow-inner" placeholder="Email" />
            </div>
            <TextareaAutosize placeholder="Message" rows={1}
            className="bg-transparent my-4 p-2 resize-none h-16 w-full overflow-hidden focus:outline-none focus:shadow-inner" />
            <button className="border hover:border-transparent px-12 my-6 py-2 whiteBtn focus:outline-none focus:shadow-outline">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
