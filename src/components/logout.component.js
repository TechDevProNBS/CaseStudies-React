import React from 'react';

export default class Logout extends React.Component {
    componentDidMount = () => {
        fetch(`http://localhost:4500/logout`,{
            method: 'GET'})
            .then(window.location.replace(`/viewprofiles`))
    }
    render() {
        return (
            <div>
            </div>
        );
    }
}