import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Section from '../Elements/Section';
import { AuthContext } from '../Utility/AuthProvider';
import setTitle from '../Utility/Common';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [allProduct, setAllProduct] = useState([]);
    const [sortOrder, setSortOrder] = useState("asc");

    useEffect(() => {
        fetch("https://blitz-toyz-server-mavemohiuddin.vercel.app/toys")
            .then(res => res.json())
            .then(data => setAllProduct(data))
    }, [])

    const filteredProduct = allProduct.filter(product => product.useremail == user.email);

    const sortProduct = e => {
        setSortOrder(e.target.value);
        filteredProduct.sort((a, b) => {
            if (sortOrder == "asc") {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
    }

    const deleteProduct = (id) => {
        Swal.fire({
            title: `Are you Sure?`,
            icon: 'info',
            html: `Confrim Delete this product?`,
            showCancelButton: true,
            cancelButtonText: "Cancel",
            confirmButtonText: "Confirm"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://blitz-toyz-server-mavemohiuddin.vercel.app/toy/${id}`, {
                    method: "DELETE"
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: 'Congratulations!',
                                html: 'Product Added Successfully!',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 3500
                            })

                            const newGroup = filteredProduct.filter(toy => toy._id !== id)
                            setAllProduct(newGroup)
                        }
                    })
            }
        })
    }

    setTitle("Blitz | My Toyz");
    return (
        <Section preHeading="Blitz Toyz" heading="My Toyz">
            <div className='mt-6 flex items-center justify-evenly'>
                <div className='max-w-max flex gap-6 items-center'>
                    <p>Sort By - </p>
                    <select onChange={(e)=>sortProduct(e)} name="orderPrice" className='border border-ray-400 px-4 py-2'>
                        <option value="asc">Ascending</option>
                        <option value="des">Descending</option>
                    </select>
                </div>
            </div>
            <div className='grid grid-cols-12 border-t border-l mt-6'>
                <div className='p-4 border-b border-r col-span-3 text-center font-semibold py-2'>
                    <p>Product</p>
                </div>
                <div className='p-4 border-b border-r col-span-2 text-center font-semibold py-2'>
                    <p>Details</p>
                </div>
                <div className='p-4 border-b border-r col-span-5 text-center font-semibold py-2'>
                    <p>Description</p>
                </div>
                <div className='p-4 border-b border-r col-span-2 text-center font-semibold py-2'>
                    <p>Action</p>
                </div>
            </div>
            {filteredProduct.map(product => {
                return (
                    <div key={product._id}>
                        <div className='grid grid-cols-12 border-t border-l'>
                            <div className='p-4 border-b border-r col-span-3 text-left font-semibold py-2 flex gap-3'>
                                <img src={product.image} className="h-12 w-12" />
                                <div>
                                    <p>{product.name} <span className='text-xs'>(rating: {product.rating})</span></p>
                                    <p>Category: {product.sub_category}</p>
                                </div>
                            </div>
                            <div className='p-4 border-b border-r col-span-2 text-center py-2'>
                                <p>Price: ${product.price}</p>
                                <p>Available: {product.quantity}</p>
                            </div>
                            <div className='p-4 border-b border-r col-span-5 text-center py-2'>
                                <p>{product.description}</p>
                            </div>
                            <div className='p-4 border-b border-r col-span-2 text-center py-2'>
                                <div className='flex items-center gap-2 justify-center'>
                                    <button onClick={() => deleteProduct(product._id)} className="px-2 py-2 bg-primary hover:bg-h-primary transition text-white rounded">Delete</button>
                                    <Link to={`/update-toy/${product._id}`} className="px-2 py-2 bg-primary hover:bg-h-primary transition text-white rounded">Update</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </Section>
    );
};

export default MyToys;