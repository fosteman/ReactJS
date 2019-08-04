/*
* Component A is root component that provides the context and
* component C as one of the child components that consumes the context.
* But in between is component D. The application has a colored theme
* that can be used to style components. Thus, to make the colored theme available
* for every component via the React context without passing it as mandatory props through each component.
* */
class A extends React.Component {
    getChildContext() {
        return {
            coloredTheme: "green"
        };
    }
    render() {
        return <D />
    }
}
A.childContextTypes = {
    coloredTheme: PropTypes.string
};

function C() {
    return (
        <div style={{ color: this.context.coloredTheme }}>
            {this.children}
        </div>);
    }
C.contextTypes = {
    coloredTheme: PropTypes.string
};
