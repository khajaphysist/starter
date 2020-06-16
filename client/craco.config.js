const CracoLessPlugin = require("craco-less");
const { whenDev } = require('@craco/craco');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    configure: (webpackConfig) => {
      whenDev(() => {
        const babelLoaderRule = webpackConfig.module.rules
          .find((x) => Array.isArray(x.oneOf))
          .oneOf.find(
            (x) =>
              x.loader &&
              x.loader.includes('babel-loader') &&
              x.options &&
              x.options.presets &&
              x.options.presets.some((p) => p.includes('babel-preset-react-app'))
          );

        babelLoaderRule.options.plugins.push(require.resolve('react-refresh/babel'));
      });

      return webpackConfig;
    },
    plugins: [
      ...whenDev(
        () => [
          new ReactRefreshWebpackPlugin({
            // Proper setup for this would require the new unpublished version of CRA.
            // We'll disable the integration for now.
            overlay: false,
          }),
        ],
        []
      ),
    ],
  },
};
