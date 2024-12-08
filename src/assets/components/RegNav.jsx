import React from "react";
import { Link } from "react-router-dom";

function RegNav() {
    return (
        <>
        <div className="bg-sky-400 pt-3 pb-3 flex flex-wrap items-center justify-center  sticky top-0 z-50">
            <div className="flex flex-wrap justify-center gap-5 md:justify-between">
                <Link to="/" className="cursor-pointer text-lg hover:underline hover:text-red-500">
                Registration 1
                </Link>
                <Link to="/forms/reg2signup" className="cursor-pointer text-lg hover:underline hover:text-red-500">
                Registration 2
                </Link>
                <Link to="/forms/reg3signup" className="cursor-pointer text-lg hover:underline hover:text-red-500">
                Registration 3
                </Link>
                <Link to="/forms/reg4signup" className="cursor-pointer text-lg hover:underline hover:text-red-500">
                Registration 4
                </Link>
            </div>
        </div>
        </>
    )
}

export default RegNav;