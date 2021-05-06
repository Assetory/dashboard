import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component
{
    render()
    {
        return(
            <div>
                <h2>Dashboard</h2>
                <li>
                    <a href="/ip">Link to ip test</a>
                </li>
                <li>
                    <a href="/">Link to home</a>
                </li>
            </div>
        );
    }
}

const mountNode = document.getElementById('app');
ReactDOM.render(<HelloMessage />, mountNode);

