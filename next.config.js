/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pngimg.com',
                port: '',
                pathname: '**' 
            }
        ]
    }
}

module.exports = nextConfig
