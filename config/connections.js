module.exports.connections = {

    localDiskDb: {
        adapter: 'sails-disk'
    },

    someMysqlServer: {
        adapter: 'sails-mysql',
        host: 'YOUR_MYSQL_SERVER_HOSTNAME_OR_IP_ADDRESS',
        user: 'YOUR_MYSQL_USER',
        password: 'YOUR_MYSQL_PASSWORD',
        database: 'YOUR_MYSQL_DB'
    },

    somePostgresqlServer: {
        adapter: 'sails-postgresql',
        host: 'YOUR_POSTGRES_SERVER_HOSTNAME_OR_IP_ADDRESS',
        user: 'YOUR_POSTGRES_USER',
        password: 'YOUR_POSTGRES_PASSWORD',
        database: 'YOUR_POSTGRES_DB'
    }
};
