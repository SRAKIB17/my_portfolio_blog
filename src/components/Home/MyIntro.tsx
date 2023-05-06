import React from 'react';

const MyIntro = () => {
    return (
        <section className="px-2 py-32 md:px-0 relative mb-40">
            <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5 relative z-50">
                <div className="flex flex-wrap items-center sm:-mx-3">
                    <div className="w-full md:w-1/2 md:px-3">
                        <div
                            className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                            <h1
                                className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                                <span className="block xl:inline text-white">
                                    Useful Tools to &nbsp;
                                </span>
                                <span className="block text-primary xl:inline">
                                    Help You Build Faster.
                                </span>
                            </h1>
                            <p className="mx-auto text-base-100 sm:max-w-md lg:text-xl md:max-w-3xl ">
                                It{"'"}s never been
                                easier to build beautiful websites that convey your message and tell your story.
                            </p>
                            <div className="flex flex-wrap gap-4 w-fit sm:space-x-4 sm:w-full">
                                <a href="#_"
                                    className="flex w-40 items-center px-6 py-3 mb-3 text-lg text-white bg-primary rounded-md sm:mb-0 hover:bg-primary-focus sm:w-fit">
                                    Try It Free
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </a>
                                <a href="#_"
                                    className="w-40 flex items-center px-6 py-3 mb-3 text-lg text-gray-500 bg-gray-100 rounded-md sm:mb-0 hover:bg-gray-200 hover:text-gray-600 sm:w-fit">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                            <img
                                src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default MyIntro;