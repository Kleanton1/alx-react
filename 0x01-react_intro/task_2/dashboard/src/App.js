import React, { Component } from "react";
import logo from "./Holberton logo.jpg";
import { getFullYear, getFootercopy } from "./utils";

class App extends Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
        </header>
        <body className="App-body">
        <p>
          Login to access the full dashboard
        </p>
        <from>
          <label htmlFor="email" className="email">
            Email:
          </label>
          <input type="email" name="email" id="email" /> <br />
          <label htmlFor="password" className="password">
            Password:
          </label>
          <input type="password" name="password" id="password" /> <br />
          <button type="submit" id="submit">
            OK
          </button>
        </from>
        </body>
        <footer className="App-footer">
          <p>
            Copyright {getFullYear()} - {getFootercopy()}
          </p>
        </footer>
    </div>
  );
}
}

export default App;