import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

class ChildComponent extends React.Component {
    static propTypes = {
        name: PropTypes.string
    };
    static defaultProps = (
        function() { // save contextual this
        console.log("ChildComponent : defaultProps");
        return {}; // set empty this.props
    })();
    constructor(props) {
        super(props);
        console.log("ChildComponent: state");
        this.state = {
            name: "Mark"
        };
        this.oops = this.oops.bind(this);
    }
    componentWillMount() {
        console.log("ChildComponent : componentWillMount");
    }
    componentDidMount() {
        console.log("ChildComponent : componentDidMount");
    }
    componentWillReceiveProps(nextProps) {
        console.log("ChildComponent : componentWillReceiveProps()");
        console.log("nextProps: ", nextProps);
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("<ChildComponent/> - componentWillUpdate");
        console.log("this.rprops: ", this.props);
        console.log("this.state: ", this.state);
        console.log("nextProps: ", nextProps);
        console.log("nextState: ", nextState);
    }
    componentWillUnmount() {
        console.log("ChildComponent: componentWillUnmount");
    }
    oops() {
        this.setState(() => ({ oops: true }));
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('<ChildComponent/> ­ shouldComponentUpdate()'); console.log('nextProps: ', nextProps);
        console.log('nextState: ', nextState);
        return true; }
    componentDidUpdate(previousProps, previousState) {
        console.log('ChildComponent: componentDidUpdate'); console.log('previousProps:', previousProps); console.log('previousState:', previousState);
    }
    render() {
        if (this.state.oops) {
            throw new Error("Something went wrong");
        }
        console.log("ChildComponent: render");
        return [
            <div key="name">Name: {this.props.name}</div>,
            <button key="error" onClick={this.oops}>
                Create error
            </button>
        ];
    }
}

export class ParentComponent extends React.Component {
    static defaultProps = (function() {
        console.log("ParentComponent: defaultProps");
        return {
            true: false
        };
    })();
    constructor(props) {
        super(props);
        console.log("ParentComponent: state");
        this.state = { text: "", };
        this.onInputChange = this.onInputChange.bind(this);
    }
    componentWillMount() {
        console.log("ParentComponent: componentWillMount");
    }
    componentDidMount() {
        console.log("ParentComponent: componentDidMount");
    }
    componentWillUnmount() {
        console.log("ParentComponent: componentWillUnmount");
    }

    onInputChange(e) {
        const text = e.target.value;
        this.setState(() => ({ text }));
    }
    componentDidCatch(err, errorInfo) {
        console.log("componentDidCatch");
        console.error(err);
        console.error(errorInfo);
        this.setState(() => ({ err, errorInfo }));
    }
    render() {
        console.log("ParentComponent: render");
        if (this.state.err) {
            return (
                <details style={{ whiteSpace: "pre-wrap" }}>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo.componentStack}
                </details>
            );
        }
        return [
            <h2 key="h2">React rendering and lifecycle methods - practicum</h2>,
            <input
                key="input"
                value={this.state.text}
                onChange={this.onInputChange}
            />,
            <ChildComponent key="ChildComponent" name={this.state.text} />
        ];
    }
}

render(<ParentComponent />, document.getElementById("root"));