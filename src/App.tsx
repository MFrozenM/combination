import React from 'react';
import './App.css';
import {UserApis} from "./apis/endpoints/userApis";
import {useApiGet} from "./hooks/useApiGet";
import RootContainer from "./pages/root/container/root.container";
import {UserRootObject} from "./apis/models/user.model";

interface AppProps {
    url?: string | undefined
}

function App() {
    return (
        <div className="App">
            <div data-testid="app-container" className="App-container">
                <RootContainer url={UserApis.GET_RANDOM_USER}/>
            </div>
        </div>
    );
}

export default App;
