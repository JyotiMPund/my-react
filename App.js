import React from "react";
import ReactDOM from "react-dom/client";

const heading = [
  React.createElement("h1", { id: "heading" }, "This is h1 tag"),
  React.createElement("h1", { id: "heading" }, "This is h2 tag"),
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
