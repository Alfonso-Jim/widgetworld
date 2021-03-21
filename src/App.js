import "./App.css";
import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";

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

const options = [
  {
    label: "The color red",
    value: "red",
  },
  {
    label: "The color green",
    value: "green",
  },
  {
    label: "The color blue",
    value: "blue",
  },
  {
    label: "The color magenta",
    value: "magenta",
  },
  {
    label: "The color orange",
    value: "orange",
  },
  {
    label: "The color salmon",
    value: "salmon",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="ui segment">
      <Route path="/">
        <Translate />
      </Route>
      <Route path="/accordion">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChanged={setSelected}
        />
      </Route>
    </div>
  );
};
