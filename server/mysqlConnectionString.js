/**
 * Created by Alex.W on 2016/12/4.
 */
var mysqlConnectionString = {
    connection: {
        dev : {
            host: 'yourhost',
            user: 'yourdatabaseusername',
            password: 'yourpassword',
            database : 'yourdatabasename'
        }

        ,

        qa : {
            host: 'yourhost',
            user: 'yourdatabaseusername',
            password : 'yourpasssword',
            database : 'yourdatabasename'
        }
        ,prod : {
            host: 'yourhost',
            user: 'yourdatabaseusername',
            password : 'yourpasssword',
            database : 'yourdatabasename'
        }
    }
};


module.exports.mysqlConnectionString = mysqlConnectionString;