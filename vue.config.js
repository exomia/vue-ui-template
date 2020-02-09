/* Check production mode */
const isProduction = process.env.NODE_ENV === 'production';

/** @type import('@vue/cli-service').ProjectOptions */
module.exports = {
    /* Disabled linting in production to prevent devDeps. error */
    lintOnSave: !isProduction,
    assetsDir: 'assets',
    publicPath: './',

    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.ts'],
        },
    },

    chainWebpack: config => {
        config.optimization.minimizer('terser').tap(args => {
            args[0].terserOptions.compress.arrows = true;
            args[0].terserOptions.compress.arguments = true;
            // args[0].terserOptions.compress.booleans_as_integers = true;
            args[0].terserOptions.compress.collapse_vars = true;
            args[0].terserOptions.compress.computed_props = true;
            args[0].terserOptions.compress.drop_console = true;
            args[0].terserOptions.compress.ecma = 2019;
            args[0].terserOptions.compress.hoist_funs = true;
            args[0].terserOptions.compress.hoist_props = true;
            args[0].terserOptions.compress.passes = 2;

            args[0].terserOptions.compress.inline = true;
            args[0].terserOptions.compress.loops = true;
            args[0].terserOptions.compress.negate_iife = true;
            args[0].terserOptions.compress.properties = true;
            args[0].terserOptions.compress.reduce_vars = true;
            args[0].terserOptions.compress.switches = true;
            args[0].terserOptions.compress.toplevel = true;
            args[0].terserOptions.compress.typeofs = true;

            // unsafe
            args[0].terserOptions.compress.unsafe = true;
            args[0].terserOptions.compress.unsafe_arrows = true;
            args[0].terserOptions.compress.unsafe_comps = true;
            args[0].terserOptions.compress.unsafe_Function = true;
            args[0].terserOptions.compress.unsafe_math = true;
            args[0].terserOptions.compress.unsafe_methods = true;
            args[0].terserOptions.compress.unsafe_proto = true;
            args[0].terserOptions.compress.unsafe_regexp = true;
            args[0].terserOptions.compress.unsafe_undefined = true;

            // disable safari10
            args[0].terserOptions.mangle.safari10 = false;
            return args;
        });
    },
};
