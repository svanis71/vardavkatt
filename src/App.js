import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./page/Header";
import Footer from "./page/Footer";
import Home from "./Home";
import Settings from "./Settings";
import { HttpError } from "./error/HttpError";
import Wizard from "./wizard/Wizard";

export default class App extends Component {
    componentWillMount() {
        console.log("willMOunt");
    }

    render() {
        return (
            <div className="App">
                <Header />
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/wizard" component={Wizard} />
                        <Route path="/settings" component={Settings} />
                        <Route
                            path="*"
                            exact={true}
                            render={() => <HttpError statusCode="404" />}
                        />
                    </Switch>
                </BrowserRouter>
                <Footer />
            </div>
        );
    }
}
