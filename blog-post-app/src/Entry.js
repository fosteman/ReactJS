import React from 'react';
const Entry = props => (
        <div className="ui container">
            <form className={'ui input'}>
                <label>Comment:
                    <textarea name='comment' placeholder='Your comment...' />
                </label>
                <button onClick={props.handleSubmitSignal} value='Send' />
            </form>
        </div>
);
export default Entry;
