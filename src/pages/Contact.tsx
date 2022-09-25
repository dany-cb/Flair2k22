import React from 'react'
import licet from '../assets/images/licet.png'

export const Contact = () => {
  return (
    <>
      <section className="container d-md-flex justify-content-center align-items-center w-100 my-5 card bg-transparent">
        <div className="my-5 bg-dark rounded-curve shadow-white p-md-5 p-4 mr-card">
          <div className='d-md-flex text-center'>
          <img src={licet} className="img-fluid me-md-5" alt="licet" />
          <div className='me-md-5'>
            <div className="h3 text-center text-gradient ms-2">CONTACT US!</div>
             <div className='text-start mt-4 ms-2'>
               <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#f9f9f9" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104.1,104.1,0,0,0,24.1,132.1c2.1,54.7,47,98.8,101.8,99.9a104,104,0,0,0,91.4-50.8,4,4,0,0,0-4.1-6,52.5,52.5,0,0,1-9.2.8c-18.3,0-28.5-8-33.9-14.7a43.9,43.9,0,0,1-3.4-5A48,48,0,1,1,128,80a47.4,47.4,0,0,1,32,12.3v-4a8.2,8.2,0,0,1,7.5-8.3,8,8,0,0,1,8.5,8v40c0,14.6,4.9,32,28,32s27.6-16.2,28-30.5V128A104.1,104.1,0,0,0,128,24Z"></path><circle cx="128" cy="128" r="32"></circle></svg><a className="ms-2" href="mailto:flairit@licet.ac.in">FLAIR2K22 TEAM</a>
             </div>
           </div>
          </div>
        </div>
      </section>
    </>
  )
}