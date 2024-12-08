import React from 'react'
import RegNav from '../assets/components/RegNav'
import reg3img from '../assets/images/reg3img.svg';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Reg3Signin() {
  return (
    <>
    <Helmet>
        <title>Registration Three</title>
    </Helmet>
    <RegNav />
    <div className="bg-[#ffffff] h-screen relative overflow-hidden">
    {/* Left Section */}
    <div className="w-full md:w-[55%] h-full relative">
        <img
            className="w-full h-full object-cover md:h-screen"
            style={{
                boxShadow: "7px 0px 20px 0px rgba(0, 0, 0, 0.15)",
            }}
            src={reg3img}
        />
        <div className="absolute top-8 left-0 p-6 md:p-12">
            <div className="text-[#ffffff] font-bold text-2xl md:text-4xl mb-6">
                abc.com
            </div>
            <div className="text-[#ffffff] font-medium text-lg md:text-2xl mb-6">
                abc.com is the best place to find remote talent. We’ve been super
                impressed by the quality of applicants.
            </div>
            <div>
                <div className="text-[#ffffff] font-normal text-sm md:text-lg">
                    Madhushan Sasanka
                </div>
                <div className="text-[#ffffff] font-medium text-xs md:text-base">
                    CEO, abc.com
                </div>
            </div>
        </div>
    </div>

    {/* Right Section */}
    <div className="w-full md:w-[45%] h-full p-6 md:py-12 absolute top-0 right-0 flex flex-col justify-center items-center">
        <div className="text-[#000000] font-medium text-xl md:text-3xl mb-2">
            Sign In
        </div>
        <div className="text-[#8d8d8d] font-light text-sm md:text-base text-center mb-8">
            Let’s get started with your 30 days free trial
        </div>
        <form className="w-full max-w-md flex flex-col">
            <input
                type="email"
                placeholder="Email"
                className="w-full py-3 border-b-2 border-black text-sm md:text-base mb-4" required
            />
            <input
                type="password"
                placeholder="Password"
                required
                className="w-full py-3 border-b-2 border-black text-sm md:text-base mb-8"
            />
            <button type="submit" className="w-full bg-[#000000] text-white py-4 rounded-lg mb-4">
                Log In
            </button>
            <Link
                to=""
                className="w-full bg-white border border-[#8d8d8d] text-center py-4 rounded-lg"
            >
                Sign in with Google
            </Link>
        </form>
        <div className="text-center mt-6 text-sm">
            <span className="text-[#000000] mr-1">Don't have an account?</span>
            <Link to="/forms/reg3signup" className="text-[#3EC1F3]">
                Sign Up
            </Link>
        </div>
    </div>
</div>

    </>
  )
}

export default Reg3Signin
