import React, { useEffect, useState } from "react";
import Button from "../custom/Button";
import Modal from "../custom/Modal";

const questions = [
  {
    question: "What is AWS?",
    options: [
      "A cloud service provider",
      "Internet company",
      "Traffic Generator",
      "Technology Sales",
    ],
    answer: "A cloud service provider",
  },
  {
    question: "Why use AWS?",
    options: [
      "Cost-effective",
      "Scalable infrastructure",
      "High availability",
      "All of the above",
    ],
    answer: "All of the above",
  },
];

function Exams() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState({ correct: 0, wrong: 0 });
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleClick = (option) => {
    setSelectedOption(option);
    setFeedbackMessage("");
  };

  const handleSubmit = () => {
    if (selectedOption !== currentQuestion.answer) {
      setFeedbackMessage("WRONG! Try again.");
      setScore((prev) => ({ ...prev, wrong: prev.wrong + 1 }));
    } else {
      setFeedbackMessage("CORRECT! Good job!");
      setScore((prev) => ({ ...prev, correct: prev.correct + 1 }));
    }

    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      handleNextQuestion();
    }, 1500);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
    }
  };

  useEffect(() => {}, [selectedOption]);

  if (isFinished) {
    return (
      <div className="bg-black h-screen flex justify-center items-center">
        <div className="bg-white w-[400px] h-[200px] p-4 rounded shadow-lg">
          <h1 className="text-center text-black">
            Exam Finished! Your Score: {score.correct}/{questions.length}
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div>
      {showModal && <Modal message={feedbackMessage} />}

      <div id="exams-section" className="bg-black h-screen flex justify-center items-center">
        <div className="bg-white w-[400px] h-[400px] p-4 rounded shadow-lg relative">
          <h1 className="mb-4 text-black flex justify-center items-center">
            {currentQuestion.question}
          </h1>

          {currentQuestion.options.map((option, index) => (
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
