import React, { useState, useEffect } from 'react';

import Keycloak from 'keycloak-js';

interface IProps {
    history: any;
}

const Private : React.FunctionComponent<IProps> = ({ history }) : React.ReactElement =>
    {
        const [ keycloak, setKeycloak ] = useState<Keycloak.KeycloakInstance>(null);
        const [ authenticated, setAuthenticated ] = useState<boolean>(false);
        const [ loading, setLoading ] = useState<boolean>(true);
        const [ userInfo, setUserInfo ] = useState({});

        useEffect(() =>
        {
            const keycloakInfo = Keycloak({
                'realm': process.env.SERVICE_ENV,
                'url': 'https://auth.assetory.net/auth/',
                'clientId': 'service',
            });

            keycloakInfo.init({ onLoad: 'login-required' }).then(authenticated =>
            {
                setKeycloak(keycloakInfo);
                setAuthenticated(authenticated);

                keycloakInfo.loadUserInfo().then(userInfo =>
                    {
                        console.log(userInfo);
        
                        setUserInfo({
                            id: userInfo[ 'sub' ],
                            email: userInfo[ 'email' ],
                            verified: userInfo[ 'email_verified' ] === true ? 'true': 'false',
                            userName: userInfo[ 'preferred_username' ] || 'Not set',
                            groups: userInfo[ 'groups' ],
                        });
        
                        setLoading(false);
                    });
            });
        }, []);

        const logout = () : void =>
        {
            history.push('/');

            keycloak.logout();
        };

        return (
            <>
                {
                    !loading ?
                    <>
                        <ul>
                            <li><b>ID:</b> { userInfo[ 'id' ] }</li>
                            <li><b>Email:</b> { userInfo[ 'email' ] }</li>
                            <li><b>Email Verified:</b> { userInfo[ 'verified' ] }</li>
                            <li><b>Username:</b> { userInfo[ 'userName' ] }</li>
                            <li><b>Groups:</b>
                                <ul>
                                {
                                    userInfo[ 'groups' ].map((group, i) =>
                                    {
                                        return <li key={ i }>{ group }</li>;
                                    })
                                }
                                </ul>
                            </li>
                        </ul>

                        <button onClick={() => logout()}>
                            Logout
                        </button>

                    </>
                    :
                    <p>loading...</p>
                }
            </>
        );
    };

export default Private;
