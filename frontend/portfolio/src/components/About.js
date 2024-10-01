import React from "react";

function About() {
    return (
        <div className="about-container flex flex-col items-center bg-gray-100 py-16">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="about text-5xl font-bold">About Me</h1>
                <p className="about-description text-gray-600 mt-4 text-lg">
                    Here you will find more information about me, what I do, and my current skills in programming and technology.
                </p>
            </div>

            {/* Main Content Section */}
            <div className="main-content-container flex flex-col md:flex-row justify-between items-start w-11/12 lg:w-9/12">
                {/* Left Column - About */}
                <div className="about-details w-full md:w-6/12 mb-10 md:mb-0">
                    <h2 className="text-2xl font-bold mb-4">More about me</h2>
                    <p className="text-gray-700 mb-4">
                        I'm a <strong>Software Engineer</strong> specializing in developing Test Automation infrastructure and Backend Development using FastAPI and PostgreSQL.
                    </p>
                    <p className="text-gray-700">
                        I also enjoy sharing the knowledge I've gained in Software Development, helping others grow in the field. Feel free to connect with me on <a href="#" className="text-primary font-bold">LinkedIn</a>.
                    </p>
                </div>

                {/* Right Column - Skills */}
                <div className="skills w-full md:w-5/12">
                    <h2 className="text-2xl font-bold mb-4">My Skills</h2>
                    <div className="grid grid-cols-3 gap-4">
                        <div>Python</div>
                        <div>FastAPI</div>
                        <div>PostgreSQL</div>
                        <div>Microservices</div>
                        <div>Test Automation</div>
                        <div>React</div>
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>JavaScript</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
