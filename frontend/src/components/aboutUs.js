import React from "react";

const AboutUs = () => {
    return (
        <section className="">
            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="font-heading mb-4 bg-blue-400 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
                            Why choose us?
                        </h2>
                        <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                            We let you create your own story timeline
                        </p>
                    </div>

                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                        <img
                                            src="https://www.svgrepo.com/show/503163/api-settings.svg"
                                            alt="API Settings"
                                        />
                                    </div>
                                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                                        Powerful API
                                    </p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Our webapp is built on chatGPT API which is
                                    trained on large data for story generation
                                </dd>
                            </div>
                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                        <img
                                            src="https://www.svgrepo.com/show/478727/infinity-symbol.svg"
                                            alt="Webpack"
                                        />
                                    </div>
                                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                                        Infinite possibilities
                                    </p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    {" "}
                                    Write intricate stories with any timeline
                                    you want no bounds over creation
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
