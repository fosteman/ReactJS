import React from "react";

export class MessageInput extends React.Component {
    state = {
        value: '',
    };
    // keeps Input field in sync, re-rendered
    onChange = e => {
        this.setState({
            value: e.target.value,
        })
    };
    // Handles submitted message to components parent via propagation
    handleSubmit = () => {
        this.props.upStreamMessage(this.state.value);
        // Clear the input field
        this.setState({ value: ''});
    };

    render() {
        return (
            <div className='ui input center'>
                <input
                    onChange={this.onChange}
                    value={this.state.value}
                    type='text'
                />
                <button
                    onClick={this.handleSubmit}
                    className='ui primary button'
                    type='submit'
                >
                    Send
                </button>
            </div>
        );
    }
};
