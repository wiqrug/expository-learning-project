import React from "react";

const FirstPage = () => {
  return (
    <>
      <h2>Keeping Components Pure</h2>
      <p>
        Some JavaScript functions are pure. Pure functions only perform a
        calculation and nothing more. By strictly only writing your components
        as pure functions, you can avoid an entire class of baffling bugs and
        unpredictable behavior as your codebase grows. To get these benefits,
        though, there are a few rules you must follow.
      </p>
      <ul>
        You will learn
        <li>What purity is and how it helps you avoid bugs</li>
        <li>
          How to keep components pure by keeping changes out of the render phase
        </li>
        <li>How to use Strict Mode to find mistakes in your components</li>
      </ul>
      <h2>Purity: Components as formulas</h2>
      <pre>
        <p>{`In computer science (and especially the world of functional programming), a pure function is a function with the following characteristics:

It minds its own business. It does not change any objects or variables that existed before it was called.
Same inputs, same output. Given the same inputs, a pure function should always return the same result.
You might already be familiar with one example of pure functions: formulas in math.

Consider this math formula: y = 2x.

If x = 2 then y = 4. Always.

If x = 3 then y = 6. Always.

If x = 3, y won’t sometimes be 9 or –1 or 2.5 depending on the time of day or the state of the stock market.

If y = 2x and x = 3, y will always be 6.

If we made this into a JavaScript function, it would look like this:`}</p>
      </pre>
      <h4>
        <pre>{`function double(number) {
  return 2 * number;
}`}</pre>
      </h4>
      <p>{`In the above example, double is a pure function. If you pass it 3, it will return 6. Always.

React is designed around this concept. React assumes that every component you write is a pure function. This means that React components you write must always return the same JSX given the same inputs:`}</p>
      <h5>App.js</h5>
      <h4>
        <pre>{`function Recipe({ drinkers }) {
  return (
    <ol>    
      <li>Boil {drinkers} cups of water.</li>
      <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
  );
}

export default function App() {
  return (
    <section>
      <h1>Spiced Chai Recipe</h1>
      <h2>For two</h2>
      <Recipe drinkers={2} />
      <h2>For a gathering</h2>
      <Recipe drinkers={4} />
    </section>
  );
}
`}</pre>
      </h4>
      <p>{`When you pass drinkers={2} to Recipe, it will return JSX containing 2 cups of water. Always.

If you pass drinkers={4}, it will return JSX containing 4 cups of water. Always.

Just like a math formula.

You could think of your components as recipes: if you follow them and don’t introduce new ingredients during the cooking process, you will get the same dish every time. That “dish” is the JSX that the component serves to React to render.`}</p>

      <h2>{`Side Effects: (un)intended consequences`}</h2>
      <p>{`React’s rendering process must always be pure. Components should only return their JSX, and not change any objects or variables that existed before rendering—that would make them impure!

Here is a component that breaks this rule:`}</p>
      <h5>App.js</h5>
      <h4>
        <pre>{`let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}  `}</pre>
      </h4>
      <p>{`This component is reading and writing a guest variable declared outside of it. This means that calling this component multiple times will produce different JSX! And what’s more, if other components read guest, they will produce different JSX, too, depending on when they were rendered! That’s not predictable.

Going back to our formula y = 2x, now even if x = 2, we cannot trust that y = 4. Our tests could fail, our users would be baffled, planes would fall out of the sky—you can see how this would lead to confusing bugs!

You can fix this component by passing guest as a prop instead:`}</p>
      <h4>
        <pre>{`function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}`}</pre>
      </h4>
      <p>{`Now your component is pure, as the JSX it returns only depends on the guest prop.

In general, you should not expect your components to be rendered in any particular order. It doesn’t matter if you call y = 2x before or after y = 5x: both formulas will resolve independently of each other. In the same way, each component should only “think for itself”, and not attempt to coordinate with or depend upon others during rendering. Rendering is like a school exam: each component should calculate JSX on their own!`}</p>
    </>
  );
};

export default FirstPage;
