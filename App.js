import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "This is h1 tag");

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
//React Element
const Title = () => <h1 id="heading">This is a react fun</h1>;
const elem = <span>Good Morning</span>;
const myname = <h1> {elem} Hey I am jyoti</h1>;

//React Functional Component
//Component Compositions
const Expresion = 10 + 12;
const Heading1 = () => {
  return (
    <div>
      {myname}
      {Expresion === 22 ? "you won" : "you lost"}
      {/* <Title /> */}
      {Title()} {/*we can call function like this as well */}
      <h1 id="heading1">This a react component</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

root.render(<Heading1 />); //render functional component
