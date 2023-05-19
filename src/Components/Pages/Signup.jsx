import { updateCurrentUser } from 'firebase/auth';
import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../Elements/Section';
import { AuthContext } from '../Utility/AuthProvider';

const Signup = () => {

    const [message, setMessage] = useState("");
    const [messageColor, setMessageColor] = useState("");

    const { auth, createUser } = useContext(AuthContext);

    const googleSignup = (event) => {
        setMessage("");
        event.preventDefault();
        event.stopPropagation();
    }

    const handleSignup = (event) => {
        event.preventDefault();
        setMessage("");

        const email = event.target.email.value;
        const password = event.target.password.value;
        const password2 = event.target.password2.value;
        const name = event.target.name.value;
        const image = event.target.image.value;

        if (password == password2) {
            createUser(email, password)
            .then(result => {
                setMessage("Sign Up Successful!");
                setMessageColor("text-green-400");
            })
            .catch(error=>{
                const errorMessage = error.code.split("/")[1].replaceAll("-", " ");
                setMessage(`Sorry, But ${errorMessage}`);
                setMessageColor("text-red-400");
            })
        } else {
            setMessage("Sorry, But Password Doesn't Match");
            setMessageColor("text-red-400");
        }
    }

    return (
        <Section
        heading="Sign Up"
        subHeading={
            <div className='flex justify-center'>
                <p>Been here before?</p>
                <Link to="/login" className='text-orange-400 transition hover:text-orange-600 ml-2'>
                    Log in
                </Link>
            </div>
        }
        >
        {/* <p className='text-center'></p> */}
            <div className='max-w-md w-full mx-auto mt-6 border rounded'>
                <form onSubmit={handleSignup} className='grid grid-cols-2 gap-3 px-6 py-6 shadow-lg'>
                    <label className='col-span-2 flex items-center gap-4'>
                        <p className='w-28'>Your Name:</p>
                        <input type="text" name="name" className='px-4 py-1 border border-gray-400 rounded-full flex-1' />
                    </label>
                    <label className='col-span-2 flex items-center gap-4'>
                        <p className='w-28'>Your Email<sup className='text-red-400 mx-1'>*</sup>:</p>
                        <input type="email" name="email" className='px-4 py-1 border border-gray-400 rounded-full flex-1' required />
                    </label>
                    <label className='col-span-2 flex items-center gap-4'>
                        <p className='w-28'>Password<sup className='text-red-400 mx-1'>*</sup>:</p>
                        <input type="password" name="password" className='px-4 py-1 border border-gray-400 rounded-full flex-1' required />
                    </label>
                    <label className='col-span-2 flex items-center gap-4'>
                        <p className='w-28'>Confirm Password<sup className='text-red-400 mx-1'>*</sup>:</p>
                        <input type="password" name="password2" className='px-4 py-1 border border-gray-400 rounded-full flex-1' required />
                    </label>
                    <label className='col-span-2 flex items-center gap-4'>
                        <p className='w-28'>Profile Picture:</p>
                        <input type="text" name="image" className='px-4 py-1 border border-gray-400 rounded-full flex-1' />
                    </label>
                    <button className='col-span-2 py-2 bg-primary hover:bg-h-primary text-white transition rounded'>Sign up</button>
                    {message?<p className={`${messageColor} capitalize text-center col-span-2`}>{message}</p>:null}
                    <p className="text-center col-span-2">-------- Quick Sign Up --------</p>
                    <button onClick={googleSignup} className='col-span-2 bg-primary hover:bg-h-primary transition rounded text-white py-2'>Sign Up with Google</button>
                </form>
            </div>
        </Section>
    );
};

export default Signup;