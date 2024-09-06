import React from "react";
// @ts-ignore
import image from "../../../assets/img5.png";

const FirstPage = () => {
  return (
    <>
      <h2>Passing Props to a Component</h2>
      <p>
        React components use props to communicate with each other. Every parent
        component can pass some information to its child components by giving
        them props. Props might remind you of HTML attributes, but you can pass
        any JavaScript value through them, including objects, arrays, and
        functions.
      </p>
      <ul>
        You will learn
        <li>How to pass props to a component</li>
        <li>How to read props from a component</li>
        <li>How to specify default values for props</li>
        <li>How to pass some JSX to a component</li>
        <li>How props change over time</li>
      </ul>
      <h2>Familiar props </h2>
      <p>{`Props are the information that you pass to a JSX tag. For example, className, src, alt, width, and height are some of the props you can pass to an <img>:`}</p>
      <h4>
        <pre>{`function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}

export default function Profile() {
  return (
    <Avatar />
  );
}
`}</pre>
      </h4>
      <img src={image} alt="ff"></img>
      <p>{`The props you can pass to an <img> tag are predefined (ReactDOM conforms to the HTML standard). But you can pass any props to your own components, such as <Avatar>, to customize them. Here’s how!`}</p>
      <h2>Passing props to a component</h2>
      <p>
        In this code, the Profile component isn’t passing any props to its child
        component, Avatar:
      </p>
      <h4>
        <pre>{`export default function Profile() {
  return (
    <Avatar />
  );
}`}</pre>
      </h4>
      <p>You can give Avatar some props in two steps.</p>
      <h2>Step 1: Pass props to the child component</h2>
      <p>{`First, pass some props to Avatar. For example, let’s pass two props: person (an object), and size (a number):`}</p>
      <h4>
        <pre>{`export default function Profile() {
  return (
    <Avatar
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
    />
  );
}`}</pre>
      </h4>
      <h1>Note</h1>
      <p>
        If double curly braces after person= confuse you, recall they’re merely
        an object inside the JSX curlies.
      </p>
      <h2>Step 2: Read props inside the child component </h2>
      <p>{`You can read these props by listing their names person, size separated by the commas inside ({ and }) directly after function Avatar. This lets you use them inside the Avatar code, like you would with a variable.`}</p>
      <h4>
        <pre>{`function Avatar({ person, size }) {
  // person and size are available here
}`}</pre>
      </h4>
      <p>
        Add some logic to Avatar that uses the person and size props for
        rendering, and you’re done. Now you can configure Avatar to render in
        many different ways with different props. Try tweaking the values!
      </p>
      <h4>
        <pre>{`import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
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

export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
}`}</pre>
      </h4>
      <p>utils.js</p>
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
      <p>
        Props let you think about parent and child components independently. For
        example, you can change the person or the size props inside Profile
        without having to think about how Avatar uses them. Similarly, you can
        change how the Avatar uses these props, without looking at the Profile.
        You can think of props like “knobs” that you can adjust. They serve the
        same role as arguments serve for functions—in fact, props are the only
        argument to your component! React component functions accept a single
        argument, a props object:
      </p>
      <h4>
        <pre>{`function Avatar(props) {
  let person = props.person;
  let size = props.size;
  // ...
}`}</pre>
      </h4>
      <p>
        Usually you don’t need the whole props object itself, so you destructure
        it into individual props.
      </p>
    </>
  );
};

export default FirstPage;
