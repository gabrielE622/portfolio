import React, { useState } from "react";
import Messages from "../constants/Messages";

function About() {
    const [hoveredBadge, setHoveredBadge] = useState(null);
    const [clickedBadge, setClickedBadge] = useState(null);
    const [message, setMessage] = useState("");
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
                if (id === "python-badge") {
                    setMessage(Messages.pythonTechStack)
                }
                if (id === "java-badge") {
                    setMessage(Messages.javaTechStack)
                }
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
        <div id="about-me-section" className="about-container flex flex-col items-center bg-gray-100 py-16">
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
                        <div className="text-stack-container mt-3 w-[650px] h-[200px] p-6 bg-gradient-to-br from-white to-blue-50 border border-gray-200 shadow-lg rounded-xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
                            <h1 className="text-blue-600 text-lg font-semibold leading-relaxed">
                                {message}
                            </h1>
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
                                className={`cursor-pointer h-[40px] w-[150px] rounded-lg shadow-lg flex justify-center items-center transition-transform transform hover:scale-105 ${(pythonAssociation.includes(skill.id) && hoveredBadge === "python-badge") ||
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
