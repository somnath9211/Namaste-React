const heading = React.createElement("h1", { id: "heading" }, "Hello, Namaste React from React!");
const para = React.createElement("p", { id: "para" }, "Welcome to the world of React from React.");
const para2 = React.createElement("p", { id: "para2" }, "Let's build something amazing together from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([heading, para, para2]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render([heading, para, para2]);