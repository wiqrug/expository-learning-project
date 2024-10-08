import React from "react";

const FirstPage = () => {
  return (
    <>
      <h2>Your First Component</h2>
      <p>
        Components are one of the core concepts of React. They are the
        foundation upon which you build user interfaces (UI), which makes them
        the perfect place to start your React journey!
      </p>
      <h2>Components: UI building blocks </h2>
      <p>
        {
          "On the Web, HTML lets us create rich structured documents with its built-in set of tags like <h1> and <li>:"
        }
      </p>
      <pre>{`<article>
    <h1>My First Component</h1>
    <ol>
      <li>Components: UI Building Blocks</li>
      <li>Defining a Component</li>
      <li>Using a Component</li>
    </ol>
  </article>`}</pre>
      <p>{`This markup represents this article <article>, its heading <h1>, and an (abbreviated) table of contents as an ordered list <ol>. Markup like this, combined with CSS for style, and JavaScript for interactivity, lies behind every sidebar, avatar, modal, dropdown—every piece of UI you see on the Web.
  
  React lets you combine your markup, CSS, and JavaScript into custom “components”, reusable UI elements for your app. The table of contents code you saw above could be turned into a <TableOfContents /> component you could render on every page. Under the hood, it still uses the same HTML tags like <article>, <h1>, etc.
  
  Just like with HTML tags, you can compose, order and nest components to design whole pages. For example, the documentation page you’re reading is made out of React components:`}</p>
      <pre>{`<PageLayout>
    <NavigationHeader>
      <SearchBar />
      <Link to="/docs">Docs</Link>
    </NavigationHeader>
    <Sidebar />
    <PageContent>
      <TableOfContents />
      <DocumentationText />
    </PageContent>
  </PageLayout>`}</pre>
      <p>{`As your project grows, you will notice that many of your designs can be composed by reusing components you already wrote, speeding up your development. Our table of contents above could be added to any screen with <TableOfContents />! You can even jumpstart your project with the thousands of components shared by the React open source community like Chakra UI and Material UI.
  
  `}</p>
    </>
  );
};

export default FirstPage;
