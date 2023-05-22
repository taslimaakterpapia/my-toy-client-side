import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white ">
      <div className="footer-container py-8 px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          <div className="footer-section ml-8">
            <img src="image/tiy.png" alt="" />
            <p className='ml-4 text-lg text-white font-semibold'>MyToys Ltd.<br />Providing reliable toys since 2022</p>
          </div>


          <div>
            <h1 className="font-bold mb-2 text-4xl text-white">Service</h1>
            <div className='text-lg text-white font-semibold'>
            <a className="link link-hover"></a> <br />
            <a className="link link-hover">Design</a> <br />
            <a className="link link-hover">Marketing</a> <br />
            <a className="link link-hover">Advertisement</a>
            </div>
          </div>







          <div className="footer-section">
            <h1 className="font-bold mb-2 text-4xl text-white">Contact Us</h1>
            <p className='text-lg text-white font-semibold'>
              Phone: 123-456-7890<br />
              Email: mytoys@gmail.com<br />
              Address: Dhaka Bangladesh
            </p>
          </div>

        </div>
      </div>
      <div className="bg-white text-blue-700 py-2 px-4 md:px-10 font-semibold text-center">
        &copy; 2023 MyToys Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
