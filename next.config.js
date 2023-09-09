/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: '/api/all-products',
          headers: [
            {
              key: 'Access-Control-Allow-Origin',
              value: '*', // Allow requests from any origin, adjust as needed
            },
          ],
        },
      ]
    },
  }
  
  module.exports = nextConfig
  
