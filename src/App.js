import logo from "./logo.svg";
import "./App.css";

// import About from "./component/About";
// import Contact from "./component/Contact";
// import WillMountExample from "./component/WillMountExample";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Forms from "./component/Forms";
import Statemethod from "./component/Statemethod";
import ListExample from "./component/ListExample";
import Functioncomponent from "./Functioncomponent";
import KeysExample from "./component/KeysExample";
import Inicialstate from "./Inicialstate";

function App() {
  return (
    <div>
      {/* <Home name="durga">
        <p>hellow hi welcome </p>
      </Home> */}
      {/* <About name="dur" value="1233">
        <p>new project start</p>
        <p>clear now</p>
      </About> */}
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/forms">Form</Link>
          </li>
          <li>
            <Link to="/statemethod">State</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
          <li>
            <Link to="/Functioncomponent">Func</Link>
          </li>
          <li>
            <Link to="/keys">Todo</Link>
          </li>
          <li>
            <Link to="/Inicialstate">state</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/forms" element={<Forms />}></Route>
          <Route path="/statemethod" element={<Statemethod />}></Route>
          <Route path="/list" element={<ListExample />}></Route>
          <Route path="/keys" element={<KeysExample />}></Route>
          <Route
            path="/Functioncomponent"
            element={<Functioncomponent />}
          ></Route>
          <Route path="/Inicialstate" element={<Inicialstate />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
