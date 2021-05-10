import Keycloak from 'keycloak-js';
import axios from 'axios';

export default class UserInfoObj
{
    keycloak : Keycloak.KeycloakInstance;
    keycloakUser : any;
    dataBaseUser : any;

    constructor(keycloak : Keycloak.KeycloakInstance)
    {
        this.keycloak = keycloak;
        this.keycloakUser = undefined;
        this.dataBaseUser = undefined;
    }

    getFromKeycloak = () =>
    {
        return new Promise((resolve, reject) =>
        {
            this.keycloak.loadUserInfo().then(data =>
            {
                this.keycloakUser = data;

                resolve(data);
            })
            .catch(err => reject(err));
        });
    }

    getFromDatabase = () =>
    {
        return new Promise((resolve, reject) =>
        {
            
            // axios.post(
            //     `/${ process.env.SERVICE_NAME}/api/user/create`,
            //     null,
            //     {
            //         params: { id: this.keycloakUser[ 'sub' ], email: this.keycloakUser[ 'email' ] },
            //     })
            // .then(response =>
            // {
            //     console.log(response);
            // })
            // .catch(err => reject(err));
        });
    }
}


/*
keycloakInfo.loadUserInfo().then(userInfo =>
                {
                    axios.post(
                        `/${ process.env.SERVICE_NAME}/api/user/create`,
                        null,
                        {
                            params: { id: userInfo[ 'sub' ], email: userInfo[ 'email' ] },
                        })
                    .then(response =>
                    {
                        console.log(response);
                    })
                    .catch(error =>
                    {
                        console.log(error);
                    });
    
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
*/





// function userInfoObj (keycloak : Keycloak.KeycloakInstance)
// {
//     function create()
//     {
//         return "s"
//     }
// };

// export { userInfoObj };

// /*
// const create = () =>
//     {
//         console.log("x");
//     };

//     // const populate = (newData) =>
//     // {
        
//     // }

//     // const update = () =>
//     // {

//     // }

//     // const onAuth = () => {}
//     // const onDatabase = () => {}
// */