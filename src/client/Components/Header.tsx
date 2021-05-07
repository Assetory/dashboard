import React from 'react';
import { Link } from 'react-router-dom';

const Header : React.FunctionComponent = () : React.ReactElement =>
{
    return (
        <div>
            <ul>
                <li><a href={'/'}>Back</a></li>
                <li><a href={`/${ process.env.SERVICE_NAME }/`}>Public</a></li>
                <li><a href={`/${ process.env.SERVICE_NAME }/private`}>Private</a></li>
            </ul>

            <hr />
        </div>
    );
};

export default Header;
