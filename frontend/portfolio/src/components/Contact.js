import React from "react";

function Contact() {
    return (
        <div className="h-screen bg-gray-100 flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
                <h1 className="mt-5 text-5xl font-bold text-black">Contact</h1>
            </div>
            <p className="mt-5 text-xl text-gray-600">Feel free to reach out</p>
            
            <div className="mt-10 mb-10 contact-container flex flex-col items-center space-y-6 border border-gray-300 shadow-lg bg-white p-8 rounded-lg w-[750px]">
                <input
                    className="bg-gray-100 w-full h-[50px] px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    type="text"
                    placeholder="Name"
                />
                <input
                    className="bg-gray-100 w-full h-[50px] px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    type="email"
                    placeholder="Email"
                />
                <textarea
                    className="bg-gray-100 w-full h-[150px] px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                    placeholder="Message"
                ></textarea>
                <button
                    className="bg-blue-500 text-white w-full h-[50px] rounded-md hover:bg-blue-600 transition duration-200 ease-in-out"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Contact;
