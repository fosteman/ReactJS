import React from 'react'

const Link = props => <a className="navbar-brand" href={props.to}>{props.children}</a>;

export default Link;

