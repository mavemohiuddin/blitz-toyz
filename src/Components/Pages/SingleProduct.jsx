import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Section from '../Elements/Section';

const SingleProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([])
    
    useEffect(()=> {
        fetch(`https://blitz-toyz-server-mavemohiuddin.vercel.app/toy/${id}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    }, [id])

    return (
        <Section>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div>
                    <img src={product.image} className="max-w-2xl w-full h-96 object-contain border border-black" />
                </div>
                <div>
                    <p className='font-heading text-2xl'>{product.name}<span className='font-sans text-base ml-4'>(rating: {product.rating})</span></p>
                    <p>Quantity: {product.quantity}</p>
                    <p className='mt-3'>Price: ${product.price}</p>
                    <p className='mt-6'>{product.description}</p>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p>Category</p>
                            <p>{product.sub_category}</p>
                        </div>
                        <div>
                            <p>Seller</p>
                            <p>{product.seller_name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default SingleProduct;