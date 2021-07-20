var path = require('path')

module.exports = {
  entry: './src/index.tsx',
  output: {
    libraryTarget: 'commonjs',
    filename: 'index.js',
    library: '',
    path: path.resolve(__dirname, './dist'),
  },
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader'],
        exclude: [/node_modules/, /__test__/],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
        exclude: [/node_modules/],
      },
    ],
  },
  externals: [
    {
      react: 'React',
    },
  ],
}
