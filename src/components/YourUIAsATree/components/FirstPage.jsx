import React from "react";
// @ts-ignore
import image from "../../../assets/image copy.png";
// @ts-ignore
import image2 from "../../../assets/image copy2.png";

const FirstPage = () => {
  return (
    <>
      <h2>Understanding Your UI as a Tree</h2>
      <p>
        Your React app is taking shape with many components being nested within
        each other. How does React keep track of your app’s component structure?
        React, and many other UI libraries, model UI as a tree. Thinking of your
        app as a tree is useful for understanding the relationship between
        components. This understanding will help you debug future concepts like
        performance and state management.
      </p>
      <h2>Your UI as a tree</h2>
      <p>{`Trees are a relationship model between items and UI is often represented using tree structures. For example, browsers use tree structures to model HTML (DOM) and CSS (CSSOM). Mobile platforms also use trees to represent their view hierarchy.`}</p>
      <p>{`Like browsers and mobile platforms, React also uses tree structures to manage and model the relationship between components in a React app. These trees are useful tools to understand how data flows through a React app and how to optimize rendering and app size.`}</p>
      <h2>The Render Tree </h2>
      <p>
        A major feature of components is the ability to compose components of
        other components. As we nest components, we have the concept of parent
        and child components, where each parent component may itself be a child
        of another component. When we render a React app, we can model this
        relationship in a tree, known as the render tree. Here is a React app
        that renders inspirational quotes.
      </p>
      <img src={image} alt="lorem"></img>
      <p>{`From the example app, we can construct the above render tree.

The tree is composed of nodes, each of which represents a component. App, FancyText, Copyright, to name a few, are all nodes in our tree.

The root node in a React render tree is the root component of the app. In this case, the root component is App and it is the first component React renders. Each arrow in the tree points from a parent component to a child component.`}</p>
      <p>{`A render tree represents a single render pass of a React application. With conditional rendering, a parent component may render different children depending on the data passed.

We can update the app to conditionally render either an inspirational quote or color.`}</p>
      <p>{`In this example, depending on what inspiration.type is, we may render <FancyText> or <Color>. The render tree may be different for each render pass.

Although render trees may differ across render passes, these trees are generally helpful for identifying what the top-level and leaf components are in a React app. Top-level components are the components nearest to the root component and affect the rendering performance of all the components beneath them and often contain the most complexity. Leaf components are near the bottom of the tree and have no child components and are often frequently re-rendered.

Identifying these categories of components are useful for understanding data flow and performance of your app.`}</p>{" "}
      <h2>The Module Dependency Tree </h2>
      <p>{`Another relationship in a React app that can be modeled with a tree are an app’s module dependencies. As we break up our components and logic into separate files, we create JS modules where we may export components, functions, or constants.

Each node in a module dependency tree is a module and each branch represents an import statement in that module.

If we take the previous Inspirations app, we can build a module dependency tree, or dependency tree for short.`}</p>
      <img src={image2} alt="lorem"></img>
      <p>{`The root node of the tree is the root module, also known as the entrypoint file. It often is the module that contains the root component.

Comparing to the render tree of the same app, there are similar structures but some notable differences:

The nodes that make-up the tree represent modules, not components.
Non-component modules, like inspirations.js, are also represented in this tree. The render tree only encapsulates components.
Copyright.js appears under App.js but in the render tree, Copyright, the component, appears as a child of InspirationGenerator. This is because InspirationGenerator accepts JSX as children props, so it renders Copyright as a child component but does not import the module.
Dependency trees are useful to determine what modules are necessary to run your React app. When building a React app for production, there is typically a build step that will bundle all the necessary JavaScript to ship to the client. The tool responsible for this is called a bundler, and bundlers will use the dependency tree to determine what modules should be included.

As your app grows, often the bundle size does too. Large bundle sizes are expensive for a client to download and run. Large bundle sizes can delay the time for your UI to get drawn. Getting a sense of your app’s dependency tree may help with debugging these issues.`}</p>
    </>
  );
};

export default FirstPage;
