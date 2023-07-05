import './App.css';
// import path from 'path-browserify';
// import { createSitemap } from 'sitemaps';
import 'bootstrap/dist/css/bootstrap.min.css';
import './componentes/NavBar/NavBar.scss'
import AppRouter from './routes/AppRouter';


function App() {
  
  // createSitemap({
  //   filePath: path.join(__dirname, 'sitemap.xml'),
  //   urls: [
  //     {
  //       loc: 'https://tech-view-website.netlify.app/',
  //       lastmod: '2023-07-04',
  //       changefreq: 'yearly',
  //       priority: 1,
  //     },

  //     {
  //       loc: 'https://tech-view-website.netlify.app/cuello-de-botella',
  //       lastmod: '2022-10-21',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/cuello-de-botella/placas-de-video',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.8,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/cuello-de-botella/procesador',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.8,
  //     },

  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-5-5600x',
  //       lastmod: '2023-07-04',
  //       changefreq: 'weekly',
  //       priority: 0.8,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-5-5600x/pregunta1',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-5-5600x/pregunta2',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-5-5600x/pregunta3',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-5-5600x/pregunta4',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-5-5600x/pregunta5',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-5-5600x/pregunta6',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-5-5600x/pregunta7',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-5-5600x/pregunta8',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-5-5600x/pregunta9',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-5-5600x/pregunta10',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },

  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-7-5800x',
  //       lastmod: '2023-07-04',
  //       changefreq: 'weekly',
  //       priority: 0.8,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-7-5800x/pregunta1',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-7-5800x/pregunta2',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-7-5800x/pregunta3',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-7-5800x/pregunta4',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-7-5800x/pregunta5',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-7-5800x/pregunta6',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-7-5800x/pregunta7',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-7-5800x/pregunta8',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-7-5800x/pregunta9',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-7-5800x/pregunta10',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },

  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-9-5900x',
  //       lastmod: '2023-07-04',
  //       changefreq: 'weekly',
  //       priority: 0.8,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-9-5900x/pregunta1',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-9-5900x/pregunta2',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-9-5900x/pregunta3',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-9-5900x/pregunta4',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-9-5900x/pregunta5',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-9-5900x/pregunta6',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-9-5900x/pregunta7',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-9-5900x/pregunta8',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-9-5900x/pregunta9',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-9-5900x/pregunta10',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },

  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-9-5950x',
  //       lastmod: '2023-07-04',
  //       changefreq: 'weekly',
  //       priority: 0.8,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-9-5950x/pregunta1',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-9-5950x/pregunta2',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-9-5950x/pregunta3',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-9-5950x/pregunta4',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-9-5950x/pregunta5',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-9-5950x/pregunta6',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-9-5950x/pregunta7',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-9-5950x/pregunta8',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-9-5950x/pregunta9',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/amd-ryzen-9-5950x/pregunta10',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },

  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/apple-m1-pro',
  //       lastmod: '2023-07-04',
  //       changefreq: 'weekly',
  //       priority: 0.8,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/apple-m1-pro/pregunta1',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/apple-m1-pro/pregunta2',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/apple-m1-pro/pregunta3',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/apple-m1-pro/pregunta4',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/apple-m1-pro/pregunta5',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/apple-m1-pro/pregunta6',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/apple-m1-pro/pregunta7',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/apple-m1-pro/pregunta8',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/apple-m1-pro/pregunta9',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/apple-m1-pro/pregunta10',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },

  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i5-11600k',
  //       lastmod: '2023-07-04',
  //       changefreq: 'weekly',
  //       priority: 0.8,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i5-11600k/pregunta1',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i5-11600k/pregunta2',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i5-11600k/pregunta3',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i5-11600k/pregunta4',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i5-11600k/pregunta5',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i5-11600k/pregunta6',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i5-11600k/pregunta7',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i5-11600k/pregunta8',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i5-11600k/pregunta9',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i5-11600k/pregunta10',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },

  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i7-11700k',
  //       lastmod: '2023-07-04',
  //       changefreq: 'weekly',
  //       priority: 0.8,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i7-11700k/pregunta1',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i7-11700k/pregunta2',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i7-11700k/pregunta3',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i7-11700k/pregunta4',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i7-11700k/pregunta5',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i7-11700k/pregunta6',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i7-11700k/pregunta7',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i7-11700k/pregunta8',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i7-11700k/pregunta9',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i7-11700k/pregunta10',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i9-10900k',
  //       lastmod: '2023-07-04',
  //       changefreq: 'weekly',
  //       priority: 0.8,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i9-10900k/pregunta1',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i9-10900k/pregunta2',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i9-10900k/pregunta3',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i9-10900k/pregunta4',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i9-10900k/pregunta5',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i9-10900k/pregunta6',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i9-10900k/pregunta7',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i9-10900k/pregunta8',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i9-10900k/pregunta9',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i9-10900k/pregunta10',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },

  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i9-11900k',
  //       lastmod: '2023-07-04',
  //       changefreq: 'weekly',
  //       priority: 0.8,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i9-11900k/pregunta1',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i9-11900k/pregunta2',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i9-11900k/pregunta3',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i9-11900k/pregunta4',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i9-11900k/pregunta5',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i9-11900k/pregunta6',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i9-11900k/pregunta7',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i9-11900k/pregunta8',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i9-11900k/pregunta9',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },
  //     {
  //       loc: 'https://tech-view-website.netlify.app/procesadores/intel-core-i9-11900k/pregunta10',
  //       lastmod: '2023-07-04',
  //       changefreq: 'monthly',
  //       priority: 0.4,
  //     },

    // ],
  // }
  // );
  
  return (

          <AppRouter/>

  )
}

export default App;
