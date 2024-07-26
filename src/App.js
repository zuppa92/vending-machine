import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import VendingMachine from "./components/VendingMachine";
import Snack from "./components/Snack";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={VendingMachine} />
          <Route
            path="/snack/:name"
            render={(props) => <Snack name={props.match.params.name} />}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;