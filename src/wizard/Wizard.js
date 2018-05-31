import React, { Component } from "react";
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import StepZilla from 'react-stepzilla';

class Wizard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.sampleStore = {
        email: '',
        gender: '',
        savedToCloud: false
        };
    }

    componentDidMount() {}

    componentWillUnmount() {}

    getStore() {
        return this.sampleStore;
    }

    updateStore(update) {
        this.sampleStore = {
        ...this.sampleStore,
        ...update,
        }
    }

    render() {
        const steps =
        [
            {name: 'Step1', component: <Step1 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
            {name: 'Step2', component: <Step2 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
            {name: 'Step3', component: <Step3 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />}
        ]

        return (
        <div className='example'>
            <div className='step-progress'>
            <StepZilla
                showSteps={false}
                steps={steps}
                preventEnterSubmission={true}
                nextTextOnFinalActionStep={"Signera"}
                hocValidationAppliedTo={[3]}
                startAtStep={0}
                nextButtonText="Nästa"
                backButtonText="Gå tillbaka"
                onStepChange={(step) => window.sessionStorage.setItem('step', step)}
            />
            </div>
        </div>
        )
    }
}
 export default Wizard;