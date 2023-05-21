import React from 'react';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import Section from '../Elements/Section';
import { AuthContext } from '../Utility/AuthProvider';
import setTitle from '../Utility/Common';

const AddToy = () => {

    const { user } = useContext(AuthContext);

    const handleProduct = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const image = event.target.image.value;
        const rating = event.target.rating.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const description = event.target.description.value;
        const sub_category = event.target.sub_category.value;
        const username = event.target.username.value.length == 0 ? user.displayName : event.target.username.value;
        const useremail = user.email;
        event.target.reset();

        const newProduct = {
            name,
            image,
            seller_name: username,
            seller_email: useremail,
            sub_category,
            price,
            rating,
            quantity,
            description
        }

        fetch("https://blitz-toyz-server-mavemohiuddin.vercel.app/toys", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title:'Congratulations!',
                        html:'Product Added Successfully!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 3500
                    })
                }
            })
    }
    setTitle("Blitz | Add Toyz");
    return (
        <div>
            <Section preHeading="Blitz Toyz" heading="Add a Toy">
                <form onSubmit={handleProduct} className='max-w-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <label className='flex flex-col gap-2'>
                        Name:
                        <input name="name" className='border rounded border-gray-400 px-2 py-1' required />
                    </label>
                    <label className='flex flex-col gap-2'>
                        Image URL:
                        <input name="image" className='border rounded border-gray-400 px-2 py-1' required />
                    </label>
                    <label className='flex flex-col gap-2'>
                        Category:
                        <select name="sub_category" className='border border-gray-400 px-2 py-1 rounded'>
                            <option value="Transformers">Transformers</option>
                            <option value="Marvel">Marvel</option>
                            <option value="LEGO">LEGO</option>
                            <option value="Equipment Toys">Equipment Toys</option>
                        </select>
                    </label>
                    <label className='flex flex-col gap-2'>
                        Price:
                        <input name="price" className='border rounded border-gray-400 px-2 py-1' required />
                    </label>
                    <label className='flex flex-col gap-2'>
                        Rating:
                        <input name="rating" className='border rounded border-gray-400 px-2 py-1' required />
                    </label>
                    <label className='flex flex-col gap-2'>
                        Quantity:
                        <input name="quantity" className='border rounded border-gray-400 px-2 py-1' required />
                    </label>
                    <label className='flex flex-col gap-2'>
                        User Name:
                        <input name="username" className='border rounded border-gray-400 px-2 py-1' placeholder={user.displayName} />
                    </label>
                    <label className='flex flex-col gap-2'>
                        User Email (can not Change):
                        <input name="useremail" className='border rounded border-gray-400 px-2 py-1 text-gray-500' placeholder={user.email} value={user.email} />
                    </label>
                    <label className='flex flex-col gap-2 col-span-2'>
                        Description:
                        <textarea name="description" className='border rounded border-gray-300 p-2 h-24 resize-none' required />
                    </label>
                    <div className='flex items-center justify-between mt-12 col-span-2'>
                        <button className='px-4 py-2 bg-primary hover:bg-h-primary text-white rounded transition'>Submit</button>
                        {/* <button className='px-4 py-2 bg-primary hover:bg-h-primary text-white rounded transition'>Reset</button> */}
                    </div>
                </form>
            </Section>
        </div>
    );
};

export default AddToy;