import * as React from "react";

export default class App extends React.Component {
    render() {
        return (
            <div>Node version: {process.versions.node}</div>
        );
    }
}