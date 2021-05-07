import 'dotenv/config';

export class DBConfig
{
    constructor(databaseURL : string)
    {
        
    }

    closeConnection = () : boolean =>
    {
        return true;
    }
}