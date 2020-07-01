import ReactDOM from "react-dom";

require("prism-themes/themes/prism-vs.css");

export const replaceHydrateFunction = () => (element, container, callback) =>
  ReactDOM.render(element, container, callback);
