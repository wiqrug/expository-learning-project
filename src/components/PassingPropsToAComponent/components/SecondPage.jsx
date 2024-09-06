import React from "react";

const SecondPage = () => {
  return (
    <>
      <h2>Specifying a default value for a prop</h2>
      <p>
        If you want to give a prop a default value to fall back on when no value
        is specified, you can do it with the destructuring by putting = and the
        default value right after the parameter:
      </p>
      <h4>
        <pre>{`function Avatar({ person, size = 100 }) {
  // ...
}`}</pre>
      </h4>
      <p>{`Now, if <Avatar person={...} /> is rendered with no size prop, the size will be set to 100.

The default value is only used if the size prop is missing or if you pass size={undefined}. But if you pass size={null} or size={0}, the default value will not be used.`}</p>
      <h2>Forwarding props with the JSX spread syntax</h2>
      <p>Sometimes, passing props gets very repetitive:</p>
      <h4>
        <pre>{`function Profile({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}`}</pre>
      </h4>
      <p>{`There’s nothing wrong with repetitive code—it can be more legible. But at times you may value conciseness. Some components forward all of their props to their children, like how this Profile does with Avatar. Because they don’t use any of their props directly, it can make sense to use a more concise “spread” syntax:`}</p>
      <h4>
        <pre>{`function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}`}</pre>
      </h4>
      <p>{`This forwards all of Profile’s props to the Avatar without listing each of their names.

Use spread syntax with restraint. If you’re using it in every other component, something is wrong. Often, it indicates that you should split your components and pass children as JSX. More on that next!`}</p>
      <h2>Passing JSX as children </h2>
      <p>It is common to nest built-in browser tags:</p>
      <h4>
        <pre>{`<div>
  <img />
</div>`}</pre>
      </h4>
      <p>Sometimes you’ll want to nest your own components the same way:</p>
      <h4>
        <pre>{`<Card>
  <Avatar />
</Card>`}</pre>
      </h4>
      <p>
        {`When you nest content inside a JSX tag, the parent component will
        receive that content in a prop called children. For example, the Card
        component below will receive a children prop set to <Avatar /> and
        render it in a wrapper div:`}
      </p>
      <h5>App.js</h5>
      <h4>
        <pre>{`import Avatar from './Avatar.js';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}
`}</pre>
      </h4>
      <h5>Avatar.js</h5>
      <h4>
        <pre>{`import { getImageUrl } from './utils.js';

export default function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
`}</pre>
      </h4>
      <h5>utils.js</h5>
      <h4>
        <pre>{`export function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}
`}</pre>
      </h4>
      <p>{`Try replacing the <Avatar> inside <Card> with some text to see how the Card component can wrap any nested content. It doesn’t need to “know” what’s being rendered inside of it. You will see this flexible pattern in many places.

You can think of a component with a children prop as having a “hole” that can be “filled in” by its parent components with arbitrary JSX. You will often use the children prop for visual wrappers: panels, grids, etc.`}</p>

      <h2>How props change over time </h2>
      <p>{`The Clock component below receives two props from its parent component: color and time. (The parent component’s code is omitted because it uses state, which we won’t dive into just yet.)

Try changing the color in the select box below:`}</p>
      <h5>Clock.js</h5>
      <h4>
        <pre>{`export default function Clock({ color, time }) {
  return (
    <h1 style={{ color: color }}>
      {time}
    </h1>
  );
}
`}</pre>
      </h4>
      <p>{`This example illustrates that a component may receive different props over time. Props are not always static! Here, the time prop changes every second, and the color prop changes when you select another color. Props reflect a component’s data at any point in time, rather than only in the beginning.

However, props are immutable—a term from computer science meaning “unchangeable”. When a component needs to change its props (for example, in response to a user interaction or new data), it will have to “ask” its parent component to pass it different props—a new object! Its old props will then be cast aside, and eventually the JavaScript engine will reclaim the memory taken by them.

Don’t try to “change props”. When you need to respond to the user input (like changing the selected color), you will need to “set state”, which you can learn about in State: A Component’s Memory.`}</p>
    </>
  );
};

export default SecondPage;
