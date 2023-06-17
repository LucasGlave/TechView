import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { HelmetProvider, Helmet } from 'react-helmet-async';


function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <button
      type="button"
      style={{ backgroundColor: '#17294c' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

class CuelloPlaca extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placaVideoSeleccionada: '',
      procesadoresRecomendados: [],
    };
  }

  handleChangePlacaVideo = (placaVideo) => {
    this.setState({
      placaVideoSeleccionada: placaVideo,
      showProcesadores: true,
      acordeonAbierto: false,
    });
    const acordeonesAbiertos = { ...this.state.acordeonesAbiertos };
    acordeonesAbiertos[0] = false;
    this.setState({ acordeonesAbiertos });
    this.obtenerProcesadoresRecomendados(placaVideo);
  };

  obtenerProcesadoresRecomendados = (placaVideo) => {
    let procesadores = [];

    if (placaVideo === 'NVIDIA GeForce GTX 1660 Ti') {
      procesadores = [
        { nombre: 'AMD Ryzen 5 3600', info: 'El AMD Ryzen 5 3600 es un procesador altamente valorado debido a su excelente relación precio-rendimiento. Con 6 núcleos y 12 hilos, este procesador ofrece un sólido rendimiento en juegos y tareas multitarea. Además, su arquitectura Zen 2 proporciona una eficiencia energética mejorada, lo que se traduce en un menor consumo de energía y una menor generación de calor. Esto es especialmente beneficioso cuando se combina con la tarjeta gráfica NVIDIA GeForce GTX 1660 Ti, ya que permite un funcionamiento eficiente y un rendimiento equilibrado.' },
        { nombre: 'Intel Core i5-10600K', info: 'El Intel Core i5-10600K es un procesador de la serie desbloqueada de Intel que ofrece un excelente rendimiento para juegos y aplicaciones exigentes. Con 6 núcleos y 12 hilos, junto con frecuencias base y turbo altas, este procesador brinda una potencia de procesamiento sólida y capacidad de overclocking. Al combinarlo con la tarjeta gráfica GTX 1660 Ti, se obtiene una experiencia de juego fluida y un rendimiento excepcional en tareas intensivas.' },
        { nombre: 'AMD Ryzen 7 3700X', info: 'El AMD Ryzen 7 3700X es un procesador de gama alta que ofrece un rendimiento excepcional en aplicaciones que requieren un alto rendimiento en hilos, como la edición de video, el renderizado 3D y la transmisión en vivo. Con 8 núcleos y 16 hilos, este procesador ofrece un rendimiento multitarea impresionante y una respuesta rápida en tareas intensivas. Al combinarlo con la GTX 1660 Ti, obtendrás una experiencia de juego suave y una capacidad de multitarea fluida.' },
        { nombre: 'Intel Core i7-10700K', info: 'El Intel Core i7-10700K es un procesador de alta gama con 8 núcleos y 16 hilos, diseñado para brindar un rendimiento excepcional en juegos y aplicaciones exigentes. Con frecuencias base y turbo altas, este procesador ofrece una potencia de procesamiento impresionante y una capacidad de overclocking mejorada. Al combinarlo con la tarjeta gráfica GTX 1660 Ti, disfrutarás de una experiencia de juego fluida y un rendimiento rápido en tareas intensivas, maximizando el potencial de la tarjeta gráfica.' }
      ];
    } else if (placaVideo === 'NVIDIA GeForce GTX 1660 Super') {
      procesadores = [
        { nombre: 'AMD Ryzen 5 3600', info: 'El AMD Ryzen 5 3600 es un procesador de excelente relación calidad-precio y ofrece un rendimiento sólido para juegos y tareas multitarea. Con 6 núcleos y 12 hilos, este procesador ofrece un equilibrio adecuado entre rendimiento y eficiencia energética. Es capaz de manejar fácilmente los juegos más exigentes junto con la GTX 1660 Super, brindando una experiencia de juego suave y fluida.' },
        { nombre: 'Intel Core i5-10400', info: 'El Intel Core i5-10400 es un procesador de 10ª generación de Intel que ofrece un rendimiento confiable y eficiente para juegos y tareas cotidianas. Con 6 núcleos y 12 hilos, este procesador brinda una potencia de procesamiento sólida y frecuencias turbo para impulsar el rendimiento en aplicaciones intensivas. Combinado con la GTX 1660 Super, proporciona una experiencia de juego inmersiva y un rendimiento fluido en tareas multitarea.' },
        { nombre: 'AMD Ryzen 7 3700X', info: 'El AMD Ryzen 7 3700X es un procesador de alto rendimiento con 8 núcleos y 16 hilos, diseñado para manejar tareas exigentes como la edición de video y el renderizado 3D. Este procesador ofrece un rendimiento multitarea excepcional y una alta capacidad de respuesta. Al combinarlo con la GTX 1660 Super, obtendrás un rendimiento suave y fluido en juegos y aplicaciones exigentes.' },
        { nombre: 'Intel Core i7-10700', info: 'El Intel Core i7-10700 es un procesador potente de 10ª generación de Intel con 8 núcleos y 16 hilos. Ofrece una frecuencia base alta y capacidad de turbo para brindar un rendimiento rápido y fluido en juegos y aplicaciones intensivas. Este procesador es capaz de aprovechar al máximo el rendimiento de la GTX 1660 Super, ofreciendo una experiencia de juego de alta calidad y un rendimiento óptimo en tareas multitarea exigentes.' },
      ];
    }
    else if (placaVideo === 'NVIDIA GeForce RTX 2060') {
      procesadores = [
        { nombre: 'AMD Ryzen 5 5600X', info: 'El AMD Ryzen 5 5600X es un procesador de última generación con 6 núcleos y 12 hilos. Ofrece un rendimiento excepcional en juegos y aplicaciones intensivas, gracias a su arquitectura Zen 3 mejorada y altas velocidades de reloj. Combinado con la potencia de la RTX 2060, brinda un rendimiento fluido y una experiencia de juego inmersiva.' },
        { nombre: 'Intel Core i5-11600K', info: 'El Intel Core i5-11600K es un procesador de 11ª generación de Intel, con 6 núcleos y 12 hilos. Ofrece un excelente rendimiento en juegos y aplicaciones exigentes, gracias a sus altas velocidades de reloj y su capacidad de overclocking. Junto con la RTX 2060, proporciona un rendimiento sólido y una experiencia de juego fluida.' },
        { nombre: 'AMD Ryzen 7 5800X', info: 'El AMD Ryzen 7 5800X es un procesador de alto rendimiento con 8 núcleos y 16 hilos. Con su arquitectura Zen 3 y altas velocidades de reloj, brinda un rendimiento excepcional en juegos y tareas multitarea. Al combinarse con la potente RTX 2060, ofrece un rendimiento de juego de alta calidad y una experiencia inmersiva.' },
        { nombre: 'Intel Core i7-10700K', info: 'El Intel Core i7-10700K es un procesador potente de 10ª generación de Intel, con 8 núcleos y 16 hilos. Ofrece una frecuencia base alta y capacidad de overclocking para un rendimiento óptimo en juegos y aplicaciones intensivas. En conjunto con la RTX 2060, proporciona un rendimiento fluido y una experiencia de juego de alta calidad.' },
      ];
    }
    else if (placaVideo === 'NVIDIA GeForce RTX 2060 Super') {
      procesadores = [
        { nombre: 'AMD Ryzen 5 5600X', info: 'El AMD Ryzen 5 5600X es un procesador de última generación con 6 núcleos y 12 hilos. Ofrece un rendimiento excepcional en juegos y aplicaciones intensivas gracias a su arquitectura Zen 3 mejorada y altas velocidades de reloj. En combinación con la potencia de la RTX 2060 Super, brinda un rendimiento fluido y una experiencia de juego inmersiva.' },
        { nombre: 'Intel Core i5-11600K', info: 'El Intel Core i5-11600K es un procesador de 11ª generación de Intel con 6 núcleos y 12 hilos. Ofrece un excelente rendimiento en juegos y aplicaciones exigentes gracias a sus altas velocidades de reloj y capacidad de overclocking. Junto con la RTX 2060 Super, proporciona un rendimiento sólido y una experiencia de juego fluida.' },
        { nombre: 'AMD Ryzen 7 5800X', info: 'El AMD Ryzen 7 5800X es un procesador de alto rendimiento con 8 núcleos y 16 hilos. Con su arquitectura Zen 3 y altas velocidades de reloj, brinda un rendimiento excepcional en juegos y tareas multitarea. Al combinarse con la potente RTX 2060 Super, ofrece un rendimiento de juego de alta calidad y una experiencia inmersiva.' },
        { nombre: 'Intel Core i7-10700K', info: 'El Intel Core i7-10700K es un procesador potente de 10ª generación de Intel con 8 núcleos y 16 hilos. Ofrece una frecuencia base alta y capacidad de overclocking para un rendimiento óptimo en juegos y aplicaciones intensivas. En conjunto con la RTX 2060 Super, proporciona un rendimiento fluido y una experiencia de juego de alta calidad.' },
      ];
    }
    else if (placaVideo === 'NVIDIA GeForce RTX 2070') {
      procesadores = [
        { nombre: 'AMD Ryzen 5 5600X', info: 'El AMD Ryzen 5 5600X es un procesador de última generación con 6 núcleos y 12 hilos. Ofrece un rendimiento sólido en juegos y tareas multitarea gracias a su arquitectura Zen 3 y altas velocidades de reloj. En combinación con la potencia de la RTX 2070, brinda un rendimiento de juego fluido y una experiencia visual inmersiva.' },
        { nombre: 'Intel Core i5-11600K', info: 'El Intel Core i5-11600K es un procesador de 11ª generación de Intel con 6 núcleos y 12 hilos. Ofrece un rendimiento sólido en juegos y tareas de productividad gracias a sus altas velocidades de reloj y capacidad de overclocking. Junto con la RTX 2070, proporciona un rendimiento equilibrado y una experiencia de juego inmersiva.' },
        { nombre: 'AMD Ryzen 7 5800X', info: 'El AMD Ryzen 7 5800X es un procesador de alto rendimiento con 8 núcleos y 16 hilos. Con su arquitectura Zen 3 y altas velocidades de reloj, brinda un rendimiento excepcional en juegos y tareas multitarea. En combinación con la RTX 2070, ofrece un rendimiento de juego suave y una calidad visual impresionante.' },
        { nombre: 'Intel Core i7-10700K', info: 'El Intel Core i7-10700K es un procesador potente de 10ª generación de Intel con 8 núcleos y 16 hilos. Ofrece una frecuencia base alta y capacidad de overclocking para un rendimiento óptimo en juegos y aplicaciones exigentes. En conjunto con la RTX 2070, brinda un rendimiento sólido y una experiencia de juego inmersiva.' },
      ];
    }
    else if (placaVideo === 'NVIDIA GeForce RTX 2070 Super') {
      procesadores = [
        { nombre: 'AMD Ryzen 7 5800X', info: 'El AMD Ryzen 7 5800X es un procesador de alto rendimiento con 8 núcleos y 16 hilos. Su arquitectura Zen 3 y altas velocidades de reloj garantizan un rendimiento excepcional en juegos y tareas multitarea. Combinado con la potencia de la RTX 2070 Super, ofrece un rendimiento fluido y una experiencia visual impresionante en juegos y aplicaciones exigentes.' },
        { nombre: 'Intel Core i7-10700K', info: 'El Intel Core i7-10700K es un procesador de 10ª generación de Intel con 8 núcleos y 16 hilos. Con una frecuencia base alta y capacidad de overclocking, brinda un rendimiento sólido en juegos y aplicaciones exigentes. Junto con la RTX 2070 Super, proporciona un rendimiento equilibrado y una experiencia de juego inmersiva.' },
        { nombre: 'AMD Ryzen 5 3600X', info: 'Este procesador de 6 núcleos y 12 hilos ofrece un excelente rendimiento en juegos y tareas multitarea. Su arquitectura Zen 2 de AMD y su frecuencia de reloj más alta lo convierten en una opción sólida para aquellos que buscan una combinación de potencia y precio atractivo. Su capacidad de manejar fácilmente los juegos actuales y aplicaciones multitarea lo convierte en una opción popular.' },
        { nombre: 'Intel Core i5-10600K', info: 'El i5-10600K es un procesador de 6 núcleos y 12 hilos con frecuencias de reloj altas y la capacidad de overclocking. Esto lo convierte en una opción ideal para jugadores y entusiastas que buscan un rendimiento sólido en juegos y aplicaciones multitarea intensivas. La arquitectura Comet Lake de Intel y su capacidad de manejar velocidades de reloj más altas hacen que sea compatible con la potencia de la tarjeta gráfica RTX 2070 Super.' },
      ];
    }
    else if (placaVideo === 'NVIDIA GeForce RTX 2080') {
      procesadores = [
        { nombre: 'AMD Ryzen 5 5600X', info: 'El AMD Ryzen 5 5600X es un procesador de gama media con 6 núcleos y 12 hilos. Su arquitectura Zen 3 y altas velocidades de reloj garantizan un buen rendimiento en juegos y tareas multitarea. Al combinarlo con la potencia de la RTX 2080, se logra un rendimiento sólido y una experiencia visual de alta calidad en juegos y aplicaciones.' },
        { nombre: 'Intel Core i5-11600K', info: 'El Intel Core i5-11600K es un procesador de 11ª generación de Intel con 6 núcleos y 12 hilos. Con una frecuencia base alta y capacidad de overclocking, ofrece un rendimiento sólido en juegos y aplicaciones exigentes. Al emparejarlo con la RTX 2080, se obtiene un buen equilibrio entre rendimiento y precio, brindando una experiencia de juego fluida y de alta calidad.' },
        { nombre: 'AMD Ryzen 7 5800X', info: 'El AMD Ryzen 7 5800X es un procesador de gama alta con 8 núcleos y 16 hilos. Su arquitectura Zen 3 y altas velocidades de reloj ofrecen un rendimiento excepcional en juegos, multitarea y aplicaciones que requieren un alto rendimiento de procesamiento. En combinación con la RTX 2080, proporciona un rendimiento potente y una experiencia de juego inmersiva.' },
        { nombre: 'Intel Core i7-10700K', info: 'El Intel Core i7-10700K es un procesador de 10ª generación de Intel con 8 núcleos y 16 hilos. Con una frecuencia base alta y capacidad de overclocking, ofrece un rendimiento sólido en juegos y aplicaciones exigentes. Al emparejarlo con la RTX 2080, se obtiene un buen rendimiento en juegos de alta calidad y una experiencia de juego fluida.' },
      ];
    }
    else if (placaVideo === 'NVIDIA GeForce RTX 2080 Super') {
      procesadores = [
        { nombre: 'AMD Ryzen 7 5800X', info: 'El AMD Ryzen 7 5800X es un procesador de alto rendimiento con 8 núcleos y 16 hilos. Su arquitectura Zen 3 y altas velocidades de reloj garantizan un rendimiento excepcional en juegos y tareas multitarea. Al combinarlo con la potencia de la RTX 2080 Super, se logra un rendimiento fluido y una experiencia visual impresionante en juegos y aplicaciones exigentes.' },
        { nombre: 'Intel Core i7-10700K', info: 'El Intel Core i7-10700K es un procesador de 10ª generación de Intel con 8 núcleos y 16 hilos. Con una frecuencia base alta y capacidad de overclocking, ofrece un rendimiento sólido en juegos y aplicaciones exigentes. Al emparejarlo con la RTX 2080 Super, se obtiene un rendimiento equilibrado y una experiencia de juego inmersiva.' },
        { nombre: 'AMD Ryzen 9 5900X', info: 'El AMD Ryzen 9 5900X es un procesador de gama alta con 12 núcleos y 24 hilos. Su arquitectura Zen 3 y altas velocidades de reloj ofrecen un rendimiento excepcional en juegos, multitarea y aplicaciones que requieren un alto rendimiento de procesamiento. En combinación con la RTX 2080 Super, proporciona un rendimiento superior y una experiencia de juego fluida en resoluciones altas.' },
        { nombre: 'Intel Core i9-10900K', info: 'El Intel Core i9-10900K es un procesador de gama alta de 10ª generación de Intel con 10 núcleos y 20 hilos. Con una frecuencia base alta y capacidad de overclocking, ofrece un rendimiento excepcional en juegos y aplicaciones intensivas. Al emparejarlo con la RTX 2080 Super, se obtiene un rendimiento potente y una experiencia de juego inmersiva.' },
      ];
    }
    else if (placaVideo === 'NVIDIA GeForce RTX 3060') {
      procesadores = [
        { nombre: 'AMD Ryzen 5 5600X', info: 'El AMD Ryzen 5 5600X es un procesador de gama media con 6 núcleos y 12 hilos. Ofrece un excelente rendimiento en juegos y tareas multitarea gracias a su arquitectura Zen 3 y altas velocidades de reloj. Es una opción equilibrada y compatible con la potencia de la RTX 3060, evitando cuellos de botella y brindando una experiencia fluida en resoluciones 1080p y 1440p.' },
        { nombre: 'Intel Core i5-11600K', info: 'El Intel Core i5-11600K es un procesador de 11ª generación de Intel con 6 núcleos y 12 hilos. Ofrece un rendimiento sólido en juegos y aplicaciones exigentes. Su capacidad de overclocking y altas frecuencias de reloj permiten aprovechar al máximo el potencial de la RTX 3060, evitando cuellos de botella y obteniendo un rendimiento óptimo en resoluciones 1080p y 1440p.' },
        { nombre: 'AMD Ryzen 7 5800X', info: 'El AMD Ryzen 7 5800X es un procesador de gama alta con 8 núcleos y 16 hilos. Su arquitectura Zen 3 y altas velocidades de reloj lo convierten en una opción potente para juegos y aplicaciones que requieren un alto rendimiento de procesamiento. Al combinarlo con la RTX 3060, se evitan cuellos de botella y se obtiene un rendimiento excepcional en resoluciones 1440p y la capacidad de realizar tareas exigentes en paralelo.' },
        { nombre: 'Intel Core i7-10700K', info: 'El Intel Core i7-10700K es un procesador de 10ª generación de Intel con 8 núcleos y 16 hilos. Su capacidad de overclocking y altas frecuencias de reloj garantizan un rendimiento sólido en juegos y aplicaciones exigentes. Al emparejarlo con la RTX 3060, se obtiene un rendimiento óptimo en resoluciones 1080p y 1440p, evitando cuellos de botella y brindando una experiencia de juego fluida.' },
      ];
    }
    else if (placaVideo === 'NVIDIA GeForce RTX 3060 Ti') {
      procesadores = [
        { nombre: 'AMD Ryzen 5 5600X', info: 'El AMD Ryzen 5 5600X es un procesador de gama media-alta con 6 núcleos y 12 hilos. Ofrece un rendimiento sólido en juegos y aplicaciones multitarea gracias a su arquitectura Zen 3 y altas velocidades de reloj. Combinado con la potente RTX 3060 Ti, proporciona un equilibrio perfecto para juegos en resoluciones 1080p y 1440p, evitando cuellos de botella y ofreciendo una experiencia de juego fluida.' },
        { nombre: 'Intel Core i5-11600K', info: 'El Intel Core i5-11600K es un procesador de 11ª generación de Intel con 6 núcleos y 12 hilos. Ofrece un buen rendimiento en juegos y aplicaciones exigentes. Su capacidad de overclocking y altas frecuencias de reloj permiten aprovechar al máximo la potencia de la RTX 3060 Ti, evitando cuellos de botella y ofreciendo un rendimiento óptimo en resoluciones 1080p y 1440p.' },
        { nombre: 'AMD Ryzen 7 5800X', info: 'El AMD Ryzen 7 5800X es un procesador de gama alta con 8 núcleos y 16 hilos. Su arquitectura Zen 3 y altas velocidades de reloj lo convierten en una opción potente para juegos y aplicaciones que requieren un alto rendimiento de procesamiento. Al emparejarlo con la RTX 3060 Ti, se evitan cuellos de botella y se obtiene un rendimiento excepcional en resoluciones 1440p y 4K, así como la capacidad de realizar tareas exigentes en paralelo.' },
        { nombre: 'Intel Core i7-10700K', info: 'El Intel Core i7-10700K es un procesador de 10ª generación de Intel con 8 núcleos y 16 hilos. Su capacidad de overclocking y altas frecuencias de reloj garantizan un rendimiento sólido en juegos y aplicaciones exigentes. Al combinarlo con la RTX 3060 Ti, se obtiene un rendimiento óptimo en resoluciones 1080p, 1440p y 4K, evitando cuellos de botella y brindando una experiencia de juego fluida.' },
      ];
    }
    else if (placaVideo === 'NVIDIA GeForce RTX 3070') {
      procesadores = [
        { nombre: 'AMD Ryzen 7 5800X', info: 'El AMD Ryzen 7 5800X es un procesador de 8 núcleos y 16 hilos con una arquitectura Zen 3 mejorada. Ofrece un rendimiento sólido y equilibrado para aprovechar al máximo la potencia de la RTX 3070 en juegos y aplicaciones exigentes.' },
        { nombre: 'Intel Core i7-11700K', info: 'El Intel Core i7-11700K es un procesador de 8 núcleos y 16 hilos de la serie Rocket Lake de Intel. Con altas frecuencias y capacidad de overclocking, puede proporcionar un buen rendimiento en combinación con la RTX 3070 en juegos y tareas intensivas.' },
        { nombre: 'AMD Ryzen 9 5900X', info: 'El AMD Ryzen 9 5900X es un procesador de 12 núcleos y 24 hilos con una potente arquitectura Zen 3. Ofrece un rendimiento excepcional en aplicaciones multihilo y juegos exigentes, permitiendo aprovechar al máximo la capacidad de la RTX 3070.' },
        { nombre: 'Intel Core i9-11900K', info: 'El Intel Core i9-11900K es un procesador de 8 núcleos y 16 hilos de la serie Rocket Lake-S de Intel. Con altas frecuencias y un buen rendimiento en juegos y tareas de un solo hilo, puede proporcionar una experiencia fluida con la RTX 3070.' },
      ];
    }
    else if (placaVideo === 'NVIDIA GeForce RTX 3080') {
      procesadores = [
        { nombre: 'AMD Ryzen 9 5900X', info: 'El AMD Ryzen 9 5900X es un procesador de gama alta con 12 núcleos y 24 hilos. Su potencia de procesamiento y rendimiento multinúcleo lo convierten en una excelente opción para aprovechar al máximo la capacidad de la RTX 3080. Con este procesador, obtendrás un rendimiento excepcional en juegos, edición de video, renderizado 3D y otras tareas que requieren un alto poder de procesamiento.' },
        { nombre: 'Intel Core i9-10900K', info: 'El Intel Core i9-10900K es un procesador de 10ª generación de Intel con 10 núcleos y 20 hilos. Ofrece un alto rendimiento en juegos y aplicaciones que requieren un gran poder de procesamiento. Al emparejarlo con la RTX 3080, podrás disfrutar de un rendimiento excepcional en resoluciones 4K, realidad virtual y aplicaciones de edición de video de alta calidad.' },
        { nombre: 'AMD Ryzen 7 5800X', info: 'El AMD Ryzen 7 5800X es un procesador de gama alta con 8 núcleos y 16 hilos. Ofrece un excelente rendimiento en juegos y aplicaciones de productividad. Al combinarlo con la RTX 3080, obtendrás un rendimiento fluido en juegos de última generación y aplicaciones exigentes, como diseño gráfico, modelado 3D y transmisión en vivo.' },
        { nombre: 'Intel Core i7-10700K', info: 'El Intel Core i7-10700K es un procesador de 10ª generación de Intel con 8 núcleos y 16 hilos. Ofrece un rendimiento sólido en juegos y aplicaciones de uso general. Al utilizarlo con la RTX 3080, obtendrás un rendimiento excepcional en juegos de alta resolución, streaming, edición de video y otras tareas que requieren un procesamiento rápido y eficiente.' },
      ];
    }
    else if (placaVideo === 'NVIDIA GeForce RTX 3090') {
      procesadores = [
        { nombre: 'AMD Ryzen 9 5900X', info: 'El AMD Ryzen 9 5900X es un procesador de gama alta con 12 núcleos y 24 hilos. Su potencia de procesamiento y rendimiento multinúcleo lo convierten en una opción ideal para aprovechar al máximo la capacidad de la RTX 3090. Con este procesador, podrás disfrutar de un rendimiento excepcional en juegos, aplicaciones creativas y tareas exigentes que requieren un gran poder de procesamiento.' },
        { nombre: 'Intel Core i9-11900K', info: 'El Intel Core i9-11900K es un procesador de última generación de Intel con 8 núcleos y 16 hilos. Ofrece un rendimiento impresionante en aplicaciones de un solo hilo y un alto rendimiento multinúcleo. Al combinarlo con la RTX 3090, se obtiene un rendimiento óptimo en juegos, edición de video, renderizado 3D y otras tareas intensivas en recursos.' },
        { nombre: 'AMD Ryzen 9 5950X', info: 'El AMD Ryzen 9 5950X es un procesador de gama alta con 16 núcleos y 32 hilos. Es uno de los procesadores más potentes de AMD, ofreciendo un rendimiento excepcional en todas las áreas, desde juegos hasta aplicaciones de productividad. Al emparejarlo con la RTX 3090, obtendrás un rendimiento sin compromisos en resoluciones 4K, multitarea intensiva y trabajos creativos exigentes.' },
        { nombre: 'Intel Core i9-10900K', info: 'El Intel Core i9-10900K es un procesador de 10ª generación de Intel con 10 núcleos y 20 hilos. Ofrece un alto rendimiento en juegos y aplicaciones que requieren un gran poder de procesamiento. Al combinarlo con la RTX 3090, obtendrás un rendimiento excepcional en resoluciones 4K, realidad virtual y aplicaciones de edición de video de alta calidad.' },
      ];
    }
    else if (placaVideo === 'AMD Radeon RX 5700') {
      procesadores = [
        { nombre: 'AMD Ryzen 5 5600X', info: 'El AMD Ryzen 5 5600X es un procesador de 6 núcleos y 12 hilos que ofrece un rendimiento sólido para juegos y tareas diarias. Es compatible con la arquitectura Zen 3, lo que significa que puede aprovechar al máximo el rendimiento de la RX 5700.' },
        { nombre: 'Intel Core i5-11600K', info: 'El Intel Core i5-11600K es un procesador de 6 núcleos y 12 hilos que ofrece un buen rendimiento en juegos y aplicaciones. Su capacidad de overclocking y alta frecuencia lo hacen compatible con la RX 5700 y permiten obtener un rendimiento optimizado.' },
        { nombre: 'AMD Ryzen 7 3700X', info: 'El AMD Ryzen 7 3700X es un procesador de 8 núcleos y 16 hilos que ofrece un rendimiento sólido en juegos y aplicaciones multitarea. Su arquitectura Zen 2 y frecuencias base y boost altas lo hacen compatible con la RX 5700.' },
        { nombre: 'Intel Core i7-10700K', info: 'El Intel Core i7-10700K es un procesador de 8 núcleos y 16 hilos que ofrece un rendimiento sólido en juegos y aplicaciones. Su capacidad de overclocking y alta frecuencia lo hacen compatible con la RX 5700 y permiten obtener un rendimiento optimizado.' },
      ];
    }
    else if (placaVideo === 'AMD Radeon RX 5700 XT') {
      procesadores = [
        { nombre: 'AMD Ryzen 7 3700X', info: 'El AMD Ryzen 7 3700X es un procesador de gama alta con 8 núcleos y 16 hilos. Ofrece un rendimiento excepcional tanto en juegos como en tareas de productividad. Al emparejarlo con la RX 5700 XT, obtendrás un rendimiento de juego fluido y de alta calidad, así como una capacidad multitarea sobresaliente para aplicaciones exigentes.' },
        { nombre: 'Intel Core i7-9700K', info: 'El Intel Core i7-9700K es un procesador de gama alta con 8 núcleos y 8 hilos. Ofrece un excelente rendimiento en juegos y tareas que requieren un alto poder de procesamiento. Al combinarlo con la RX 5700 XT, disfrutarás de una experiencia de juego inmersiva y un rendimiento excepcional en aplicaciones que hacen un uso intensivo del procesador.' },
        { nombre: 'AMD Ryzen 5 3600X', info: 'El AMD Ryzen 5 3600X es un procesador de gama media-alta con 6 núcleos y 12 hilos. Ofrece un buen rendimiento en juegos y tareas multitarea. Al utilizarlo con la RX 5700 XT, obtendrás un equilibrio entre rendimiento y precio, lo que te permitirá disfrutar de juegos fluidos y realizar tareas diarias sin problemas.' },
        { nombre: 'Intel Core i5-9600K', info: 'El Intel Core i5-9600K es un procesador de gama media con 6 núcleos y 6 hilos. Ofrece un buen rendimiento en juegos y aplicaciones de uso general. Al emparejarlo con la RX 5700 XT, tendrás un rendimiento sólido en juegos de alta resolución y realizarás tareas diarias sin problemas, sin gastar demasiado en el procesador.' },
      ];
    }
    else if (placaVideo === 'AMD Radeon RX 5600 XT') {
      procesadores = [
        { nombre: 'AMD Ryzen 5 3600', info: 'El AMD Ryzen 5 3600 es un procesador de gama media con 6 núcleos y 12 hilos. Ofrece un excelente rendimiento en juegos y tareas multitarea a un precio asequible. Al combinarlo con la RX 5600 XT, obtendrás un rendimiento equilibrado y una experiencia de juego fluida en resoluciones 1080p.' },
        { nombre: 'Intel Core i5-10400', info: 'El Intel Core i5-10400 es un procesador de gama media con 6 núcleos y 12 hilos. Ofrece un buen rendimiento en juegos y aplicaciones de uso general. Al emparejarlo con la RX 5600 XT, disfrutarás de un rendimiento sólido en juegos 1080p y podrás realizar tareas diarias sin problemas.' },
        { nombre: 'AMD Ryzen 7 2700X', info: 'El AMD Ryzen 7 2700X es un procesador de generación anterior con 8 núcleos y 16 hilos. Aunque no es el más nuevo, sigue ofreciendo un buen rendimiento en juegos y aplicaciones multitarea. Al utilizarlo con la RX 5600 XT, obtendrás un rendimiento sólido en juegos 1080p y una capacidad multitarea mejorada.' },
        { nombre: 'Intel Core i3-10100', info: 'El Intel Core i3-10100 es un procesador de gama media-baja con 4 núcleos y 8 hilos. Aunque no es tan potente como otros procesadores mencionados, sigue ofreciendo un rendimiento decente en juegos y aplicaciones básicas. Al combinarlo con la RX 5600 XT, podrás disfrutar de juegos 1080p sin problemas y realizar tareas diarias con fluidez.' },
      ];
    }
    else if (placaVideo === 'AMD Radeon RX 580') {
      procesadores = [
        { nombre: 'AMD Ryzen 5 3600', info: 'Con 6 núcleos y 12 hilos, el Ryzen 5 3600 es una excelente opción para emparejar con la AMD Radeon RX 590. Su arquitectura Zen 2 y frecuencias de reloj altas brindan un rendimiento sólido en juegos y aplicaciones. Esta combinación proporciona una experiencia de juego fluida y gráficos de alta calidad sin crear un cuello de botella significativo para la RX 590.' },
        { nombre: 'AMD Ryzen 7 3700X', info: 'Si buscas un procesador más potente para tareas multitarea y aplicaciones exigentes, el Ryzen 7 3700X es una excelente opción junto con la RX 580. Con 8 núcleos y 16 hilos, ofrece un rendimiento excepcional en aplicaciones que requieren un mayor poder de procesamiento. Su arquitectura Zen 2 y frecuencias de reloj más altas aseguran un rendimiento óptimo en juegos y aplicaciones, sin crear un cuello de botella significativo para la RX 580.' },
        { nombre: 'Intel Core i5-10400', info: 'El i5-10400, con sus 6 núcleos y 12 hilos, es una opción confiable para el emparejamiento con la AMD Radeon RX 580. Su arquitectura Comet Lake de Intel y frecuencias de reloj competitivas ofrecen un buen rendimiento en juegos y aplicaciones. Este procesador permite disfrutar de los juegos más recientes y tareas multitarea sin experimentar un cuello de botella que limite el rendimiento de la tarjeta gráfica.' },
        { nombre: 'Intel Core i7-10700', info: 'El i7-10700 es un procesador de 8 núcleos y 16 hilos que proporciona un rendimiento sólido y sin cuellos de botella con la AMD Radeon RX 580. Su arquitectura Comet Lake de Intel y sus altas frecuencias de reloj aseguran un rendimiento fluido en juegos y aplicaciones exigentes. Con esta combinación, podrás disfrutar de gráficos de alta calidad y un rendimiento confiable en tus actividades diarias y juegos.' },
      ];
    }
    else if (placaVideo === 'AMD Radeon RX 590') {
      procesadores = [
        { nombre: 'AMD Ryzen 5 2600', info: 'El AMD Ryzen 5 2600 es un procesador de 6 núcleos y 12 hilos que ofrece un rendimiento sólido a un precio asequible. Se combina bien con la RX 590, permitiendo un rendimiento equilibrado en juegos y aplicaciones multitarea.' },
        { nombre: 'Intel Core i5-10400F', info: 'El Intel Core i5-10400F es un procesador de 6 núcleos y 12 hilos que ofrece un buen rendimiento en juegos y tareas cotidianas. Es compatible con la RX 590 y proporciona un equilibrio sólido entre el rendimiento del procesador y la tarjeta gráfica.' },
        { nombre: 'AMD Ryzen 7 3700X', info: 'Si buscas un procesador más potente para tareas multitarea y aplicaciones exigentes, el Ryzen 7 3700X es una excelente opción junto con la RX 590. Con 8 núcleos y 16 hilos, ofrece un rendimiento excepcional en aplicaciones que requieren un mayor poder de procesamiento. Su arquitectura Zen 2 y frecuencias de reloj más altas aseguran un rendimiento óptimo en juegos y aplicaciones, sin crear un cuello de botella significativo para la RX 590.' },
        { nombre: 'Intel Core i7-10700', info: 'El i7-10700, con sus 8 núcleos y 16 hilos, es una opción potente para aprovechar al máximo la AMD Radeon RX 590. Su arquitectura Comet Lake de Intel y frecuencias de reloj altas proporcionan un rendimiento fluido en juegos y aplicaciones exigentes. Con esta combinación, podrás disfrutar de gráficos de alta calidad y un rendimiento confiable en tus actividades diarias y juegos sin preocuparte por un cuello de botella.' },
      ];
    }
    else if (placaVideo === 'AMD Radeon RX 6800') {
      procesadores = [
        { nombre: 'AMD Ryzen 7 5800X', info: 'El AMD Ryzen 7 5800X es un procesador de 8 núcleos y 16 hilos que ofrece un rendimiento excepcional en juegos y aplicaciones multitarea. Su alta frecuencia y arquitectura Zen 3 lo convierten en una excelente opción para aprovechar al máximo el rendimiento de la RX 6800.' },
        { nombre: 'Intel Core i7-10700K', info: 'El Intel Core i7-10700K es un procesador de 8 núcleos y 16 hilos que ofrece un excelente rendimiento en juegos y aplicaciones intensivas. Su alta frecuencia y capacidad de overclocking lo convierten en una opción sólida para acompañar a la RX 6800.' },
        { nombre: 'AMD Ryzen 9 5900X', info: 'El AMD Ryzen 9 5900X es un procesador de gama alta con 12 núcleos y 24 hilos, ofreciendo un rendimiento excepcional en juegos y aplicaciones que aprovechan múltiples núcleos. Es una opción ideal para usuarios exigentes que buscan sacar el máximo provecho de la RX 6800.' },
        { nombre: 'Intel Core i9-10850K', info: 'El Intel Core i9-10850K es un procesador de 10 núcleos y 20 hilos que ofrece un rendimiento sobresaliente en juegos y aplicaciones de alta exigencia. Su frecuencia base alta y capacidad de overclocking lo hacen compatible y eficiente para trabajar en conjunto con la RX 6800.' },
      ];
    }
    else if (placaVideo === 'AMD Radeon RX 6900 XT') {
      procesadores = [
        { nombre: 'AMD Ryzen 9 5950X', info: 'El AMD Ryzen 9 5950X es un procesador de gama alta con 16 núcleos y 32 hilos, lo que lo convierte en una potencia de procesamiento para tareas exigentes y aplicaciones que aprovechan múltiples núcleos. Es la opción ideal para usuarios que buscan el máximo rendimiento junto con la RX 6900 XT.' },
        { nombre: 'Intel Core i9-10900K', info: 'El Intel Core i9-10900K es un procesador de 10 núcleos y 20 hilos que ofrece un rendimiento excepcional en juegos y aplicaciones intensivas. Su alta frecuencia y capacidad de overclocking lo convierten en una opción sólida para aprovechar al máximo el rendimiento de la RX 6900 XT.' },
        { nombre: 'AMD Ryzen 7 5800X', info: 'El AMD Ryzen 7 5800X es un procesador de 8 núcleos y 16 hilos que ofrece un rendimiento excelente en juegos y aplicaciones multitarea. Su alta frecuencia y arquitectura Zen 3 lo hacen compatible y eficiente para trabajar en conjunto con la RX 6900 XT.' },
        { nombre: 'Intel Core i7-11700K', info: 'El Intel Core i7-11700K es un procesador de 8 núcleos y 16 hilos que ofrece un rendimiento sólido en juegos y aplicaciones exigentes. Su alta frecuencia y capacidad de overclocking lo convierten en una opción confiable para aprovechar al máximo la potencia de la RX 6900 XT.' },
      ];
    }

    this.setState({ procesadoresRecomendados: procesadores });
  };

  handleClickInfo = (index) => {
    this.setState({
      procesadorIndex: index,
    });
  };


  render() {
    const { placaVideoSeleccionada, procesadoresRecomendados, showProcesadores } = this.state;

    return (
      <div className="Container">
        <HelmetProvider>
          <Helmet>
            <title>Tech View</title>
            <meta name="description" content={`Descubre los 4 mejores procesadores compatibles para la placa de video que desees (Cuello de botella).`} />
          </Helmet>
        </HelmetProvider>
        <div className="CuelloBotellaProd">
          <div className="placa">
            <div className="cardH2">
              <h2>CUELLO DE BOTELLA</h2>
            </div>
            <h3>PLACAS DE VIDEO</h3>
            <Dropdown className="todo">
              <Dropdown.Toggle className="dropdown">
                {placaVideoSeleccionada || 'Seleccione'}
              </Dropdown.Toggle>
                  
                  <Dropdown.Menu className='menu'>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangePlacaVideo('NVIDIA GeForce GTX 1660 Ti')}>
                      NVIDIA GeForce GTX 1660 Ti
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangePlacaVideo('NVIDIA GeForce GTX 1660 Super')}>
                      NVIDIA GeForce GTX 1660 Super
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangePlacaVideo('NVIDIA GeForce RTX 2060')}>
                      NVIDIA GeForce RTX 2060
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangePlacaVideo('NVIDIA GeForce RTX 2060 Super')}>
                      NVIDIA GeForce RTX 2060 Super
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangePlacaVideo('NVIDIA GeForce RTX 2070')}>
                      NVIDIA GeForce RTX 2070
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangePlacaVideo('NVIDIA GeForce RTX 2070 Super')}>
                      NVIDIA GeForce RTX 2070 Super
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangePlacaVideo('NVIDIA GeForce RTX 2080')}>
                      NVIDIA GeForce RTX 2080
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangePlacaVideo('NVIDIA GeForce RTX 2080 Super')}>
                      NVIDIA GeForce RTX 2080 Super
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangePlacaVideo('NVIDIA GeForce RTX 3060')}>
                      NVIDIA GeForce RTX 3060
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangePlacaVideo('NVIDIA GeForce RTX 3060 Ti')}>
                      NVIDIA GeForce RTX 3060 Ti
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangePlacaVideo('NVIDIA GeForce RTX 3070')}>
                      NVIDIA GeForce RTX 3070
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangePlacaVideo('NVIDIA GeForce RTX 3080')}>
                      NVIDIA GeForce RTX 3080
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangePlacaVideo('NVIDIA GeForce RTX 3090')}>
                      NVIDIA GeForce RTX 3090
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangePlacaVideo('AMD Radeon RX 5700')}>
                      AMD Radeon RX 5700
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangePlacaVideo('AMD Radeon RX 5700 XT')}>
                      AMD Radeon RX 5700 XT
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangePlacaVideo('AMD Radeon RX 5600 XT')}>
                      AMD Radeon RX 5600 XT
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangePlacaVideo('AMD Radeon RX 580')}>
                      AMD Radeon RX 580
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangePlacaVideo('AMD Radeon RX 590')}>
                      AMD Radeon RX 590
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangePlacaVideo('AMD Radeon RX 6800')}>
                      AMD Radeon RX 6800
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangePlacaVideo('AMD Radeon RX 6900 XT')}>
                      AMD Radeon RX 6900 XT
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            {procesadoresRecomendados.length > 0 && (
              <div className={`fade-in ${showProcesadores ? 'active' : ''}`}>
                <div className={`containerCuello ${showProcesadores ? '' : 'hidden'}`}>
                  <h3>PROCESADORES:</h3>
                  <ul>
                    {procesadoresRecomendados.map((procesador, index) => (
                      <li key={index}>
                        <div className={`info ${showProcesadores ? '' : 'hidden'}`}>
                          <div className="volver">
                          <Card>
                            <Accordion>
                              
                              <Card.Header>
                                <CustomToggle eventKey="0" >
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>{procesador.nombre}
                                </CustomToggle>
                              </Card.Header>
                              <Accordion.Collapse eventKey="0">
                                <Card.Body>{procesador.info}</Card.Body>
                              </Accordion.Collapse>
                              
                            </Accordion>
                            </Card>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            <div className="volverEntrar">
              <div className="volver">
                <div className="cuello">
                  <h4>Estas recomendaciones tienen en cuenta el equilibrio entre el rendimiento del procesador y la placa de video en juegos y aplicaciones exigentes.</h4>
                </div>
                <Link to="/cuello-de-botella">
                  <button>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span> VOLVER
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CuelloPlaca;
