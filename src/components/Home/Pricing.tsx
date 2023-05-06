import React from 'react';

const Pricing = () => {
    return (
        <section
            className="box-border py-8 leading-7 text-gray-900  border-0 border-gray-200 border-solid sm:py-12 md:py-16 lg:py-24 relative z-50">
            <div className="box-border max-w-6xl px-4 pb-12 mx-auto border-solid sm:px-6 md:px-6 lg:px-4">
                <div className="flex flex-col items-center leading-7 text-center text-gray-900">
                    <h2
                        className="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-white border-solid sm:text-4xl md:text-5xl">
                        Pricing Options
                    </h2>
                    <p className="box-border mt-4 text-2xl leading-normal text-primary border-solid">
                        We{"'"}ve got a plan for companies of any size
                    </p>
                </div>
                <div
                    className="grid max-w-md mx-auto mt-6 overflow-hidden leading-7 text-gray-900 border border-b-4  border-primary-focus rounded-xl md:max-w-lg lg:max-w-none sm:mt-10 lg:grid-cols-3">
                    <div
                        className="box-border px-4 py-8 mb-6 text-center bg-white border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
                        <h3
                            className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                            Basic
                        </h3>
                        <p className="mt-3 leading-7 text-gray-900 border-0 border-solid">
                            The basic plan is a good fit for smaller teams and startups
                        </p>
                        <div
                            className="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
                            <p
                                className="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
                                $19
                            </p>
                            <p className="box-border my-0 ml-4 mr-0 text-xs text-left border-0 border-gray-200">
                                per user <span className="block">per month</span>
                            </p>
                        </div>

                        <button
                            className="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-primary no-underline bg-transparent border border-b-2 border-primary rounded-md cursor-pointer  hover:border-primary-focus hover:bg-primary-focus hover:text-white sm:text-base sm:mt-8 md:text-lg">
                            Select Plan
                        </button>
                    </div>
                    <div
                        className="box-border px-4 py-8 mb-6 text-center bg-gray-100 border border-gray-300 border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
                        <h3
                            className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                            Plus
                        </h3>
                        <p className="mt-3 leading-7 text-gray-900 border-0 border-solid">
                            The plus plan is a good fit for medium-size to larger companies
                        </p>
                        <div
                            className="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
                            <p
                                className="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
                                $39
                            </p>
                            <p className="box-border my-0 ml-4 mr-0 text-xs text-left border-0 border-gray-200">
                                per user <span className="block">per month</span>
                            </p>
                        </div>
                        <button
                            className="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-white no-underline border-b-4 border-primary bg-primary rounded hover:bg-primary-focus cursor-pointer hover:text-white sm:text-base sm:mt-8 md:text-lg">
                            Select Plan
                        </button>
                    </div>
                    <div
                        className="box-border px-4 py-8 text-center bg-white border-solid sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
                        <h3
                            className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                            Pro
                        </h3>
                        <p className="mt-3 leading-7 text-gray-900 border-0 border-solid">
                            The pro plan is a good fit for larger and enterprise companies.
                        </p>
                        <div
                            className="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
                            <p
                                className="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
                                $59
                            </p>
                            <p className="box-border my-0 ml-4 mr-0 text-xs text-center border-0 border-gray-200">
                                per user <span className="block">per month</span>
                            </p>
                        </div>
                        <button
                            className="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-primary no-underline bg-transparent border border-b-2 border-primary rounded cursor-pointer hover:bg-primary-focus hover:border-primary-focus hover:text-white sm:text-base sm:mt-8 md:text-lg">
                            Select Plan
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;