import "./App.css";
import React from "react";
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

// const items = [
//   {
//     title: "What is react?",
//     content: "React is a front end js framework",
//   },
//   {
//     title: "Why use react?",
//     content: "React is a favorite JS lib among engineers",
//   },
//   {
//     title: "How do you use React?",
//     content: "You use React by creating components",
//   },
// ];

const options = [
  {
    label: "Color red",
    value: "red",
  },
  {
    label: "Color green",
    value: "green",
  },
  {
    label: "Color blue",
    value: "blue",
  },
];

export default () => {
  return (
    <div className="ui segment">
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown options={options} />
    </div>
  );
};
