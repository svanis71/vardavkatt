import React, { Component } from "react";
import logo from "../img/cat.svg";
import {
    createBrowserHistory,
    createHashHistory,
    createMemoryHistory,
} from "history";

class Header extends Component {
    onLinkClick = e => {
        const hist = createBrowserHistory();
        hist.push(this.props.location.pathname);
    };

    render() {
        return (
            <header className="App-header">
                <a href="/">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Ansök om vård av katt</h1>
                </a>
                <a
                    href="/settings"
                    className="settings-icon"
                    title="Inställningar"
                    onClick={this.onLinkClick}
                >
                    <span className="menu-icon">
                        <i class="fas fa-cog" />
                    </span>
                </a>
            </header>
        );
    }
}

export default Header;
