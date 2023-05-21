import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Section from '../Elements/Section';
import setTitle from '../Utility/Common';

const AllToys = () => {
    const allProduct = useLoaderData();
    // const [filteredProduct, setFilteredProduct] = useState([])
    // allProduct.filter()

    const filteredProduct = allProduct.filter(product=>!product.id);
    

    setTitle("Blitz | All Toys")
    return (
        <Section>
            {
                filteredProduct.map(product=>{
                    return <div key={product._id}>
                        <div className='grid grid-cols-3 gap-12'>
                            <div className='p-4 border border-black'>
                                <p>{product.name}</p>
                                    <Link to={`/updatetoy/${product._id}`} className='px-4 py-2 bg-orange-400 mt-6' >Update</Link>
                            </div>
                        </div>
                    </div>
                })
            }
        </Section>
    );
};

export default AllToys;