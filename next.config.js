const isProd = process.env.NODE_ENV === "production";

module.exports = {
  basePath: "",
  assetPrefix: isProd ? "/NextJs-Twitter-2023" : "",
};
