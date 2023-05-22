import React from 'react';
import './Banner.css';
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@800&family=Mogra&family=Open+Sans&family=Work+Sans:wght@400;500;700&display=swap" rel="stylesheet"></link>


const Banner = () => {
    return (
        <div>






            <div className='bg-white py-5'>
                <div className="flex mx-auto gap-5">

                    <div>

                        <img src="image/header.png" className="img-fluid" alt="" />

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
                            <img src="image/delivery.png" alt="" />
                        </div>
                        <div>
                            <h4 className='text-2xl'>Free Shipping Worldwide</h4>
                            <p className="text-white">On order over $150</p>
                        </div>
                    </div>


                    <div className="flex items-center  text-white" >
                        <div>
                            <img src="image/doller.png" alt="" />
                        </div>
                        <div>
                            <h4 className='text-2xl'>Cash On Delivery</h4>
                            <p className="text-white">100% money back guarantee</p>
                        </div>
                    </div>



                    <div className="flex items-center  text-white " >
                        <div>
                            <img src="image/girl.png" alt="" />
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

                            <img className="gallery" src="image/car1.jpg" alt="" />
                            <img className="gallery" src="image/car2.jpg" alt="" />


                            <img className="gallery" src="image/car3.jpg" alt="" />
                            <img className="gallery" src="image/car4.jpg" alt="" />
                            <img className="gallery" src="image/car5.jpg" alt="" />




                        </div>

                        <div className="flex mx-2 my-5">
                            <img className="gallery" src="image/car6.jpg" alt="" />
                            <img className="gallery" src="image/car7.jpg" alt="" />
                            <img className="gallery" src="image/car8.jpg" alt="" />
                            <img className="gallery" src="image/car9.jpg" alt="" />
                            <img className="gallery" src="image/car10.jpg" alt="" />
                        </div>
                    </div>
                    <hr />
                </div>











            </div>









        </div>
    );
};

export default Banner;
