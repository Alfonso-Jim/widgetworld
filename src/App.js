import "./App.css";
import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is react?",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam laborum repellendus voluptate debitis inventore, minus eveniet quia dolor voluptas quidem sapiente totam tempore! Quisquam consectetur unde ipsa eaque sunt dolor aperiam! Neque deserunt vitae minima saepe sit sequi adipisci vero tempora cupiditate perferendis consectetur ad nobis blanditiis impedit, quia maxime eum maiores eaque mollitia velit nulla repudiandae deleniti praesentium. Non optio nostrum aut dolorem vel quia sunt iste, dolore a. Harum in non quas praesentium beatae aliquid at distinctio tempore ab quidem excepturi quisquam earum, architecto hic magnam aut minima assumenda sapiente sunt ipsa, quos voluptate, minus sit! Vero, nihil.",
  },
  {
    title: "Why use react?",
    content:
      "Fuga error nihil illum incidunt voluptatum, iste sit, consectetur delectus aperiam quibusdam unde? Perspiciatis in excepturi omnis dolor quod veritatis sapiente dignissimos, officia illum dolorum dolores vero laborum tenetur, ratione aut sed eius sequi fugiat nulla quae ad culpa. Maxime eos numquam pariatur, ex nulla facere possimus dolores corporis quasi repellat, harum dignissimos tenetur quidem, nostrum quod neque. Exercitationem deserunt reprehenderit, harum unde id dolor suscipit fuga enim repellat. Eaque ab repudiandae fugiat dolor consequuntur tempora nobis doloribus dolores, obcaecati maiores enim, dolore similique doloremque ea libero facilis voluptatibus dolorum voluptatem est ex dolorem. Corrupti consectetur quia iusto unde excepturi.",
  },
  {
    title: "How do you use React?",
    content:
      "Earum, adipisci laboriosam quasi nam omnis deserunt ad maxime quia sit praesentium explicabo aliquid deleniti ducimus. Deleniti aperiam obcaecati sequi optio vero mollitia quo quibusdam distinctio rem natus corrupti sunt doloribus earum voluptate blanditiis soluta dolores quia vel totam aspernatur, excepturi ipsam harum dolor id! Dolorem culpa hic eveniet eligendi autem ipsam nulla quaerat. Explicabo ut temporibus repudiandae molestiae esse sint, aperiam excepturi in a similique labore ullam vel doloremque fugiat nisi ea dolor quis nam, ab laboriosam accusamus maxime blanditiis! Officia dolores praesentium odio voluptate, ipsam illo sequi labore autem alias mollitia est, eligendi deleniti inventore voluptas aperiam vero.",
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
    <div className="ui container">
      <div className="ui grid'">
        <div className="ui row">
          <div className="sixteen wide column">
            <div className="ui segment" style={{ marginTop: "30px" }}>
              <Header />
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
          </div>
        </div>
      </div>
    </div>
  );
};
