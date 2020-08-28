module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://119.23.250.47/juejin',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}