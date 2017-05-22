const _config  = {
    env: {
      dev: {
        clientPath: '/../client/',
        db: 'mongodb://127.0.0.1:27017/userslist'
      },
      prod: {
        clientPath: 'views',
        db: 'mongodb://127.0.0.1:27017/userslist'
      }
   }
};

module.exports = _config;
