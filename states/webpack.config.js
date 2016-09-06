module.exports = {
    entry: './index.jsx',
    output:{
        path: __dirname,
        filename: 'build.js'
    },
    module:{
        loaders:[
            {
                exclude: /node_modules/,
                loader: 'babel',
                query:{
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
