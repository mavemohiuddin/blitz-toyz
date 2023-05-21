import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Section from '../Elements/Section';

const UpdateToy = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();
    
    useEffect(()=> {
        fetch(`https://blitz-toyz-server-mavemohiuddin.vercel.app/toy/${id}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    }, [id])

    const updateProduct = (e) => {
        e.preventDefault();

        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const description = e.target.description.value;

        const updateProduct = {
            price, quantity, description
        }

        fetch(`https://blitz-toyz-server-mavemohiuddin.vercel.app/toy/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateProduct)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount) {
                Swal.fire({
                    title:'Congratulations!',
                    html:'Product Updated Successfully!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 3500
                })
                // setTimeout(()=>navigate(""), 3500)
                navigate("/mytoyz", {replace:true})
            }
        })
    }
    
    return (
        <Section>
            <form onSubmit={updateProduct} className="max-w-lg w-full mx-auto flex flex-col gap-4">
                <label className='flex flex-col gap-2'>
                    Price:
                    <input type="text" name="price" placeholder={product.price} className="px-2 py-1 border-gray-300 border" />
                </label>
                <label className='flex flex-col gap-2'>
                    Available Quantity:
                    <input type="text" name="quantity" placeholder={product.quantity} className="px-2 py-1 border-gray-300 border" />
                </label>
                <label className='flex flex-col gap-2'>
                    Description:
                    <textarea type="text" name="description" placeholder={product.description} className="px-2 py-1 border-gray-300 border h-28 resize-none" />
                </label>
                <button className='px-4 py-2 rounded transition bg-primary hover:bg-h-primary text-white'>Confirm</button>
            </form>
        </Section>
    );
};

export default UpdateToy;