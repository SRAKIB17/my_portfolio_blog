/* eslint-disable @next/next/no-img-element */
import React from 'react';

const MyWorkProcess = () => {
    return (
        <section className="w-full pt-7 pb-7 md:pt-20 md:pb-24 relative">

            <div className=' lg:mx-10 hover_circle glass lg:rounded-box -mt-48  bg-opacity-60 xl:pb-0 overflow-hidden'>
                <div className="left_circle -bottom-10"></div>
                <div className="right_circle"></div>
                <div
                    className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

                    {/* <!-- Image --> */}
                    <div
                        className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
                        <img src="https://cdn.devdojo.com/images/december2020/productivity.png"
                            className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 " alt='' />
                    </div>

                    {/* <!-- Content --> */}
                    <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                        <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl text-white">
                            Boost Productivity
                        </h2>
                        <p className="pt-4 pb-8 m-0 leading-7 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg text-primary">
                            Build an atmosphere that creates productivity in your organization or project and your company culture.
                        </p>
                        <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                            <li className="box-border relative py-1 pl-0 text-left  text-white border-solid">
                                <span
                                    className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-info rounded-full">
                                    <span
                                        className="text-sm font-bold">✓</span>
                                </span>
                                Maximize productivity and growth
                            </li>
                            <li className="box-border relative py-1 pl-0 text-left  text-white border-solid">
                                <span
                                    className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-info rounded-full"><span
                                        className="text-sm font-bold">✓</span></span> Speed past your competition
                            </li>
                            <li className="box-border relative py-1 pl-0 text-left  text-white border-solid">
                                <span
                                    className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-info rounded-full"><span
                                        className="text-sm font-bold">✓</span></span> Apply the top technologies
                            </li>
                        </ul>
                    </div>
                    {/* <!-- End  Content --> */}
                </div>
                <div
                    className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">

                    {/* <!-- Content --> */}
                    <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
                        <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl text-white">
                            Automated Tasks
                        </h2>
                        <p className="pt-4 pb-8 m-0 leading-7 border-0 border-gray-300 sm:pr-10 lg:text-lg text-primary">
                            Save time and money with our revolutionary services. We are the leaders in the industry.
                        </p>
                        <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                            <li className="box-border relative py-1 pl-0 text-left text-white border-solid">
                                <span
                                    className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-info rounded-full"><span
                                        className="text-sm font-bold">✓</span></span> Automated task management workflow
                            </li>
                            <li className="box-border relative py-1 pl-0 text-left text-white border-solid">
                                <span
                                    className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-info rounded-full"><span
                                        className="text-sm font-bold">✓</span></span> Detailed analytics for your data
                            </li>
                            <li className="box-border relative py-1 pl-0 text-left text-white border-solid">
                                <span
                                    className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-info rounded-full"><span
                                        className="text-sm font-bold">✓</span></span> Some awesome integrations
                            </li>
                        </ul>
                    </div>
                    {/* <!-- End  Content -->

                    <!-- Image --> */}
                    <div
                        className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
                        <img src="https://cdn.devdojo.com/images/december2020/settings.png" className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32" alt='' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyWorkProcess;