import "./App.css";
import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is react?",
    content: "React is a front end js framework",
  },
  {
    title: "Why use react?",
    content: "React is a favorite JS lib among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

export default () => {
  return (
    <div className="ui segment">
      <Accordion items={items} />
    </div>
  );
};
