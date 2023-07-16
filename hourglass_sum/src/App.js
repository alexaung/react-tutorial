import React from "react";
import "./index.css";
import { hourglassSum } from "./utils/hourglass";
import { leftRotation } from "./utils/left-rotation";
import Section from "./components/Section";

const array2d = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

export default function App() {
  return (
    <div className="App">
      <Section title="Sum of the biggest Hourglass in:">
        <pre>
          {array2d.map(el => (
            <div>
              {el.map(e => (
                <span>{e} </span>
              ))}
            </div>
          ))}
        </pre>
        is: <pre>{JSON.stringify(hourglassSum(array2d))}</pre>
      </Section>
      <Section title="Left Rotation on:">
        <pre>
          Array: {JSON.stringify([1, 2, 3, 4, 5])} after 4 left roations is:
        </pre>
        <pre>{leftRotation(5, 4, [1, 2, 3, 4, 5])}</pre>
      </Section>
      <Section title="Matching Strings">Hello</Section>
    </div>
  );
}
