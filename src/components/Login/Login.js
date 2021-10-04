import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='container mx-auto my-8'>
            <h2 className='text-center py-5 text-3xl font-bold text-red-500'>Login Form</h2>
            <div className='flex item-center justify-center	 content-center items-center'>
                <div className="login-bg flex flex-col py-12 px-5 rounded-xl">
                    <label for="email"><b>Email Adress:</b></label>
                    <input className='py-2 px-5 my-3 rounded border border-black outline-none' name='email' type="email" placeholder="type your email address" />
                    <label for="pass"><b>Password:</b></label>
                    <input className='py-2 px-5 my-3 rounded border border-black outline-none' name='pass' type="password" placeholder="type your password" />
                    <button className='hover:bg-red-600 px-3 py-1 font-semibold bg-white w-2/4 mx-auto my-2 rounded-lg border-0 bg-red-500 text-white'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login
