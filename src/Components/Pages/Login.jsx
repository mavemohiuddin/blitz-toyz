import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Section from '../Elements/Section';
import { AuthContext } from '../Utility/AuthProvider';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    
    const [message, setMessage] = useState("");
    const [messageColor, setMessageColor] = useState("");

    const {auth, signIn} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const googleLogin = (event) => {
        setMessage("");
        event.stopPropagation();
        event.preventDefault();
        signInWithPopup(auth, googleProvider)
        .then(result=> {
            setMessage("Successfully Logged In!");
            setMessageColor("text-green-400");
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const handleLogin = (event) => {
        event.preventDefault();
        setMessage("");

        const email = event.target.email.value;
        const password = event.target.password.value;

        signIn(email, password)
        .then(result=>{
            setMessage("Log in successful");
            setMessageColor("text-green-400");
            navigate(from, {replace:true})
        })
        .catch(error=>{
            const errorMessage = error.code.split("/")[1].replaceAll("-", " ");
            setMessage(`Sorry, But ${errorMessage}`);
            setMessageColor("text-red-400");
        })
    }
    return (
        <Section
        heading="Log in"
        subHeading={
            <div className='flex justify-center'>
                <p>New Here?</p>
                <Link to="/signup" className='text-orange-400 transition hover:text-orange-600 ml-2'>
                    Sign up
                </Link>
            </div>
        }
        >
        {/* <p className='text-center'></p> */}
            <div className='max-w-md w-full mx-auto mt-6 border rounded'>
                <form onSubmit={handleLogin} className='grid grid-cols-2 gap-3 px-6 py-6 shadow-lg'>
                    <label className='col-span-2 flex items-center gap-4'>
                        <p className='w-20'>Email:</p>
                        <input type="email" name="email" className='px-4 py-1 border border-gray-400 rounded-full flex-1' required />
                    </label>
                    <label className='col-span-2 flex items-center gap-4'>
                        <p className='w-20'>Password:</p>
                        <input type="password" name="password" className='px-4 py-1 border border-gray-400 rounded-full flex-1' required />
                    </label>
                    <p className='col-span-2'>Forgot Password? <span className='text-orange-400 transition hover:text-orange-600 cursor-pointer'>Reset password</span></p>
                    <button className='col-span-2 py-2 bg-primary hover:bg-h-primary text-white transition rounded'>Log in</button>
                    {message?<p className={`${messageColor} capitalize text-center col-span-2`}>{message}</p>:null}
                    <p className='text-center col-span-2'>-------- Quick Log In --------</p>
                    <button onClick={googleLogin} className='col-span-2 bg-primary hover:bg-h-primary transition rounded text-white py-2'>Log in with Google</button>
                </form>
            </div>
        </Section>
    );
};

export default Login;