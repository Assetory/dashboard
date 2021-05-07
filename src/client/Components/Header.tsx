import React from 'react';
import { Link } from 'react-router-dom';

const Header : React.FunctionComponent = () : React.ReactElement =>
{
    return (
        <div>
            <ul>
                <li><a href={'/'}>Back</a></li>
                <li><a href={`/${ process.env.SERVICE_NAME }/`}>Dashboard home</a></li>
                <li><a href={`/${ process.env.SERVICE_NAME }/public`}>Public page</a></li>
                <li><a href={`/${ process.env.SERVICE_NAME }/error`}>Error page</a></li>
            </ul>

            <hr />
        </div>
    );
};

export default Header;