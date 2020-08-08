module.exports = {
    devServer: {
        port: 8081,
        open: true
    },
    /* pwa配置*/
    pwa: {
        name: '于叔',
        themeColor: '#6476DB',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        assetsVersion: "1.0.0",
        /* 
        * 俩个选择:
        * 第一个 GenerateSW ，
        *   此为默认值，
        *   每次build都会自动生成一个service-worker文件，
        *   拥有一些简单的默认配置 
        * 第二个 InjectManifest ，
        *   自定义 service-worker 文件的位置（通过 workboxOptions 来配置 sw 文件的位置），
        *   自己对 sw 进行配置。
        * */
        workboxPluginMode: "InjectManifest",
        workboxOptions: {
            swSrc: "./public/pwa/sw.js", // 自定义sw文件的位置
            importWorkboxFrom: "disabled" // 是否要引入线上的service-worker文件，我们只需要自己定义的文件，不需要谷歌提供的sw文件
        }
    }
}
