import React from 'react';
import { Link } from 'react-router-dom';

const CardSmall = (props) => {
    const {_id, name, image, Sub_category, seller_name, seller_email, price, rating, quanity, description} = props.product;
    return (
        <div className='px-6 py-4 rounded shadow-md border'>
            <p>{name}</p>
            <img src={image} className="w-full h-40 object-contain" />
            <Link to={`/toy/${_id}`} className="px-4 py-2 bg-primary hover:bg-h-primary transition text-white rounded mt-12 block max-w-max">View Details</Link>
        </div>
    );
};

export default CardSmall;