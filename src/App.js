import "./App.css";
import React, { useState } from "react";
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
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="ui segment">
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChanged={setSelected}
          options={options}
        />
      ) : null}
    </div>
  );
};
