const path = require("path");
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: [path.join(__dirname, "src", "styles")]
        }
      }
    }
  }
};
