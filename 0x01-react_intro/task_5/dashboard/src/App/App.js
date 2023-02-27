import React, { Component } from "react";
import logo from "./Holberton_logo.jpg";
import { getFullYear, getFooterCopy } from "../utils/utils";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>School dashboard</h1>
        </header>
        <body className="App-body">
          <p>Login to access the full dashboard</p>
          <form>
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
          </form>
        </body>
        <footer className="App-footer">
          <p>
            Copyright {getFullYear()} - {getFooterCopy()}
          </p>
        </footer>
      </div>
    );
  }
}

export default App;