import React, { Component } from "react";

export default class Query extends Component {
    render() {
        return (
            <div className="query-page">
                <header>
                    <h1>
                        <label htmlFor="answer-input" />
                        {this.props.queryText}
                    </h1>
                </header>
                <form className="answer-area">
                    <button className="back-button">
                        <i class="fas fa-arrow-left" />
                    </button>
                    <section className="answer">
                        <input type="text" name="" id="answer-input" />
                    </section>
                    <button className="next-button">
                        <i class="fas fa-arrow-next" />
                    </button>
                </form>
                <footer />
            </div>
        );
    }
}
