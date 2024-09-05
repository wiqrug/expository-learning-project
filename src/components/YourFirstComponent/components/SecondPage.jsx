import React from "react";
// @ts-ignore
// import myImage from "../../assets/img1.png";

const SecondPage = () => {
  return (
    <>
      <h2>Defining a component </h2>
      <p>
        Traditionally when creating web pages, web developers marked up their
        content and then added interaction by sprinkling on some JavaScript.
        This worked great when interaction was a nice-to-have on the web. Now it
        is expected for many sites and all apps. React puts interactivity first
        while still using the same technology: a React component is a JavaScript
        function that you can sprinkle with markup. Here’s what that looks like
      </p>
      <h4>
        <pre>{`export default function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  )
}
`}</pre>
      </h4>

      <p>And here’s how to build a component:</p>
      <h2>Step 1: Export the component </h2>
      <p>
        The export default prefix is a standard JavaScript syntax (not specific
        to React). It lets you mark the main function in a file so that you can
        later import it from other files. (More on importing in Importing and
        Exporting Components!)
      </p>
      <h2>Step 2: Define the function</h2>
      <p>{`With function Profile() { } you define a JavaScript function with the name Profile.`}</p>
      <p>{`(React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work!)`}</p>
      <h2>Step 3: Add markup</h2>
      <p>{`The component returns an <img /> tag with src and alt attributes. <img /> is written like HTML, but it is actually JavaScript under the hood! This syntax is called JSX, and it lets you embed markup inside JavaScript.

Return statements can be written all on one line, as in this component:

`}</p>
      <pre>
        <h4>{`return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;`}</h4>
      </pre>
      <p>{`But if your markup isn’t all on the same line as the return keyword, you must wrap it in a pair of parentheses:`}</p>
      <p>{`return (
  <div>
    <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  </div>
);`}</p>
    </>
  );
};

export default SecondPage;
