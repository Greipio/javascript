const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts', // Entry TypeScript file
  output: {
    library: 'Greip',
    filename: 'greip.bundle.js', // Output bundled file
    path: path.resolve(__dirname, './'), // Output directory
  },
  resolve: {
    extensions: ['.ts', '.js'], // Resolve TypeScript and JavaScript files
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
