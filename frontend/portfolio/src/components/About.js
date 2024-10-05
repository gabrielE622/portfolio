import React, { useState, useEffect } from "react";

function About() {
    const [hoveredBadge, setHoveredBadge] = useState(null);
    const [clickedBadge, setClickedBadge] = useState(null);
    const [message, setMessage] = useState("I built a full stack system using Python, FastAPI, and PostgreSQL on the backend, integrating with GitLab and TestRail to manage test runs and tickets. The frontend, developed with React and Tailwind CSS, displays real-time data in a user-friendly portal. This solution was used company-wide to streamline testing and ticket management.");
    const [showTechContainer, setShowTechContainer] = useState(false);

    const handleMouseEnter = (id) => {
        if (!clickedBadge) {
            setHoveredBadge(id);
        }
    };

    const handleMouseExit = () => {
        if (!showTechContainer) {
            setHoveredBadge(null);
        }
    };

    const handleClicked = (id) => {
        setShowTechContainer((prevState) => {
            if (clickedBadge === id) {
                // If clicked again on the same badge, hide the container
                setClickedBadge(null);
                return false;
            } else {
                // Otherwise, show the container and set the clicked badge
                setClickedBadge(id);
                setHoveredBadge(id);
                return true;
            }
        });
    };

    const skills = [
        { id: "python-badge", name: "Python" },
        { id: "java-badge", name: "Java" },
        { id: "fastapi-badge", name: "FastAPI" },
        { id: "psql-badge", name: "PostgreSQL" },
        { id: "ms-badge", name: "Microservices" },
        { id: "ta-badge", name: "Test Automation" },
        { id: "react-badge", name: "React" },
        { id: "html-badge", name: "HTML" },
        { id: "css-badge", name: "CSS" },
        { id: "js-badge", name: "JavaScript" },
    ];

    const pythonAssociation = ["python-badge", "fastapi-badge", "psql-badge", "react-badge", "ms-badge", "ta-badge"];
    const javaAssociation = ["java-badge", "ms-badge", "ta-badge"];

    return (
        <div className="about-container flex flex-col items-center bg-gray-100 py-16">
            <div className="text-center mb-12">
                <h1 className="about text-5xl font-bold">About Me</h1>
                <p className="about-description text-gray-600 mt-4 text-lg">
                    Here you will find more information about me, what I do, and my current skills in programming and technology.
                </p>
            </div>

            <div className="main-content-container flex flex-col md:flex-row justify-between items-start w-11/12 lg:w-9/12">
                <div className="about-details w-full md:w-6/12 mb-10 md:mb-0">
                    <h2 className="text-2xl font-bold mb-4">More about me</h2>
                    <p className="text-gray-700 mb-4">
                        I'm a <strong>Software Engineer</strong> specializing in developing Test Automation infrastructure and Backend Development using FastAPI and PostgreSQL.
                    </p>
                    <p className="text-gray-700">
                        I also enjoy sharing the knowledge I've gained in Software Development, helping others grow in the field. Feel free to connect with me on <a href="https://www.linkedin.com/in/gabriel-espinosa-80a715188/" className="text-primary font-bold">LinkedIn</a>.
                    </p>
                    {hoveredBadge && showTechContainer && (
                        <div className="text-stack-container mt-5 w-[550px] h-[200px] border-2 border-gray rounded">
                            <h1 className="text-blue-400 text-lg">{message}</h1>
                        </div>
                    )}
                </div>

                <div className="skills w-full md:w-5/12">
                    <h2 className="text-2xl font-bold mb-2">My Skills</h2>
                    <div className="skills grid grid-cols-2 gap-4">
                        {skills.map((skill) => (
                            <div
                                key={skill.id}
                                id={skill.id}
                                onMouseEnter={() => handleMouseEnter(skill.id)}
                                onMouseLeave={handleMouseExit}
                                onClick={() => handleClicked(skill.id)}
                                className={`cursor-pointer h-[40px] w-[150px] rounded-lg shadow-lg flex justify-center items-center transition-transform transform hover:scale-105 ${
                                    (pythonAssociation.includes(skill.id) && hoveredBadge === "python-badge") ||
                                    (javaAssociation.includes(skill.id) && hoveredBadge === "java-badge")
                                        ? "bg-blue-600"
                                        : "bg-primary"
                                }`}
                            >
                                {skill.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
