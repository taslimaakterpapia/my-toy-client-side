import React from 'react';
import './Banner.css';
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@800&family=Mogra&family=Open+Sans&family=Work+Sans:wght@400;500;700&display=swap" rel="stylesheet"></link>
import image1 from '../../../image/car1.jpg';
import image2 from '../../../image/car2.jpg';
import image3 from '../../../image/car3.jpg';
import image4 from '../../../image/car4.jpg';
import image5 from '../../../image/car5.jpg';
import image6 from '../../../image/car6.jpg';
import image7 from '../../../image/car7.jpg';
import image8 from '../../../image/car8.jpg';
import image9 from '../../../image/car9.jpg';
import image10 from '../../../image/car10.jpg';
import image11 from '../../../image/delivery.png';
import image12 from '../../../image/doller.png';
import image13 from '../../../image/girl.png';
import image18 from '../../../image/header.png';



const Banner = () => {
    return (
        <div>






            <div className='bg-white py-5'>
                <div className="flex mx-auto gap-5">

                    <div>

                        <img src={image18} className="img-fluid" alt="" />

                    </div>

                    <div className="mt-5">
                        <h1 className="title fw-bold font-bold text-4xl py-4">Toy Are For All Age</h1>
                        <p className="fs-5 font-medium text-xl">Welcome to our Toy Wonderland! <br /> <br />

                            At our toy website, we strive to bring joy and <br /> the   lives of  children and toy enthusiasts alike. <br /> An extensive collection  of  toys  from categories, <br /> we    are  your one-stop destination  for all things play time.</p>


                    </div>




                </div>



                <div className=" grid grid-cols-3 place-items-center rounded-full bg-blue-700 py-4 mt-10">


                    <div className="flex items-center text-white gap-3" >
                        <div>
                            <img src={image11} alt="" />
                        </div>
                        <div>
                            <h4 className='text-2xl'>Free Shipping Worldwide</h4>
                            <p className="text-white">On order over $150</p>
                        </div>
                    </div>


                    <div className="flex items-center  text-white" >
                        <div>
                            <img src={image12} alt="" />
                        </div>
                        <div>
                            <h4 className='text-2xl'>Cash On Delivery</h4>
                            <p className="text-white">100% money back guarantee</p>
                        </div>
                    </div>



                    <div className="flex items-center  text-white " >
                        <div>
                            <img src={image13} alt="" />
                        </div>
                        <div>
                            <h4 className='text-2xl'>24/7 Customer Service</h4>
                            <p className="text-white">Call us 24/7 at 123-456-789</p>
                        </div>

                    </div>







                </div>





                <div>
                    <h1 className="text-center mt-10  underline text-5xl">Photo Gallery</h1>

                    <div className="mt-10 ml-5">
                        <div className="flex  mx-2">

                            <img className="gallery" src={image1} alt="" />
                            <img className="gallery" src={image2} alt="" />


                            <img className="gallery" src={image3} alt="" />
                            <img className="gallery" src={image4} alt="" />
                            <img className="gallery" src={image5} alt="" />




                        </div>

                        <div className="flex mx-2 my-5">
                            <img className="gallery" src={image6} alt="" />
                            <img className="gallery" src={image7} alt="" />
                            <img className="gallery" src={image8} alt="" />
                            <img className="gallery" src={image9} alt="" />
                            <img className="gallery" src={image10} alt="" />
                        </div>
                    </div>
                    <hr />
                </div>











            </div>









        </div>
    );
};

export default Banner;
