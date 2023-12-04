/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
      styledComponents: true,
    }
  }

module.exports = nextConfig

module.exports = {
    webpack: (config, { isServer }) => {
      // Add a rule to handle PDF files
      config.module.rules.push({
        test: /\.(pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: '/_next/static/files',
              outputPath: `${isServer ? '../' : ''}static/files/`,
            },
          },
        ],
      });
  
      return config;
    },
  };
  