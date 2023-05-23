import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch(`https://assignment-11-server-sage.vercel.app/mytoys/${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user])

    const handleDelete = (id) => {
        //console.log("deleted")
        const proceed = confirm("Are you sure you want to delete");
        if (proceed) {
            fetch(`https://assignment-11-server-sage.vercel.app/mytoys/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remaining = toys.filter(toy => toy?._id !== id);
                        setToys(remaining);
                    }
                })
        }
    }
    return (
        <div className="overflow-x-auto mb-12">
            <table className="table table-compact w-full mx-2">
                <thead>
                    <tr>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Sub-Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {toys.map(toy =>

                        <tr key={toy?._id}>

                            <th>{toy?.postedBy}</th>
                            <td>{toy?.toyname}</td>
                            <td>{toy?.category}</td>
                            <td>{toy?.price}</td>
                            <td>{toy?.quantity}</td>
                            <td>
                                <Link to={`/updatetoys/${toy?._id}`}>

                                    <button style={{ backgroundColor: "#0041C2", border: "none" }} className="btn btn-info me-2"><FaEdit style={{ backgroundColor: "inherit", color: "#FFFFFF" }}></FaEdit></button></Link>
                               


                                <button onClick={() => handleDelete(toy?._id)} style={{ backgroundColor: "#FFFFFF", border: "none" }} className="btn btn-error"><FaTrash></FaTrash></button>
                            </td>
                        </tr>)}
                </tbody>

            </table>
        </div>
    );
};

export default MyToys;