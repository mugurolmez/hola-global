const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Geliştirme modunda çalıştığınızda, hızlı derleme ve hata ayıklaması sağlar
  mode: 'development',

  // Giriş noktası (Uygulamanın başlama noktası)
  entry: './src/index.js',

  // Çıktı dosyası (Nereye derlendiği)
  output: {
    path: path.resolve(__dirname, 'build'), // build klasöründe çıkış
    filename: 'bundle.js', // Bundle dosyasının ismi
  },

  // Webpack dev server yapılandırması
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 3000,
    hot: true, // Hot Module Replacement (HMR) özelliği aktif
  },

  // Modüller (Babel ve CSS dosyalarını nasıl işleyeceğimizi belirler)
  module: {
    rules: [
      {
        test: /\.js$/, // `.js` dosyalarını işler
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Babel ile derlenir
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // ES6+ ve React JSX
          },
        },
      },
      {
        test: /\.css$/, // `.css` dosyalarını işler
        use: ['style-loader', 'css-loader'], // CSS yükleyici ile CSS'i işler
      },
      {
        test: /\.(png|jpg|gif)$/, // Görsel dosyalarını işler
        use: ['file-loader'],
      },
    ],
  },

  // Çıkartmalar (Plugins) ile ekstra işlemler
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Kendi HTML şablon dosyanızı belirtin
    }),
  ],

  // Hata ayıklamayı kolaylaştıran ayarlar
  devtool: 'inline-source-map',
};
