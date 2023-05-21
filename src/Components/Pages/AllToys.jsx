import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Section from '../Elements/Section';
import { AuthContext } from '../Utility/AuthProvider';
import setTitle from '../Utility/Common';

const AllToys = () => {
    // const allProduct = useLoaderData();
    const { user } = useContext(AuthContext);

    const [allProduct, setAllProduct] = useState([]);
    useEffect(()=>{
        fetch("https://blitz-toyz-server-mavemohiuddin.vercel.app/all-toys")
        .then(res=>res.json())
        .then(data=>setAllProduct(data))
    }, [])

    const filteredProduct = allProduct.filter(product=>!product.id);
    
    setTitle("Blitz | All Toys")
    return (
        <Section>
            <div className='grid grid-cols-12 border-t border-l'>
                <div className='p-4 border-b border-r col-span-3 text-center font-semibold py-2'>
                    <p>Product</p>
                </div>
                <div className='p-4 border-b border-r col-span-2 text-center font-semibold py-2'>
                    <p>Details</p>
                </div>
                <div className='p-4 border-b border-r col-span-4 text-center font-semibold py-2'>
                    <p>Description</p>
                </div>
                <div className='p-4 border-b border-r text-center font-semibold py-2'>
                    <p>Seller</p>
                </div>
                <div className='p-4 border-b border-r col-span-2 text-center font-semibold py-2'>
                    <p>Action</p>
                </div>
            </div>
            {
                filteredProduct.map(product=>{
                    console.log(product)
                    return <div key={product._id}>
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
                            <div className='p-4 border-b border-r col-span-4 text-center py-2'>
                                <p>{product.description}</p>
                            </div>
                            <div className='p-4 border-b border-r text-center py-2'>
                                <p>{product.seller_name}</p>
                                <p>{product.seller_email? <a href={`mailto:${product.seller_email}`}/>:null}</p>
                                {!product.seller_name? !product.seller_email? <p>Not Available</p>:null :null}
                            </div>
                            <div className='p-4 border-b border-r col-span-2 text-center py-2'>
                                <div className='flex items-center gap-2 justify-center'>
                                    <Link to={`/toy/${product._id}`} className="px-2 py-2 bg-primary hover:bg-h-primary transition text-white rounded">Details</Link>
                                    {user && user.email == product.useremail? <Link to={`/update-toy/${product._id}`} className="px-2 py-2 bg-primary hover:bg-h-primary transition text-white rounded">Update</Link>:null}
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </Section>
    );
};

export default AllToys;