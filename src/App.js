import logo from './logo.svg';
import './App.css';
import {Route, Switch, Link} from "react-router-dom";

//Component Imports
import Sidebar from "./components/Sidebar/Sidebar.component";
import Header from "./components/Header/Header.component";

function App() {
  return (
    <div className="App">
        <Sidebar />
        <Header />
    </div>
  );
}

export default App;
