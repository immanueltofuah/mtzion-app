import "./App.css";
import Home from "./Home";
import Type from "./Type";
import Member from "./Member";
import Visitor from "./Visitor";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="Type" component={Type} />
        <Route path="Member" component={Member} />
        <Route path="Visitor" component={Visitor} />
      </Switch>
    </div>
  );
}

export default App;
