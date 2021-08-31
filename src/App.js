import React, {Fragment} from "react";
import './App.css';

//Component Imports
import Sidebar from "./components/Sidebar/Sidebar.component";
import Layout from "./shared/Layout/Layout.component";

function App() {
  return (
    <div className="App" style={{backgroundColor: 'whitesmoke'}}>
        <Sidebar />
        <Layout />
    </div>
  );
}

export default App;
