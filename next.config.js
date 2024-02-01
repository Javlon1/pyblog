module.exports = {
  // Настройки прокси для решения проблем с CORS
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.example.com/:path*',
      },
      {
        source: '/:path*',
        destination: '/404', // Перенаправляем все остальные запросы на страницу 404
      },
    ];
  },

  // Настройки для компонента next/image
  images: {
    domains: ['54a8900a61b443e94f247d6785244b40.serveo.net', 'pyblog.uz'], // Домен сайта
  },
};