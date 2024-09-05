import React from "react";
// @ts-ignore
import img1 from "../../../assets/image.png";

const SecondPage = () => {
  return (
    <>
      <h2>Exporting and importing a component</h2>
      <p>{`What if you want to change the landing screen in the future and put a list of science books there? Or place all the profiles somewhere else? It makes sense to move Gallery and Profile out of the root component file. This will make them more modular and reusable in other files. You can move a component in three steps:`}</p>
      <ol>
        <li>Make a new JS file to put the components in.</li>
        <li>
          {`Export your function component from that file (using either default or
          named exports).`}
        </li>
        <li>
          {`Import it in the file where you’ll use the component (using the
          corresponding technique for importing default or named exports).`}
        </li>
      </ol>
      <p>
        Here both Profile and Gallery have been moved out of App.js into a new
        file called Gallery.js. Now you can change App.js to import Gallery from
        Gallery.js:
      </p>
      <h4>
        <pre>{`import Gallery from './Gallery.js';

export default function App() {
  return (
    <Gallery />
  );
}
`}</pre>
      </h4>
      <img src={img1} alt="pipi" />
      <p>
        Notice how this example is broken down into two component files now:
      </p>
    </>
  );
};

export default SecondPage;
