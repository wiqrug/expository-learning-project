import React from "react";

const FirstPage = () => {
  return (
    <>
      <h2>Conditional Rendering</h2>
      <p>{`Your components will often need to display different things depending on different conditions. In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.`}</p>
      <ul>
        You will learn
        <li>How to return different JSX depending on a condition</li>
        <li>How to conditionally include or exclude a piece of JSX</li>
        <li>
          Common conditional syntax shortcuts you’ll encounter in React
          codebases
        </li>
      </ul>
      <h2>Conditionally returning JSX </h2>
      <p>{`Let’s say you have a PackingList component rendering several Items, which can be marked as packed or not:`}</p>
      <h5>App.js</h5>
      <h4>
        <pre>{`function Item({ name, isPacked }) {
  return <li className="item">{name}</li>;
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
      <p>{`Notice that some of the Item components have their isPacked prop set to true instead of false. You want to add a checkmark (✅) to packed items if isPacked={true}.

You can write this as an if/else statement like so:`}</p>
      <h4>
        <pre>{`if (isPacked) {
  return <li className="item">{name} ✅</li>;
}
return <li className="item">{name}</li>;`}</pre>
      </h4>
      <p>{`If the isPacked prop is true, this code returns a different JSX tree. With this change, some of the items get a checkmark at the end:`}</p>
      <h4>
        <pre>{`function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✅</li>;
  }
  return <li className="item">{name}</li>;
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
}
`}</pre>
      </h4>
      <p>{`Try editing what gets returned in either case, and see how the result changes!

Notice how you’re creating branching logic with JavaScript’s if and return statements. In React, control flow (like conditions) is handled by JavaScript.`}</p>
      <h2>Conditionally returning nothing with null</h2>
      <p>{`In some situations, you won’t want to render anything at all. For example, say you don’t want to show packed items at all. A component must return something. In this case, you can return null:`}</p>
      <h4>
        <pre>{`if (isPacked) {
  return null;
}
return <li className="item">{name}</li>;`}</pre>
      </h4>
      <p>{`If isPacked is true, the component will return nothing, null. Otherwise, it will return JSX to render.`}</p>
      <p>{`In practice, returning null from a component isn’t common because it might surprise a developer trying to render it. More often, you would conditionally include or exclude the component in the parent component’s JSX. Here’s how to do that!`}</p>{" "}
    </>
  );
};

export default FirstPage;
