import React from 'react';
import faceb from '../assets/images/faceb.svg';
import google from '../assets/images/google.svg';
import arrow from '../assets/images/arrow.svg';
import RegNav from '../assets/components/RegNav';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import signup1 from '../assets/images/signup1.svg';

function Reg1SignUp() {

  return (
    <>
    <Helmet>
      <title>Registration One</title>
    </Helmet>
    <RegNav />
    <div className="bg-white min-h-screen relative overflow-hidden flex flex-col lg:flex-row sm:gap-8 lg:gap-0">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 border border-solid border-red h-full relative p-6 sm:p-8 md:p-12">
          <div className="text-black text-left font-bold text-3xl sm:text-4xl md:text-5xl mb-8">
            Sign Up
          </div>

          {/* Social Buttons */}
          <div className="mb-8">
            <div className="flex items-center justify-center sm:justify-start mb-4">
              <div className="border-t-2 border-black w-16 mr-4"></div>
              <div className="text-pink-400 font-bold text-base">Sign up with</div>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
              <button className="w-full sm:w-[45%] border border-gray-300 rounded-md p-2 flex items-center gap-2">
                <img src={google} alt="Google" className="w-6 h-6" />
                <span className="text-gray-600 text-sm">Continue with Google</span>
              </button>
              <button className="w-full sm:w-[45%] border border-gray-300 rounded-md p-2 flex items-center gap-2">
                <img src={faceb} alt="Facebook" className="w-6 h-6" />
                <span className="text-gray-600 text-sm">Continue with Facebook</span>
              </button>
            </div>
          </div>

          <div className="text-center text-xl font-bold mb-6">or</div>

          {/* Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Abc"
                className="w-full bg-[#fafdff] border border-gray-300 rounded-md p-3" required/>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="abc@abc.com"
                className="w-full bg-[#fafdff] border border-gray-300 rounded-md p-3" required/>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                placeholder="******"
                className="w-full bg-[#fafdff] border border-gray-300 rounded-md p-3" required/>
            </div>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                className="w-5 h-5 border border-gray-300 rounded" required/>
              <span className="text-sm">
                I’ve read and agree with the terms of service and our privacy policy.
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white rounded-md py-3 font-medium hover:bg-pink-600"
            >
              Sign Up
            </button>
          </form>

          <div className="text-center mt-6 text-sm">
            Already have an account?{" "}
            <Link to="/forms/reg1signin" className="text-pink-400 font-medium">
              Sign in
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <img
          className="w-full lg:w-[50%] h-auto object-cover hidden lg:block"
          src={signup1}
          alt="Sign Up"
        />
    </div>

    </>
  )
}

export default Reg1SignUp;
