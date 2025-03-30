import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title = "Sajal Chandaiya | Full Stack Developer", 
  description = "Full Stack Developer specializing in React, Flutter, and more. Check out my projects and skills.",
  keywords = "Sajal Chandaiya, developer, full stack, React, Flutter, portfolio",
  pathname = "", 
  image = "../assets/photo.png"
}) => {
  const siteUrl = "https://sajal0206.web.app"; // Updated to correct domain
  const canonical = pathname ? `${siteUrl}/${pathname}` : siteUrl;
  
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* OpenGraph tags */}
      <meta property="og:site_name" content="Sajal Chandaiya Portfolio" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:type" content="website" />
      
      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      
      {/* Other important meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <html lang="en" />
    </Helmet>
  );
};

export default SEO; 