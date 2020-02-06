/* Check production mode */
const isProduction = process.env.NODE_ENV === 'production'

/** @type import('@vue/cli-service').ProjectOptions */
module.exports = {
    /* Disabled linting in production to prevent devDeps. error */
    lintOnSave: !isProduction,
    assetsDir: 'assets',
    publicPath: './',

    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.ts']
        }
    }
}
