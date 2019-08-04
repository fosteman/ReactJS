/*The Provider component only sets the colored theme from the incoming props.
In addition, it only renders its children and doesn’t add anything*/

class ThemeProvider extends React.Component {
    getChildContext() {
    return {
        coloredTheme: this.props.coloredTheme
    };
    }
    render() {
        return <div>{this.props.children}</div>;
    }
}
ThemeProvider.childContextTypes = {
    coloredTheme: PropTypes.string
};
class App extends React.Component {
    render() {
    return ( <div>
            <Paragraph>
                LoremIpsum
            </Paragraph>
        </div>
    );
    }
}
class Paragraph extends React.Component {
    render() {
    const { coloredTheme } = this.context;
    return (
        <p style={{ color: coloredTheme }}> {this.props.children}
        </p> );
    }
}
Paragraph.contextTypes = {
    coloredTheme: PropTypes.string
};

const coloredTheme = "green";
// hardcoded theme
// and would be different for every user of application
// it would need to be fetched first
// and varies depending on the app user
ReactDOM.render(
    <ThemeProvider coloredTheme={coloredTheme}>
        <App />
    </ThemeProvider>,
    document.getElementById('app')
);
