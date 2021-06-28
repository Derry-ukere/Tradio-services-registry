/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
module.exports = {
  apps: [
    {
      name: 'app-registry',
      script: './dist/bin/www/index.js',
      watch: true,
      instances: '3',
    },
  ],
  env: {
    NODE_ENV: 'development',
    MONGO_URL:
      'mongodb+srv://Mudiagaukere1256:Mudiagaukere1256@cluster0.rqm7q.mongodb.net/proshop?authSource=admin&replicaSet=atlas-4mz03w-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true',
    APP_PORT: 7000,
  },
  env_production: {
    NODE_ENV: 'production',
    MONGO_URL:
      'mongodb+srv://Mudiagaukere1256:Mudiagaukere1256@cluster0.rqm7q.mongodb.net/proshop?authSource=admin&replicaSet=atlas-4mz03w-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true',
    APP_PORT: 7000,
  },

  deploy: {
    production: {
      user: 'Derry Ukere',
      host: 'SSH_HOSTMACHINE',
      ref: 'origin/master',
      repo: 'GIT_REPOSITORY',
      path: 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
    },
  },
};
