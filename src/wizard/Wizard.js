import React, { Component } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Signera from "./Signera";
import Kvittens from "./Kvittens";
import StepZilla from "react-stepzilla";

class Wizard extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            step1: null,
            step2: null,
            step3: null,
        };

        this.fragor = {
            step1: "Är katten sjuk?",
            step2: "Är katten frisk?",
        };

        if (sessionStorage.getItem("form")) {
            this.state = JSON.parse(sessionStorage.getItem("form"));
        }
    }

    componentDidMount() {}
    componentWillUnmount() {}

    getStore() {
        return this.state;
    }

    updateStore(updateObj) {
        this.setState(updateObj);
        sessionStorage.setItem("form", JSON.stringify(this.state));
    }

    ChangeStepCallback(step) {
        window.sessionStorage.setItem("step", step);
    }

    render() {
        const steps = [
            {
                name: "Step1",
                component: (
                    <Step1
                        stepName="step1"
                        fraga={this.fragor.step1}
                        getStore={() => this.getStore()}
                        updateStore={u => {
                            this.updateStore(u);
                        }}
                    />
                ),
            },
            {
                name: "Step2",
                component: (
                    <Step2
                        stepName="step2"
                        fraga={this.fragor.step2}
                        getStore={() => this.getStore()}
                        updateStore={u => {
                            this.updateStore(u);
                        }}
                    />
                ),
            },
            {
                name: "Signera",
                component: (
                    <Signera
                        fragor={this.fragor}
                        stepName="signera"
                        getStore={() => this.getStore()}
                        updateStore={u => {
                            this.updateStore(u);
                        }}
                    />
                ),
            },
            {
                name: "Kvittens",
                component: (
                    <Kvittens
                        stepName="kvittens"
                        getStore={() => this.getStore()}
                        updateStore={u => {
                            this.updateStore(u);
                        }}
                    />
                ),
            },
        ];

        return (
            <div className="example">
                <div className="step-progress">
                    <StepZilla
                        showSteps={false}
                        steps={steps}
                        preventEnterSubmission={true}
                        nextTextOnFinalActionStep={"Signera"}
                        hocValidationAppliedTo={[3]}
                        startAtStep={
                            window.sessionStorage.getItem("step")
                                ? parseFloat(
                                      window.sessionStorage.getItem("step")
                                  )
                                : 0
                        }
                        nextButtonText="Nästa"
                        backButtonText="Gå tillbaka"
                        prevBtnOnLastStep={false}
                        backButtonCls="utfor"
                        nextButtonCls="utfor"
                        onStepChange={step => this.ChangeStepCallback(step)}
                    />
                </div>
            </div>
        );
    }
}
export default Wizard;
