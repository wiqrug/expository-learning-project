export const jsQuizz = {
  // Original questions array remains unchanged
  questions: [
    {
      question: "What is a React component?",
      choices: [
        "A JavaScript function that returns a piece of the UI.",
        "A CSS function that returns styles.",
        "A specialized HTML tag used for rendering JavaScript.",
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
        "An underscore (_).",
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
        "import function [ComponentName]();",
        "export const [ComponentName]();",
        "default export [ComponentName]();",
        "export default function [ComponentName]();",
      ],
      type: "MCQs",
      correctAnswer: "export default function [ComponentName]();",
    },
    {
      question:
        "Why is it incorrect to define a component inside another component in React?",
      choices: [
        "It causes the components to be invisible.",
        "It makes the code more difficult to understand.",
        "It causes performance issues and bugs.",
        "It doesn't follow JavaScript conventions.",
      ],
      type: "MCQs",
      correctAnswer: "It causes performance issues and bugs.",
    },
  ],

  // Questions based on "Importing and Exporting Components"
  questions2: [
    {
      question: "What is a root component file in React?",
      choices: [
        "A component that manages the state of other components.",
        "A component that is composed of other components.",
        "A file that contains the main component for the app or a page.",
        "A file that stores only CSS for components.",
      ],
      type: "MCQs",
      correctAnswer:
        "A file that contains the main component for the app or a page.",
    },
    {
      question: "What is the correct way to export a component in React?",
      choices: [
        "export function [ComponentName]()",
        "export default function [ComponentName]()",
        "default export { ComponentName }",
        "import { ComponentName } from './file.js'",
      ],
      type: "MCQs",
      correctAnswer: "export default function [ComponentName]()",
    },
    {
      question: "What is the difference between default and named exports?",
      choices: [
        "Default exports allow multiple exports per file, named exports do not.",
        "Named exports allow multiple exports per file, default exports do not.",
        "Default exports must be imported with curly braces, named exports do not.",
        "Named exports must be imported without curly braces, default exports use curly braces.",
      ],
      type: "MCQs",
      correctAnswer:
        "Named exports allow multiple exports per file, default exports do not.",
    },
    {
      question: "How do you import a default export in React?",
      choices: [
        "import { [ComponentName] } from './file.js'",
        "import [ComponentName] from './file.js'",
        "import { default } from './file.js'",
        "export { default } from './file.js'",
      ],
      type: "MCQs",
      correctAnswer: "import [ComponentName] from './file.js'",
    },
    {
      question: "How can you export multiple components from the same file?",
      choices: [
        "By using named exports for all components.",
        "By using default exports for all components.",
        "By combining named exports with default exports.",
        "It is not possible to export multiple components from the same file.",
      ],
      type: "MCQs",
      correctAnswer: "By using named exports for all components.",
    },
  ],

  // New questions3 array based on "Writing Markup with JSX"
  questions3: [
    {
      question: "What is JSX in React?",
      choices: [
        "A syntax extension that lets you write JavaScript inside HTML.",
        "A syntax extension that lets you write HTML-like markup inside JavaScript.",
        "A JavaScript library used for creating dynamic web applications.",
        "A tool for state management in React applications.",
      ],
      type: "MCQs",
      correctAnswer:
        "A syntax extension that lets you write HTML-like markup inside JavaScript.",
    },
    {
      question: "How do you return multiple elements from a React component?",
      choices: [
        "Use multiple return statements.",
        "Wrap them with a single parent tag.",
        "Separate them using commas.",
        "Use multiple render methods.",
      ],
      type: "MCQs",
      correctAnswer: "Wrap them with a single parent tag.",
    },
    {
      question: "How should self-closing tags like <img> be written in JSX?",
      choices: ["<img>", "<img />", "<img></img>", "<img closing>"],
      type: "MCQs",
      correctAnswer: "<img />",
    },
    {
      question: "How do you write the class attribute in JSX?",
      choices: ["class", "classname", "cssClass", "className"],
      type: "MCQs",
      correctAnswer: "className",
    },
    {
      question: "What is the purpose of Fragments in JSX?",
      choices: [
        "To add an extra div to the DOM.",
        "To group elements without adding an extra DOM element.",
        "To define a reusable component.",
        "To define an inline style block.",
      ],
      type: "MCQs",
      correctAnswer: "To group elements without adding an extra DOM element.",
    },
  ],
  questions4: [
    {
      question: "What are props in React used for?",
      choices: [
        "To define CSS styles in a component.",
        "To pass information from a parent component to a child component.",
        "To manage component state.",
        "To trigger lifecycle methods.",
      ],
      type: "MCQs",
      correctAnswer:
        "To pass information from a parent component to a child component.",
    },
    {
      question: "How do you pass multiple props to a child component in React?",
      choices: [
        "By passing them as an object.",
        "By using commas to separate them.",
        "By passing them as separate attributes.",
        "By placing them inside curly braces.",
      ],
      type: "MCQs",
      correctAnswer: "By passing them as separate attributes.",
    },
    {
      question:
        "Which of the following is a correct way to destructure props in a React component?",
      choices: [
        "function Avatar(props) { const { person, size } = props; }",
        "function Avatar({ props }) { person = props.person; }",
        "function Avatar({ person, size }) { }",
        "function Avatar({ props.person, props.size }) { }",
      ],
      type: "MCQs",
      correctAnswer: "function Avatar({ person, size }) { }",
    },
    {
      question: "What is the purpose of the JSX spread syntax {...props}?",
      choices: [
        "To pass all the parent's state to the child component.",
        "To pass all props to a child component without listing each one individually.",
        "To pass multiple components as children.",
        "To allow props to be edited from within the child component.",
      ],
      type: "MCQs",
      correctAnswer:
        "To pass all props to a child component without listing each one individually.",
    },
    {
      question: "Which of the following is true about props in React?",
      choices: [
        "Props are mutable, and you can change them in the child component.",
        "Props are immutable and can only be changed by the parent component.",
        "Props cannot be passed as objects or arrays.",
        "Props are only used for managing component state.",
      ],
      type: "MCQs",
      correctAnswer:
        "Props are immutable and can only be changed by the parent component.",
    },
  ],
  questions5: [
    {
      question: "What is conditional rendering in React?",
      choices: [
        "Rendering components based on user authentication.",
        "Rendering JSX based on certain conditions using JavaScript.",
        "Rendering components only if props are passed.",
        "Rendering components with default values.",
      ],
      type: "MCQs",
      correctAnswer:
        "Rendering JSX based on certain conditions using JavaScript.",
    },
    {
      question:
        "Which of the following is the correct syntax for conditionally rendering JSX using a ternary operator?",
      choices: [
        "{isTrue ? <ComponentA /> : <ComponentB />}",
        "{isTrue <ComponentA /> : <ComponentB />}",
        "{isTrue && <ComponentA /> : <ComponentB />}",
        "{isTrue ? <ComponentA /> && <ComponentB />}",
      ],
      type: "MCQs",
      correctAnswer: "{isTrue ? <ComponentA /> : <ComponentB />}",
    },
    {
      question:
        "What does the logical AND (&&) operator do in conditional rendering?",
      choices: [
        "It renders the left-hand side if the condition is true.",
        "It renders both sides of the condition.",
        "It renders the JSX on the right side if the condition on the left is true.",
        "It always renders both conditions regardless of the truthiness.",
      ],
      type: "MCQs",
      correctAnswer:
        "It renders the JSX on the right side if the condition on the left is true.",
    },
    {
      question: "What happens if a React component returns `null`?",
      choices: [
        "The component will throw an error.",
        "The component will display an empty string.",
        "The component will render nothing.",
        "The component will render a default fallback.",
      ],
      type: "MCQs",
      correctAnswer: "The component will render nothing.",
    },
    {
      question:
        "How can you avoid JSX duplication when conditionally rendering elements?",
      choices: [
        "By using multiple return statements.",
        "By using the && operator instead of if statements.",
        "By conditionally including JSX inside a single return block.",
        "By using nested components for every condition.",
      ],
      type: "MCQs",
      correctAnswer:
        "By conditionally including JSX inside a single return block.",
    },
  ],
};

export const resultInitialState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};
