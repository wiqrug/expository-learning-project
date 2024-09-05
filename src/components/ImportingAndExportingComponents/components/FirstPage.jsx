import React from "react";
// @ts-ignore
import img1 from "../../../assets/img3.png";
const FirstPage = () => {
  return (
    <>
      <h2>Importing and Exporting Components</h2>
      <p>
        The magic of components lies in their reusability: you can create
        components that are composed of other components. But as you nest more
        and more components, it often makes sense to start splitting them into
        different files. This lets you keep your files easy to scan and reuse
        components in more places.
      </p>
      <ul>
        You will learn
        <li>What a root component file is</li>
        <li>How to import and export a component</li>
        <li>When to use default and named imports and exports</li>
        <li>How to import and export multiple components from one file</li>
        <li>How to split components into multiple files</li>
      </ul>

      <h2>The root component file </h2>
      <p>
        In Your First Component, you made a Profile component and a Gallery
        component that renders it:
      </p>
      <h5>
        <pre>{`function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}`}</pre>
      </h5>
      <img src={img1} alt="Katherine Johnson" />
      <p>
        These currently live in a root component file, named App.js in this
        example. Depending on your setup, your root component could be in
        another file, though. If you use a framework with file-based routing,
        such as Next.js, your root component will be different for every page.
      </p>
    </>
  );
};

export default FirstPage;
