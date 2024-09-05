export const jsQuizz = {
  questions: [
    {
      question: "What is a React component?",
      choices: [
        "A JavaScript function that returns a piece of the UI.",
        " A CSS function that returns styles.",
        "A specialized HTML tag used for rendering JavaScript",
        "A JavaScript library for building forms.",
      ],
      type: "MCQs",
      correctAnswer: "A JavaScript function that returns a piece of the UI.",
    },
    {
      question: "What must a React component's name start with?",
      choices: [
        "A lowercase letter.",
        "A capital letter.",
        "A special character.",
        "An underscore (_)",
      ],
      type: "MCQs",
      correctAnswer: "A capital letter.",
    },
    {
      question: "Which of the following is true about JSX in React?",
      choices: [
        "It allows embedding CSS directly in JavaScript.",
        "It allows embedding HTML-like markup in JavaScript.",
        "It is only used for adding event listeners.",
        "It is used for state management.",
      ],
      type: "MCQs",
      correctAnswer: "It allows embedding HTML-like markup in JavaScript.",
    },
    {
      question: "How do you export a component in React?",
      choices: [
        "import function [ComponentName]()",
        "export const [ComponentName]()",
        "default export [ComponentName]()",
        "export default function [ComponentName]()",
      ],
      type: "MCQs",
      correctAnswer: "export default function [ComponentName]()",
    },
    {
      question:
        "Why is it incorrect to define a component inside another component in React?",
      choices: [
        "It causes the components to be invisible.",
        "It makes the code more difficult to understand.",
        "It causes performance issues and bugs.",
        " It doesn't follow JavaScript conventions.",
      ],
      type: "MCQs",
      correctAnswer: "It causes performance issues and bugs.",
    },
  ],
};

export const resultInitialState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};
