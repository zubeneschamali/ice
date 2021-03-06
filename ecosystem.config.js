module.exports = {
  apps : [{
    name: 'ice',
    script: 'server.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 2,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      "user": "root",
      "host": ["39.97.165.61"],
      "port": "22",
      "ref": "origin/master",
      "repo": "git@github.com:Mr-luoxi/ice.git",
      "path": "/root/www/ice/production",
      "ssh_options": "StrictHostKeyChecking=no",
      // "post-deploy":"npm install",
      "pre-deploy-local": "echo 'Depoly Done!'",
      "env": {
        "NODE_ENV": "production"
    }
  }
}
}
