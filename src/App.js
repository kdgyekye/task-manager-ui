import logo from './logo.svg';
import './App.css';
import {Route, Switch, Link} from "react-router-dom";

//Component Imports
import Sidebar from "./components/Sidebar/Sidebar.component";
import Layout from "./shared/Layout.component";

function App() {
  return (
    <div className="App">
        <Sidebar />
        <Layout />
    </div>
  );
}

export default App;
