import React, {Component} from 'react';

export default class Checkbox extends Component {
    state = {
    }

    componentDidMount() {
        this.setState({checked: this.props.checked})
    }
    onClick = (e) => {
        this.setState({checked: e.target.checked})
        if(this.props.handleClick) {
            this.props.handleClick(e.target.checked)
        }
    }

    getCaption() {
        if(!this.props.checked) {
            return (<i className="far fa-square" style={{fontSize: '2em'}}></i>)
        }
        return (<i className="far fa-check-square" style={{fontSize: '2em'}}></i>)

    }
    render() {
        const inpStyles = {
            position: 'absolute',
            left: '-1000px',
        }
        const labelStyles = {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            fontSize: '1.3em',
        }
        return (
            <div className='checkbox'>
                <label style={labelStyles} htmlFor={this.props.id}>
                    {this.getCaption()}&nbsp;{this.props.caption}
                </label>
                <input style={inpStyles} type="checkbox" name={this.props.name} id={this.props.id} defaultChecked={this.props.checked} onClick={this.onClick} />
            </div>
        )
    }
}