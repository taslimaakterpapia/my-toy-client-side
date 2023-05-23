import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../providers/AuthProvider';

const AddToy = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://assignment-11-server-sage.vercel.app/addtoy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        console.log(data)
    };
    return (


        <div>
           <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6  bg-white m-10 rounded-lg shadow-lg">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {errors.exampleRequired && <span className="text-red-500">This field is required</span>}
    <div className="form-control">
      <input
        className="input input-white"
        {...register("toyname")}
        placeholder="Toy Name"
      />
    </div>
    <div className="form-control">
      <input
        className="input input-white"
        {...register("sellername", { required: true })}
        placeholder="Seller Name"
      />
    </div>
    <div className="form-control">
      <input
        className="input input-white"
        {...register("price", { required: true })}
        placeholder="Price"
        type="number"
      />
    </div>
    <div className="form-control">
      <select className="input input-white " {...register("category")}>
        <option value="Sports Car">Sports Car</option>
        <option value="Fire Truck">Fire Truck</option>
        <option value="Police Car">Police Car</option>
      </select>
      <hr />
    </div>
 
    <div className="form-control">
      <input
        className="input input-white"
        {...register("image")}
        placeholder="Image Link"
        type="url"
        defaultValue="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
    </div>
    <div className="form-control">
      <input
        className="input input-white"
        {...register("rating")}
        placeholder="Rating"
        type="text"
      />
    </div>
    <div className="form-control">
      <input
        className="input input-white"
        value={user?.email}
        {...register("postedBy")}
        placeholder="Your Email"
        type="email"
      />
    </div>
    <div className="form-control">
      <input
        className="input input-white"
        {...register("quantity")}
        placeholder="Quantity"
        type="text"
      />
    </div>
    <input
    style={{marginLeft: "140px", backgroundColor:"#0041C2", color:"white"}}
      className="button button-white mt-6 w-full items-center rounded-lg"
      value="Add a Toy"
      type="submit"
    />
  </div>
</form>

        </div>




    );
};

export default AddToy;