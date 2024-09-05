import React from "react";

// @ts-ignore
import img2 from "../../../assets/img2.png";
// @ts-ignore
import img3 from "../../../assets/img3.png";
// @ts-ignore
import img4 from "../../../assets/img4.png";

const ThirdPage = () => {
  return (
    <>
      <h2>Using a component </h2>
      <p>
        Now that you’ve defined your Profile component, you can nest it inside
        other components. For example, you can export a Gallery component that
        uses multiple Profile components:
      </p>
      <img src={img2} alt="Description of the image" />
      <img src={img3} alt="Description of the image" />
      <h2>What the browser sees</h2>
      <p>{`Notice the difference in casing:

<section> is lowercase, so React knows we refer to an HTML tag.
<Profile /> starts with a capital P, so React knows that we want to use our component called Profile.
And Profile contains even more HTML: <img />. In the end, this is what the browser sees:`}</p>
      <img src={img4} alt="Description of the image" />

      <h2>Nesting and organizing components</h2>
      <p>
        Components are regular JavaScript functions, so you can keep multiple
        components in the same file. This is convenient when components are
        relatively small or tightly related to each other. If this file gets
        crowded, you can always move Profile to a separate file. You will learn
        how to do this shortly on the page about imports. Because the Profile
        components are rendered inside Gallery—even several times!—we can say
        that Gallery is a parent component, rendering each Profile as a “child”.
        This is part of the magic of React: you can define a component once, and
        then use it in as many places and as many times as you like.
      </p>
      <h1>Pitfall</h1>
      <p>
        Components can render other components, but you must never nest their
        definitions:
      </p>
      <pre>{`export default function Gallery() {
  // 🔴 Never define a component inside another!
  function Profile() {
    // ...
  }
  // ...
}`}</pre>
      <p>
        The snippet above is very slow and causes bugs. Instead, define every
        component at the top level:
      </p>
      <pre>{`export default function Gallery() {
  // ...
}

// ✅ Declare components at the top level
function Profile() {
  // ...
}`}</pre>
      <p>
        When a child component needs some data from a parent, pass it by props
        instead of nesting definitions.
      </p>
    </>
  );
};

export default ThirdPage;
