import React from "react";
import { Route } from "react-router-dom";
import AddPost from "./components/AddContact";
import EditContact from "./components/EditContact";
import Home from "./components/Home";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={() => <Home />} />
      <Route exact path="/add" component={() => <AddPost />} />
      <Route exact path="/edit/:id" component={() => <EditContact />} />
    </div>
  );
};
export default App;
