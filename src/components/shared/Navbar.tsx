import React, { useEffect } from 'react';

const Navbar = () => {
    useEffect(() => {

        window.onscroll = function () { scrolling() };

        const header: any = document.getElementById("header");
        const sticky = header.offsetTop;

        function scrolling() {
            if (window.pageYOffset > sticky) {
                header.style.backgroundColor = '#000851'
            } else {
                header.style.backgroundColor = '#ffffff1c'
            }
        }

    }, [])
    return (
        <section className="w-full px-8 text-gray-700 bg-[#ffffff1c] transition-colors sticky -top-0 " id='header' style={{ zIndex: 100000 }}>
            <div className="container flex items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">

                <div className="relative flex items-center justify-between">

                    {/* for mobile  */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="white" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>

                    <a href="#_" className="flex items-center font-medium text-primary lg:w-auto lg:items-center justify-center">
                        <span className="mx-auto text-xl font-black leading-none text-primary select-none">
                            AI
                            <span className="text-indigo-600">.</span>
                        </span>
                    </a>


                    <nav className="hidden lg:flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200 ">
                        <a href="#_" className="mr-5 font-medium leading-6 text-white hover:text-primary hover:underline">Home</a>
                        <a href="#_" className="mr-5 font-medium leading-6 text-white hover:text-primary hover:underline">Features</a>
                        <a href="#_" className="mr-5 font-medium leading-6 text-white hover:text-primary hover:underline">Pricing</a>
                        <a href="#_" className="mr-5 font-medium leading-6 text-white hover:text-primary hover:underline">Blog</a>
                    </nav>
                </div>

                {/* <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
                    <a href="#" className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                        Sign in
                    </a>
                    <a href="#" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                        Sign up
                    </a>
                </div> */}
            </div>


        </section>

    );
};

export default Navbar;