const Sitemap = require('react-router-sitemap').default;
const router = require('./src/router');  // adjust path to your router file


const generateSitemap = () => {
  return (
    new Sitemap(router)
      .build('https://www.asunatech.com') // Replace with your domain name
      .save('./public/sitemap.xml') // Path to save the sitemap
  );
};

generateSitemap();
