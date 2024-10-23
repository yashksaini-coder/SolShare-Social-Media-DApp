const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://your-solshare-website.com';
module.exports = {
    siteUrl: baseUrl, 
    generateRobotsTxt: true, 
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
};