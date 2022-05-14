//file configuration for pm2
module.exports = {
    apps: [
        {
            name: 'my-front-end-next-app',
            exec_mode: 'cluster',
            // instances: 'max',
            instances: '4',
            cwd: '/front-end-nextjs/',
            script: 'node_modules/next/dist/bin/next',
            args: "start",
            env: {
                NODE_ENV: "production",
                production: true }


        }
    ]
}