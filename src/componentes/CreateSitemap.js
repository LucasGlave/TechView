

const CreateSitemap = () => {
    // Obtén todos los enlaces internos de tu sitio web
    const internalLinks = document.querySelectorAll('a[href^="/"]');
    
    // Crea el contenido del sitemap
    let sitemapContent = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemapContent += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
    // Agrega cada enlace interno al sitemap
    internalLinks.forEach((link) => {
      const url = link.getAttribute('href');
      sitemapContent += `  <url>\n    <loc>${url}</loc>\n  </url>\n`;
    });
  
    sitemapContent += '</urlset>';
  
    // Descarga el sitemap como un archivo
    const blob = new Blob([sitemapContent], { type: 'text/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    // a.download = 'sitemap.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  
  // Llama a la función para generar el sitemap
  CreateSitemap();
  

export default CreateSitemap;