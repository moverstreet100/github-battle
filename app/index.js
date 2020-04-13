import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Popular from "./components/Popular";

// component has
// state
// lifecycle
// UI
//jsx is html written inside of javascript

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Popular />
      </div>
    );
  }
}

//takes two arguments
//1 React.element
//2 where to rend3er the element to

ReactDOM.render(<App />, document.getElementById("app"));
