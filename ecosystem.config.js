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
      // instances: '3',
    },
  ],
  env: {
    NODE_ENV: 'development',
  },
  env_production: {
    NODE_ENV: 'production',
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
