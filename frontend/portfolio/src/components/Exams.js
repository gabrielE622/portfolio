import React, { useEffect, useState } from "react";
import Button from "../custom/Button";
import Modal from "../custom/Modal";

function Exams() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [feedbackMessage, setFeedbackMessage] = useState("");
    const [showModal, setShowModal] = useState(false);

    const question = {
        question: "What is AWS?",
        options: [
            "A cloud service provider",
            "Internet company",
            "Traffic Generator",
            "Technology Sales",
        ],
        answer: "A cloud service provider"
    };

    const handleClick = (option) => {
        setSelectedOption(option);
        setFeedbackMessage("");
    };

    const handleSubmit = () => {
        if (selectedOption !== question.answer) {
            setFeedbackMessage("WRONG! Try again.");
        } else {
            setFeedbackMessage("CORRECT! Good job!");
            setSelectedOption(null);
        }

        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
        }, 1500); 
    };

    useEffect(() => { }, [selectedOption]);

    return (
        <div>
            {showModal && (
                <Modal message={feedbackMessage} />
            )}

            <div id="exams-section" className="bg-black h-screen flex justify-center items-center">
                <div className="bg-white w-[400px] h-[400px] p-4 rounded shadow-lg relative">
                    <h1 className="mb-4 text-black flex justify-center items-center">{question.question}</h1>

                    {question.options.map((option, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <button
                                className={`h-[25px] w-[25px] rounded-full border-2 border-black mr-4 transition-colors duration-300 ${
                                    selectedOption === option ? "bg-primary" : "bg-white"
                                }`}
                                onClick={() => handleClick(option)}
                            ></button>
                            <span className="text-black">{option}</span>
                        </div>
                    ))}

                    <div className="absolute bottom-10 left-0 w-full flex justify-center">
                        <Button title="Submit" type="exam-submit-button" func={handleSubmit} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Exams;
