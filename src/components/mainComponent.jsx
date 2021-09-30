import {Route, Switch} from "react-router-dom";
import Form from "./formComponent";
import Header from "./headerComponent";
import CV from "./showCVComponent";



function Main() {
    return (
        <div className='container'>
            <Header/>
            <Switch>
                <Route exact path={'/'}>
                    <Form/>
                </Route>
                <Route exact path={'/cv'}>
                    <CV/>
                </Route>
            </Switch>
        </div>
    )
}

export default Main;