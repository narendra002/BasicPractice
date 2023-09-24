import React, { useState } from 'react'

function Quiz() {
    const data = [
        {
            "question": "What is the Capital of India?",
            "options": ["Delhi", "Agra", "Bombay", "Kolkata"],
            "answer": "Delhi"
        },
        {
            "question": "What is the largest planet in our solar system?",
            "options": ["Mars", "Jupiter", "Venus", "Saturn"],
            "answer": "Jupiter"
        },
        {
            "question": "Which gas do plants absorb from the atmosphere?",
            "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            "answer": "Carbon Dioxide"
        },
        {
            "question": "Who wrote the play 'Romeo and Juliet'?",
            "options": ["William Shakespeare", "Jane Austen", "Charles Dickens", "Leo Tolstoy"],
            "answer": "William Shakespeare"
        },
        {
            "question": "Which continent is known as the 'Land of Kangaroos'?",
            "options": ["Africa", "Asia", "Australia", "North America"],
            "answer": "Australia"
        },
        {
            "question": "What is the chemical symbol for the element gold?",
            "options": ["Go", "Gl", "Au", "Ag"],
            "answer": "Au"
        },
        {
            "question": "Which planet is known as the 'Red Planet'?",
            "options": ["Venus", "Mars", "Jupiter", "Saturn"],
            "answer": "Mars"
        },
        {
            "question": "What is the national flower of Japan?",
            "options": ["Cherry Blossom", "Rose", "Lotus", "Tulip"],
            "answer": "Cherry Blossom"
        },
        {
            "question": "Who is known as the 'Father of Modern Physics'?",
            "options": ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
            "answer": "Albert Einstein"
        },
        {
            "question": "Which gas makes up the majority of Earth's atmosphere?",
            "options": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
            "answer": "Nitrogen"
        },
        // Add 9 more questions here...
    ];
 

  const [current, setCurrent] = useState(0);

  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleSubmit = () => {
    if (selectedAnswer === data[current].answer) {
      setCorrectAnswer(correctAnswer + 1);
    }

    // Move to the next question or handle the end of the quiz
    if (current < data.length - 1) {
      setCurrent(current + 1);
    } else {
      // Handle the end of the quiz
      alert(`Quiz completed! You got ${correctAnswer} questions correct out of ${data.length}.`);
    }

    setSelectedAnswer('');
  };

   return (
    <div>
      <div className="outline outline-1 text-center font-bold text-4xl p-5">Quiz App</div>
      <div key={current}>
        <div className="text-center font-bold text-2xl pt-7">Question {current + 1}</div>
        <div className="text-center font-bold text-2xl pt-7">{data[current].question}</div>
        <div className="font-bold text-2xl pt-7 text-center">Answers:</div>
        <div className="text-left font-bold text-2xl pt-7 flex justify-center">
          <ul>
            {data[current].options.map((option, optionId) => (
              <li key={optionId}>
                <input
                  type="radio"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={() => setSelectedAnswer(option)}
                />
                {option}
              </li>
            ))}
          </ul>
        </div>
        <button onClick={handleSubmit} className="px-7 py-4 rounded-sm text-cyan-100 mt-5 bg-blue-700">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Quiz;
