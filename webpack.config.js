const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx', // 你的入口文件
  output: {
    path: path.resolve(__dirname, 'dist'), // 輸出目錄
    filename: 'bundle.js' // 輸出檔案名稱
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // 伺服器根目錄
    compress: true,
    port: 9000
  }
};
