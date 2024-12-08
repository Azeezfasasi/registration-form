import React from "react";
import { Helmet } from "react-helmet";
import RegNav from "../assets/components/RegNav";
import { Link } from "react-router-dom";
import remortwork from '../assets/images/remotework.svg';
import hire from '../assets/images/hire.svg';
import rightimg from '../assets/images/rightimg.svg';

function Reg2SignUp() {
    return (
        <>
        <RegNav />
        <Helmet>
            <title>Registration Two</title>
        </Helmet>
        {/*  */}
        <div className="bg-[#ffffff] h-screen relative overflow-hidden">
            {/* Main Content */}
            <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-center md:justify-between">
                {/* Left Section */}
                <div className="text-center md:text-left mb-8 md:mb-0">
                <p className="text-lg md:text-xl text-[#000000] mb-4">Sign up to</p>
                <h1 className="text-2xl md:text-3xl font-semibold text-[#000000] mb-4">
                    abc.com
                </h1>
                <p className="text-sm md:text-base text-[#8d8d8d] mb-6">
                    Are you looking for a remote job or hiring remote talent?
                </p>

                {/* Signup Options */}
                <div className="space-y-4">
                    {/* Option 1 */}
                    <Link
                    to=""
                    className="flex items-center p-4 rounded-lg border border-[#e5e5e5] hover:shadow-md transition"
                    >
                    <img
                        className="w-10 h-10 rounded-full mr-4"
                        src={remortwork}
                        alt="Option Icon"
                    />
                    <div>
                        <h3 className="text-base md:text-lg font-semibold text-[#000000]">
                        I’m a remote worker
                        </h3>
                        <p className="text-xs md:text-sm text-[#8c8c8c]">
                        I’m an employee looking for a remote job
                        </p>
                    </div>
                    </Link>

                    {/* Option 2 */}
                    <Link
                    to=""
                    className="flex items-center p-4 rounded-lg border border-[#e5e5e5] hover:shadow-md transition"
                    >
                    <img
                        className="w-10 h-10 rounded-full mr-4"
                        src={hire}
                        alt="Option Icon"
                    />
                    <div>
                        <h3 className="text-base md:text-lg font-semibold text-[#000000]">
                        I want to hire employees
                        </h3>
                        <p className="text-xs md:text-sm text-[#8c8c8c]">
                        I’m an employer hiring remote talent
                        </p>
                    </div>
                    </Link>
                </div>
                </div>

                {/* Right Section (Quote Section) */}
                <div className="hidden md:flex flex-col items-start justify-center text-left max-w-md relative">
                {/* Background Image */}
                <img
                    className="w-full h-auto object-cover rounded-lg"
                    src={rightimg}
                    alt="Background"
                />
                <div className="absolute top-30 right-0 w-[400px]">
                    <p className="text-xl md:text-2xl font-semibold text-[#000000] mt-4">
                        abc.com is the best place to find remote talent. We’ve been super
                        impressed by the quality of applicants.
                    </p>
                    <p className="text-sm md:text-base text-[#000000] mt-2">
                        Madhushan Sasanka
                    </p>
                    <p className="text-xs md:text-sm text-[#8c8c8c]">CEO, abc.com</p>
                </div>
                </div>
            </div>

            {/* Footer */}
            <div className="text-center mt-8 md:mt-16">
                <p className="text-xs md:text-sm text-[#000000]">
                Already have an account?{" "}
                <a href="/signin" className="text-blue-500 underline">
                    Sign in
                </a>
                </p>
            </div>
        </div>
        </>
    )
}

export default Reg2SignUp