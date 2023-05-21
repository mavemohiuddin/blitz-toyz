import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateToy = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([])
    
    useEffect(()=> {
        fetch(`https://blitz-toyz-server-mavemohiuddin.vercel.app/toy/${id}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    }, [id])
    
    return (
        <div>
            Update
        </div>
    );
};

export default UpdateToy;