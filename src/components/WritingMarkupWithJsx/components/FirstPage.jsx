import React from "react";

const FirstPage = () => {
  return (
    <>
      <h2>Writing Markup with JSX</h2>
      <p>
        JSX is a syntax extension for JavaScript that lets you write HTML-like
        markup inside a JavaScript file. Although there are other ways to write
        components, most React developers prefer the conciseness of JSX, and
        most codebases use it.
      </p>
      <ul>
        You will learn
        <li>Why React mixes markup with rendering logic</li>
        <li>How JSX is different from HTML</li>
        <li>How to display information with JSX</li>
      </ul>
      <h2>JSX: Putting markup into JavaScript </h2>
      <p>
        The Web has been built on HTML, CSS, and JavaScript. For many years, web
        developers kept content in HTML, design in CSS, and logic in
        JavaScript—often in separate files! Content was marked up inside HTML
        while the page’s logic lived separately in JavaScript
      </p>
      <p>
        But as the Web became more interactive, logic increasingly determined
        content. JavaScript was in charge of the HTML! This is why in React,
        rendering logic and markup live together in the same place—components.
      </p>
      <p>
        Keeping a button’s rendering logic and markup together ensures that they
        stay in sync with each other on every edit. Conversely, details that are
        unrelated, such as the button’s markup and a sidebar’s markup, are
        isolated from each other, making it safer to change either of them on
        their own. Each React component is a JavaScript function that may
        contain some markup that React renders into the browser. React
        components use a syntax extension called JSX to represent that markup.
        JSX looks a lot like HTML, but it is a bit stricter and can display
        dynamic information. The best way to understand this is to convert some
        HTML markup to JSX markup.
      </p>
      <h1>Note</h1>
      <p>
        JSX and React are two separate things. They’re often used together, but
        you can use them independently of each other. JSX is a syntax extension,
        while React is a JavaScript library.
      </p>
      <h2>Converting HTML to JSX</h2>
      <p>Suppose that you have some (perfectly valid) HTML:</p>

      <pre>{`<h1>Hedy Lamarr's Todos</h1>
<img 
  src="https://i.imgur.com/yXOvdOSs.jpg" 
  alt="Hedy Lamarr" 
  class="photo"
>
<ul>
    <li>Invent new traffic lights
    <li>Rehearse a movie scene
    <li>Improve the spectrum technology
</ul>`}</pre>
      <p>And you want to put it into your component:</p>
      <pre>{`export default function TodoList() {
  return (
    // ???
  )
}`}</pre>
      <h4>If you copy and paste it as is, it will not work</h4>
      <p>
        This is because JSX is stricter and has a few more rules than HTML! If
        you read the error messages above, they’ll guide you to fix the markup,
        or you can follow the guide below.
      </p>
      <h4>Note</h4>
      <p>Most of the time, React’s on-screen error messages will help you find where the problem is. Give them a read if you get stuck!</p>
    </>
  );
};

export default FirstPage;
