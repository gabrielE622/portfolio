import React, { useState } from "react";
import Button from '../custom/Button';

function Exams() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const questions = [
        {
            question: "What is AWS?",
            options: [
                "A cloud service provider",
                "Internet company",
                "Bookstore",
                "Ecommerce company"
            ]
        },
        {
            question: "What is React?",
            options: [
                "A front-end library",
                "A backend framework",
                "A database",
                "A programming language"
            ]
        }
    ];

    const handleClick = (option) => {
        setSelectedOption(option);  
        console.log(option);        
    };

    const handleSubmit = () => {
        if (selectedOption) {
            alert(`You selected: ${selectedOption}`);
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setSelectedOption(null); 
            } else {
                alert("Quiz finished!");
            }
        } else {
            alert("Please select an option.");
        }
    };

    if (!questions[currentQuestionIndex] || !questions[currentQuestionIndex].options) {
        return <div>Error: Questions data is invalid</div>;
    }

    return (
        <div>
            <div className="bg-black h-screen flex justify-center items-center">
                <div className="bg-white w-[500px] h-auto p-6 rounded shadow-lg">
                    <h1 className="mb-8 text-lg font-bold text-black text-center">
                        {questions[currentQuestionIndex].question}
                    </h1>

                    {questions[currentQuestionIndex].options.map((option, index) => (
                        <div key={index} className="flex items-center mb-4">
                            <button
                                className={`h-[25px] w-[25px] rounded-full bg-white hover:bg-primary border-2 border-black mr-4 ${
                                    selectedOption === option ? "bg-primary" : ""
                                }`}
                                onClick={() => handleClick(option)}
                            ></button>
                            <h1 className="text-black">{option}</h1>
                        </div>
                    ))}

                    <div className="flex justify-center items-center">
                        <Button title="Submit" type="exam-submit-button" onClick={handleSubmit} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Exams;
