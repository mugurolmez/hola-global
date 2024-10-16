const path = require('path');

module.exports = {
  entry: './src/index.js', // Giriş dosyanız (ana JavaScript dosyanız)
  output: {
    filename: 'bundle.js', // Çıktı dosyasının adı
    path: path.resolve(__dirname, 'dist'), // Çıktı dosyalarının kaydedileceği dizin
    clean: true, // Her build'da önceki çıktı dosyalarını temizler
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // .js veya .jsx uzantılı dosyalar
        exclude: /node_modules/, // node_modules klasörünü hariç tut
        use: {
          loader: 'babel-loader', // Babel loader kullan
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // ES6 ve React desteği
          },
        },
      },
      {
        test: /\.css$/, // .css dosyaları
        use: ['style-loader', 'css-loader'], // CSS dosyalarını işler
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Resim dosyaları
        use: [
          {
            loader: 'file-loader', // Resim dosyalarını işler
            options: {
              name: '[path][name].[ext]', // Resim dosyalarının adını korur
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Hangi uzantılara izin verileceğini belirler
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // Sunucu içeriğinin bulunduğu dizin
    compress: true, // Gzip sıkıştırmasını etkinleştir
    port: 3000, // Sunucunun çalışacağı port
    setupMiddlewares: (middlewares, devServer) => {
      // Middleware'leri burada ayarlayabilirsiniz
      return middlewares;
    },
    historyApiFallback: true, // React Router ile uyumlu olması için
  },
  mode: 'development', // Geliştirme modunu ayarla
};
