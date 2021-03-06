const env = process.env.NODE_ENV || 'development';

require('./config/database')().then(() => {
    const config = require('./config/config');
    const app = require('express')();

    require('./config/express')(app);
    require('./config/routes')(app);

    app.listen(config.port, console.log(`Server is running on port ${config.port}!`));
})