const withNextra = require('nextra')({
    theme: 'nextra-theme-blog',
    themeConfig: './theme.config.jsx',
    output: "export"
})

module.exports = withNextra()