import { createRoot } from "react-dom/client";
import React from "react";

//Select the HTML element with id=root and creact a react root on it,
//then render a react element which is the H1Hello worldH1 into that root.
//This will display hello world inside the div id=root on the web page
createRoot(document.getElementById("root")).render(<h1>Hello World</h1>);
