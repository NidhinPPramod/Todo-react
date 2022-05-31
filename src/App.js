import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Completed from "./components/Completed";
import Progress from "./components/Progress";
import Deleted from "./components/Deleted";


function App() {
    return (
        <div>
            <Navbar/>
            <div className="home-background flex-row d-flex w-100  justify-content-between p-4">
                <div>
                    <Completed/>
                </div>
                <div>
                    <Progress/>
                </div>
                <div>
                    <Deleted/>
                </div>
            </div>
        </div>
    );
}

export default App;
