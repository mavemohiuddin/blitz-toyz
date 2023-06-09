import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Utility/AuthProvider';

const CardSmall = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const {_id, name, image, sub_category, seller_name, seller_email, price, rating, quantity, description} = props.product;

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const openProduct = id => {
        if (user) {
            navigate(`/toy/${id}`, {replace:true})
        } else {
            setModalVisible(false);
            Swal.fire({
                title:`You're not logged in!`,
                icon: 'info',
                html:`You Must Log in to view details!`,
                showCancelButton: true,
                cancelButtonText: "Later",
                confirmButtonText: "Log in"
            }).then((result) => {
                if (result.isConfirmed) {
                  navigate("/login", {replace:true});
                  scrollTo(0,0)
                }
            })
        }
    }

    return (
        <div className={`px-6 py-4 rounded shadow-md bg-white border ${modalVisible? "border-black":""} hover:border-black transition cursor-pointer text-left`} onClick={()=>setModalVisible(true)}>
            <div onClick={(e)=>{setModalVisible(false), e.stopPropagation()}} className={`${modalVisible? "fixed":"hidden"} top-0 left-0 h-screen w-screen bg-black bg-opacity-50 grid place-content-center  cursor-default`}>
                <div onClick={(e)=>e.stopPropagation()} className='px-4 py-4 rounded-xl bg-white w-10/12 mx-auto md:max-w-2xl cursor-default relative'>
                    <div className=' grid grid-cols1 md:grid-cols-2 gap-6 border px-6 py-6 rounded-lg border-h-primary'>
                        <img src={image} className="w-full h-32 md:h-60 object-contain" />
                        <div className=''>
                            <p onClick={(e)=>setModalVisible(false)} className='absolute top-2 right-2 flex items-center justify-center h-6 w-6 border border-black rounded-full bg-white cursor-pointer'>X</p>
                            <p className="font-heading text-xl">{name} <span className='ml-2 text-base font-sans whitespace-nowrap'>(★ {rating})</span></p>
                            <div className='flex justify-between md:block'>
                                <p>Price: <span className='font-bold font-heading'>${price}</span></p>
                                <p>Available: <span className='font-bold font-heading'>{quantity}</span></p>
                            </div>
                            <p>Categiry: <span className='font-bold font-heading tracking-wide'>{sub_category}</span></p>
                            <p>Seller: <span className='font-bold font-heading tracking-wide'>{seller_name}</span></p>
                            <p className='h-14 md:h-20 overflow-hidden py-1 text-ellipsis ellipsis'>{description}</p>
                            <button onClick={()=>openProduct(_id)} className="px-4 py-2 bg-primary hover:bg-h-primary transition text-white rounded mt-4 block max-w-max">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
            <img src={image} className="w-full h-40 object-contain mb-6" />
            <p className='font-heading text-2xl'>{name}<span className='font-sans text-base ml-2 whitespace-nowrap'> (★ {rating})</span></p>
            <p className='mt-2'>Price: <span className='font-heading font-bold text-lg'>${price}</span></p>
            <p className='mt-2'>Inspired By - 
                <span className='px-2 py-px ml-2 rounded bg-h-secondary max-w-max'>{sub_category}</span>
            </p>
            <p className='mt-2'>Brought to you by
                <span className='px-2 py-px ml-2 border border-gray-300 max-w-max'>{seller_name}</span>
            </p>
        </div>
    );
};

export default CardSmall;