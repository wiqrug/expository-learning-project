import React from "react";

const SecondPage = () => {
  return (
    <>
      <h2>Conditionally including JSX </h2>

      <p>{`In the previous example, you controlled which (if any!) JSX tree would be returned by the component. You may already have noticed some duplication in the render output:`}</p>
      <h5>{`<li className="item">{name} ✅</li>`}</h5>
      <p>{`is very similar to`}</p>
      <h5>{`<li className="item">{name}</li>`}</h5>
      <p>{`Both of the conditional branches return <li className="item">...</li>:`}</p>
      <h4>
        <pre>{`if (isPacked) {
  return <li className="item">{name} ✅</li>;
}
return <li className="item">{name}</li>;`}</pre>
      </h4>
      <p>{`While this duplication isn’t harmful, it could make your code harder to maintain. What if you want to change the className? You’d have to do it in two places in your code! In such a situation, you could conditionally include a little JSX to make your code more DRY.`}</p>

      <h2>{`Conditional (ternary) operator (? :) `}</h2>
      <p>{`JavaScript has a compact syntax for writing a conditional expression — the conditional operator or “ternary operator”.

Instead of this:`}</p>
      <h4>
        <pre>{`if (isPacked) {
  return <li className="item">{name} ✅</li>;
}
return <li className="item">{name}</li>;`}</pre>
      </h4>
      <p>{`You can write this:`}</p>
      <h4>
        <pre>{`return (
  <li className="item">
    {isPacked ? name + ' ✅' : name}
  </li>
);`}</pre>
      </h4>
      <p>{`You can read it as “if isPacked is true, then (?) render name + ' ✅', otherwise (:) render name”.`}</p>

      <p>{`Now let’s say you want to wrap the completed item’s text into another HTML tag, like <del> to strike it out. You can add even more newlines and parentheses so that it’s easier to nest more JSX in each of the cases:
`}</p>
      <h5>App.js</h5>
      <h4>
        <pre>{`function Item({ name, isPacked }) {
  return (
    <li className="item">
      {isPacked ? (
        <del>
          {name + ' ✅'}
        </del>
      ) : (
        name
      )}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}`}</pre>
      </h4>
      <p>{`This style works well for simple conditions, but use it in moderation. If your components get messy with too much nested conditional markup, consider extracting child components to clean things up. In React, markup is a part of your code, so you can use tools like variables and functions to tidy up complex expressions.`}</p>

      <h2>{`Logical AND operator (&&)`}</h2>
      <p>{`Another common shortcut you’ll encounter is the JavaScript logical AND (&&) operator. Inside React components, it often comes up when you want to render some JSX when the condition is true, or render nothing otherwise. With &&, you could conditionally render the checkmark only if isPacked is true:`}</p>

      <h4>
        <pre>{`return (
  <li className="item">
    {name} {isPacked && '✅'}
  </li>
);`}</pre>
      </h4>
      <p>{`You can read this as “if isPacked, then (&&) render the checkmark, otherwise, render nothing”.

Here it is in action:`}</p>
      <h5>App.js</h5>
      <h4>
        <pre>{`function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✅'}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}`}</pre>
      </h4>
      <p>{`A JavaScript && expression returns the value of its right side (in our case, the checkmark) if the left side (our condition) is true. But if the condition is false, the whole expression becomes false. React considers false as a “hole” in the JSX tree, just like null or undefined, and doesn’t render anything in its place.`}</p>
      <h2>Conditionally assigning JSX to a variable </h2>
      <p>{`When the shortcuts get in the way of writing plain code, try using an if statement and a variable. You can reassign variables defined with let, so start by providing the default content you want to display, the name:

`}</p>
      <h4>{`let itemContent = name;`}</h4>
      <p>{`Use an if statement to reassign a JSX expression to itemContent if isPacked is true:`}</p>
      <h4>
        <pre>{`if (isPacked) {
  itemContent = name + " ✅";
}`}</pre>
      </h4>
      <p>{`Curly braces open the “window into JavaScript”. Embed the variable with curly braces in the returned JSX tree, nesting the previously calculated expression inside of JSX:`}</p>

      <h4>
        <pre>{`<li className="item">
  {itemContent}
</li>`}</pre>
      </h4>
      <p>{`This style is the most verbose, but it’s also the most flexible. It works for arbitrary JSX too`}</p>
      <p>
        If you’re not familiar with JavaScript, this variety of styles might
        seem overwhelming at first. However, learning them will help you read
        and write any JavaScript code — and not just React components! Pick the
        one you prefer for a start, and then consult this reference again if you
        forget how the other ones work.
      </p>
    </>
  );
};

export default SecondPage;
