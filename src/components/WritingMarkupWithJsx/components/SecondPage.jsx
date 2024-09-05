import React from "react";

const SecondPage = () => {
  return (
    <>
      <h2>The Rules of JSX </h2>
      <h2>1. Return a single root element</h2>
      <p>{`To return multiple elements from a component, wrap them with a single parent tag.

For example, you can use a <div>:`}</p>
      <h4>{`<div>
  <h1>Hedy Lamarr's Todos</h1>
  <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Hedy Lamarr" 
    class="photo"
  > 
  <ul>
    ...
  </ul>
</div>`}</h4>
      <p>{`If you don’t want to add an extra <div> to your markup, you can write <> and </> instead:`}</p>
      <pre>{`<>
  <h1>Hedy Lamarr's Todos</h1>
  <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Hedy Lamarr" 
    class="photo"
  >
  <ul>
    ...
  </ul>
</>`}</pre>
      <p>
        This empty tag is called a Fragment. Fragments let you group things
        without leaving any trace in the browser HTML tree.
      </p>
      <h2>2. Close all the tags </h2>
      <p>{`JSX requires tags to be explicitly closed: self-closing tags like <img> must become <img />, and wrapping tags like <li>oranges must be written as <li>oranges</li>.

This is how Hedy Lamarr’s image and list items look closed:`}</p>
      <pre>{`<>
  <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Hedy Lamarr" 
    class="photo"
   />
  <ul>
    <li>Invent new traffic lights</li>
    <li>Rehearse a movie scene</li>
    <li>Improve the spectrum technology</li>
  </ul>
</>`}</pre>
      <h2>3. camelCase all most of the things!</h2>
      <p>
        JSX turns into JavaScript and attributes written in JSX become keys of
        JavaScript objects. In your own components, you will often want to read
        those attributes into variables. But JavaScript has limitations on
        variable names. For example, their names can’t contain dashes or be
        reserved words like class. This is why, in React, many HTML and SVG
        attributes are written in camelCase. For example, instead of
        stroke-width you use strokeWidth. Since class is a reserved word, in
        React you write className instead, named after the corresponding DOM
        property:
      </p>
      <pre>{`<img 
  src="https://i.imgur.com/yXOvdOSs.jpg" 
  alt="Hedy Lamarr" 
  className="photo"
/>`}</pre>
      <p>
        You can find all these attributes in the list of DOM component props. If
        you get one wrong, don’t worry—React will print a message with a
        possible correction to the browser console.
      </p>
    </>
  );
};

export default SecondPage;
