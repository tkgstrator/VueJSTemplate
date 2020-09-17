module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === "production"
    ? "/VueJSTemplate/"
    : "/",
  productionSourceMap: false,
  assetsDir: "",
  outputDir: "./dist"

}