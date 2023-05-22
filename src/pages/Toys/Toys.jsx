import React, { useEffect, useState } from 'react';
import Toy from '../Toy/Toy';

const Toys = () => {
    const [toys,setToys]=useState([]);
    const [active,setActive]=useState("Sports Car");
    useEffect(()=>{
        fetch('http://localhost:5000/alltoys')
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[])
    console.log(active);
    return (
<div className="flex flex-col items-center bg-white">
  <h1 className="text-center text-5xl  mb-5 text-blue-700 py-10 underline">Toy Cars category</h1>
  <div className="flex w-full justify-center mb-4 ">
    <button style={{width:'300px'}} onClick={() => setActive("Sports Car")} className="button mx-1 w-full bg-blue-700 hover:bg-blue-500 text-white font-semibold rounded-lg">Sports Car</button>
    <button style={{width:'300px'}} onClick={() => setActive("Fire Truck")} className="button mx-1 w-full sm:w-auto sm:mx-3 bg-blue-700 hover:bg-blue-500 text-white font-semibold rounded-lg">Fire Truck</button>
    <button style={{width:'300px'}} onClick={() => setActive("Police Car")} className="button mx-1 w-full sm:w-auto sm:mx-3 bg-blue-700 hover:bg-blue-500 text-white font-semibold rounded-lg">Police Car</button>
  </div>

 <div className='bg-blue-700 rounded-lg m-10'>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-6">
    {toys.map(toy => toy.category === active && <Toy key={toy._id} toy={toy}></Toy>)}
  </div>
 </div>
</div>


    );
};

export default Toys;