import Main from "./components/mainComponent";
import {Provider} from "react-redux";
import configStore from "./redux/configStore";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <Provider store={configStore}>
            <BrowserRouter>
                <div className="App">
                    <Main/>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
