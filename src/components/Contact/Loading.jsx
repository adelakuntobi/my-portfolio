import React, { useEffect, useState } from 'react'
import Loader from 'react-loader-spinner'
import tick from '../../images/giphy (2).gif'

function Loading(props) {
  const { handler } = props
  const [None, setNone] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setNone(true)
    }, 6000);
  }, [])

  const changeState = () => {
    handler(false)
  }
  return (
    <div className="bg-white fixed h-screen w-screen top-0 left-0 z-40 flex items-center justify-center bg-opacity-75">
      {
        None ?
          <div className="bg-black text-white m-auto sent-div p-6 rounded-lg relative">
            <div onClick={changeState} className="cursor-pointer closeBtn absolute">
              <div></div>
            </div>
            <img src={tick} alt="sent tick" className="mx-auto mt-16" />
            <h1 className="text-xl md:text-3xl font-semibold">Your <span className="font-extrabold green">message</span> has been successfully sent. I would get back to you soon.</h1>
          </div> :
          <Loader type="BallTriangle" color="#00CC6A" height={200} width={200} />
      }
    </div>
  )
}

export default Loading
