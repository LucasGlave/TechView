import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';


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

class CuelloProcesador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      procesadorSeleccionado: '',
      placaVideoSeleccionada: [],
      placasRecomendadas: [],
    };
  }

  handleChangeProcesador = (procesador) => {
    this.setState({
      procesadorSeleccionado: procesador,
      showPlacas: true,
      acordeonAbierto: false,
    });
    const acordeonesAbiertos = { ...this.state.acordeonesAbiertos };
    acordeonesAbiertos[0] = false;
    this.setState({ acordeonesAbiertos });
    this.obtenerProcesadoresRecomendados(procesador);
  };

  obtenerProcesadoresRecomendados = (procesador) => {
    let placas = [];

    if (procesador === 'AMD Ryzen 9 5950X') {
      placas = [
        { nombre: 'NVIDIA GeForce RTX 3080', info: 'La RTX 3080 es la opción ideal para aprovechar al máximo el procesador Ryzen 9 5950X debido a su potencia y capacidad para manejar cargas de trabajo intensivas. Su rendimiento excepcional y su compatibilidad con tecnologías de vanguardia la convierten en una elección sólida para jugadores y creadores de contenido.' },
        { nombre: 'AMD Radeon RX 6900 XT', info: 'La RX 6900 XT es una opción potente y equilibrada para aprovechar al máximo el Ryzen 9 5950X. Su rendimiento de alta gama y su capacidad para manejar cargas de trabajo intensivas en juegos y contenido la convierten en una elección atractiva para jugadores y creadores de contenido exigentes.' },
        { nombre: 'NVIDIA GeForce RTX 3090', info: 'La RTX 3090 es una opción sobresaliente para acompañar al Ryzen 9 5950X gracias a su potencia bruta y su capacidad para manejar tareas exigentes sin problemas. Su gran cantidad de memoria y su compatibilidad con tecnologías avanzadas la convierten en una elección ideal para creadores de contenido y entusiastas de alto rendimiento.' },
        { nombre: 'AMD Radeon RX 6800 XT', info: 'La RX 6800 XT es una excelente opción para complementar al Ryzen 9 5950X debido a su rendimiento de alta gama y su capacidad para manejar tareas exigentes. Su compatibilidad con tecnologías avanzadas y su potencia la convierten en una elección atractiva para aquellos que buscan un rendimiento excepcional en juegos y aplicaciones creativas.' }
      ];
      } else if (procesador === 'AMD Ryzen 7 5800X') {
        placas = [
          { nombre: 'NVIDIA GeForce RTX 3060 Ti', info: 'La GeForce RTX 3060 Ti ofrece un rendimiento sólido que complementa bien el poderoso procesador Ryzen 7 5800X. Su rendimiento y precio la convierten en una opción atractiva para los jugadores que desean aprovechar al máximo su CPU sin gastar en una tarjeta gráfica de gama alta.' },
          { nombre: 'AMD Radeon RX 6700 XT', info: 'La Radeon RX 6700 XT es una opción sólida para aprovechar al máximo el procesador Ryzen 7 5800X. Su rendimiento equilibrado y su soporte para características avanzadas la convierten en una opción atractiva para los jugadores y creadores de contenido.' },
          { nombre: 'NVIDIA GeForce RTX 3070', info: 'La GeForce RTX 3070 es una opción popular para aquellos que buscan un rendimiento impresionante en juegos y aplicaciones creativas sin gastar en una tarjeta gráfica de gama alta. Su rendimiento equilibrado y su compatibilidad con el Ryzen 7 5800X la convierten en una combinación sólida.' },
          { nombre: 'AMD Radeon RX 6800', info: 'La Radeon RX 6800 es una opción potente y equilibrada para el Ryzen 7 5800X. Su rendimiento de alta gama y su soporte para características avanzadas la convierten en una opción atractiva para aquellos que desean un rendimiento excepcional en juegos y aplicaciones creativas.' }
        ];
      } else if (procesador === 'AMD Ryzen 5 5600X') {
        placas = [
          { nombre: 'NVIDIA GeForce GTX 1660 Super', info: 'La GTX 1660 Super es una opción equilibrada y asequible para acompañar al Ryzen 5 5600X. Ofrece un buen rendimiento en juegos y aplicaciones multimedia sin crear un cuello de botella significativo. Es ideal para jugadores que buscan un rendimiento sólido a un precio accesible.' },
          { nombre: 'AMD Radeon RX 5700 XT', info: 'La RX 5700 XT es una opción potente y equilibrada para el Ryzen 5 5600X. Ofrece un rendimiento sólido en juegos de alta calidad visual y proporciona una experiencia fluida en resoluciones 1080p y 1440p. Es ideal para jugadores que buscan un mayor rendimiento sin gastar demasiado.' },
          { nombre: 'NVIDIA GeForce RTX 2060 Super', info: 'La RTX 2060 Super es una opción versátil para el Ryzen 5 5600X. Ofrece un buen rendimiento en juegos, incluido el soporte para trazado de rayos, lo que mejora la calidad visual. Es ideal para jugadores que buscan un equilibrio entre rendimiento y funciones avanzadas.' },
          { nombre: 'AMD Radeon RX 5600 XT', info: 'La RX 5600 XT es una opción asequible y eficiente para el Ryzen 5 5600X. Ofrece un rendimiento sólido en juegos en resoluciones 1080p, lo que lo convierte en una opción popular entre los jugadores conscientes del presupuesto.' }
        ];} else if (procesador === 'Intel Core i9-11900K') {
        placas = [
          { nombre: 'NVIDIA GeForce RTX 3080', info: 'La RTX 3080 es una opción poderosa y adecuada para acompañar al Core i9-11900K. Su rendimiento en juegos y aplicaciones gráficamente intensivas es excelente, y permite disfrutar de experiencias de juego fluidas en resoluciones 1440p y 4K. Es ideal para jugadores entusiastas y creadores de contenido que buscan el máximo rendimiento.' },
          { nombre: 'AMD Radeon RX 6900 XT', info: 'La RX 6900 XT es una opción competitiva para el Core i9-11900K. Ofrece un rendimiento excepcional en juegos y aplicaciones profesionales, lo que la hace adecuada para jugadores y creadores de contenido que buscan el máximo rendimiento gráfico.' },
          { nombre: 'NVIDIA GeForce RTX 3070', info: 'La RTX 3070 es una opción equilibrada y asequible para el Core i9-11900K. Ofrece un buen rendimiento en juegos en resoluciones 1440p, y su capacidad de trazado de rayos mejora la calidad visual. Es ideal para jugadores que buscan un equilibrio entre rendimiento y precio.' },
          { nombre: 'AMD Radeon RX 6800 XT', info: 'La RX 6800 XT es una opción potente y equilibrada para el Core i9-11900K. Su rendimiento en juegos y aplicaciones profesionales es sobresaliente, y ofrece una experiencia de juego fluida en resoluciones 1440p y 4K. Es ideal para jugadores y creadores de contenido que buscan un alto rendimiento gráfico.' }
        ];
      } else if (procesador === 'Intel Core i7-11700K') {
        placas = [
          { nombre: 'NVIDIA GeForce RTX 3070', info: 'La RTX 3070 es una opción equilibrada para el Core i7-11700K. Ofrece un rendimiento sólido en juegos y es capaz de manejar resoluciones más altas con buenos niveles de detalle. Además, su capacidad de trazado de rayos mejora la calidad visual de los juegos.' },
          { nombre: 'AMD Radeon RX 6700 XT', info: 'La RX 6700 XT es una opción equilibrada y asequible para el Core i7-11700K. Ofrece un rendimiento sólido en juegos en resoluciones 1440p, lo que la hace ideal para jugadores que buscan una buena relación rendimiento-precio.' },
          { nombre: 'NVIDIA GeForce RTX 3060 Ti', info: 'La RTX 3060 Ti es una opción equilibrada para el Core i7-11700K. Ofrece un buen rendimiento en juegos en resoluciones 1440p y es una opción más asequible en comparación con las tarjetas de gama alta. Es ideal para jugadores que buscan un buen rendimiento sin gastar demasiado.' },
          { nombre: 'AMD Radeon RX 6800', info: 'La RX 6800 es una opción potente y equilibrada para el Core i7-11700K. Ofrece un buen rendimiento en juegos y aplicaciones profesionales, y es una alternativa competitiva a las tarjetas gráficas de NVIDIA. Es ideal para jugadores y creadores de contenido que buscan un alto rendimiento gráfico.' }
        ];
      } else if (procesador === 'Intel Core i5-11600K') {
        placas = [
          { nombre: 'NVIDIA GeForce RTX 3060', info: 'La RTX 3060 es una opción equilibrada para el Core i5-11600K. Ofrece un buen rendimiento en juegos en resoluciones 1080p y 1440p, lo que la hace ideal para jugadores que buscan una buena relación rendimiento-precio.' },
          { nombre: 'AMD Radeon RX 6700 XT', info: 'La RX 6700 XT es una opción equilibrada para el Core i5-11600K. Ofrece un buen rendimiento en juegos en resoluciones 1080p y 1440p, y es una alternativa competitiva a las tarjetas de NVIDIA. Es ideal para jugadores que buscan un buen rendimiento sin gastar demasiado.' },
          { nombre: 'NVIDIA GeForce GTX 1660 Super', info: 'La GTX 1660 Super es una opción asequible y equilibrada para el Core i5-11600K. Ofrece un buen rendimiento en juegos en resoluciones 1080p y es una opción más económica en comparación con las tarjetas de gama alta. Es ideal para jugadores que buscan un buen rendimiento a un precio razonable.' },
          { nombre: 'AMD Radeon RX 5600 XT', info: 'La RX 5600 XT es una opción asequible para el Core i5-11600K. Ofrece un buen rendimiento en juegos en resoluciones 1080p y es una opción más económica en comparación con las tarjetas de gama alta. Es ideal para jugadores que buscan un buen rendimiento a un precio asequible.' }
        ];
      } else if (procesador === 'AMD Ryzen 9 5900X') {
        placas = [
          { nombre: 'NVIDIA GeForce RTX 3080', info: 'La RTX 3080 es una opción potente y de alto rendimiento que se complementa bien con el Ryzen 9 5900X. Ambos componentes ofrecen un rendimiento sobresaliente, lo que resulta en una experiencia de juego fluida y de alta calidad.' },
          { nombre: 'AMD Radeon RX 6800 XT', info: 'La RX 6800 XT es una alternativa competitiva a la RTX 3080. Ofrece un buen rendimiento en juegos y soporte para trazado de rayos, lo que la convierte en una opción atractiva para los usuarios que prefieren las tarjetas gráficas de AMD.' },
          { nombre: 'NVIDIA GeForce RTX 3070', info: 'La RTX 3070 es una opción más asequible en comparación con la RTX 3080, pero aún ofrece un rendimiento excelente para juegos de alta gama. Es una opción equilibrada que complementará bien al Ryzen 9 5900X.' },
          { nombre: 'AMD Radeon RX 6700 XT', info: 'La RX 6700 XT es una opción más asequible en comparación con las tarjetas gráficas de gama alta, pero aún ofrece un rendimiento sólido en juegos. Es una opción equilibrada que se adapta bien al Ryzen 9 5900X, brindando una experiencia de juego fluida y de calidad.' }
        ];
      } else if (procesador === 'AMD Ryzen 7 5700G') {
        placas = [
          { nombre: 'NVIDIA GeForce RTX 3060', info: 'La RTX 3060 ofrece un rendimiento equilibrado y asequible, que se ajusta bien al Ryzen 7 5700G. Ambos componentes proporcionan un rendimiento sólido en juegos y garantizan una experiencia fluida y envolvente.' },
          { nombre: 'AMD Radeon RX 6700 XT', info: 'La RX 6700 XT es una opción atractiva para los usuarios que prefieren las tarjetas gráficas de AMD. Ofrece un rendimiento sólido en juegos y soporte para tecnologías modernas, complementándose bien con el Ryzen 7 5700G.' },
          { nombre: 'NVIDIA GeForce GTX 1660 Super', info: 'La GTX 1660 Super es una opción asequible y confiable para juegos en resoluciones 1080p. Su rendimiento equilibrado se combina bien con el Ryzen 7 5700G, brindando un rendimiento sólido en juegos sin crear un cuello de botella significativo.' },
          { nombre: 'AMD Radeon RX Vega 56', info: 'La RX Vega 56 es una opción más asequible que todavía ofrece un rendimiento decente en juegos. Al combinarse con el Ryzen 7 5700G, permite jugar sin problemas a resoluciones 1080p y 1440p sin crear un cuello de botella significativo.' }
        ];
      } else if (procesador === 'Intel Core i7-10700K') {
        placas = [
          { nombre: 'NVIDIA GeForce RTX 3080', info: 'La RTX 3080 es una opción potente que combina perfectamente con el rendimiento del Core i7-10700K. Juntos, proporcionan un rendimiento de juego de alta gama y aseguran una experiencia fluida en los juegos más exigentes.' },
          { nombre: 'AMD Radeon RX 6800 XT', info: 'La RX 6800 XT es una opción atractiva para los usuarios que prefieren las tarjetas gráficas de AMD. Proporciona un rendimiento sólido y competente en juegos, y su combinación con el Core i7-10700K brinda una experiencia de juego de alta calidad.' },
          { nombre: 'NVIDIA GeForce RTX 2070 Super', info: 'La RTX 2070 Super es una opción más asequible que aún ofrece un rendimiento sólido en juegos a resoluciones 1440p. Su combinación con el Core i7-10700K brinda un equilibrio adecuado y permite disfrutar de juegos sin crear un cuello de botella significativo.' },
          { nombre: 'AMD Radeon RX 5700 XT', info: 'La RX 5700 XT ofrece un rendimiento sólido y competitivo en juegos a resoluciones 1440p. Al combinarse con el Core i7-10700K, proporciona una experiencia de juego fluida sin crear un cuello de botella significativo.' }
        ];
      } else if (procesador === 'Intel Core i5-10600K') {
        placas = [
          { nombre: 'NVIDIA GeForce RTX 3060', info: 'La RTX 3060 es una opción equilibrada para el Core i5-10600K. Proporciona un rendimiento confiable en juegos sin crear un cuello de botella significativo, lo que permite disfrutar de una experiencia de juego fluida a resoluciones populares.' },
          { nombre: 'AMD Radeon RX 5600 XT', info: 'La RX 5600 XT es una opción más asequible que aún ofrece un rendimiento satisfactorio en juegos. Al combinarse con el Core i5-10600K, brinda una experiencia de juego equilibrada y sin crear un cuello de botella significativo.' },
          { nombre: 'NVIDIA GeForce GTX 1660 Super', info: 'La GTX 1660 Super es una opción asequible y eficiente para juegos en resoluciones 1080p. Al combinarse con el Core i5-10600K, proporciona un rendimiento equilibrado y una experiencia de juego fluida sin generar un cuello de botella significativo.' },
          { nombre: 'AMD Radeon RX 5500 XT', info: 'La RX 5500 XT es una opción más económica que aún ofrece un rendimiento aceptable en juegos a resoluciones 1080p. Su combinación con el Core i5-10600K brinda una experiencia de juego satisfactoria sin crear un cuello de botella importante.' }
        ];
      } else if (procesador === 'AMD Ryzen 5 3600X') {
        placas = [
          { nombre: 'NVIDIA GeForce GTX 1660 Ti', info: 'La GTX 1660 Ti es una opción equilibrada para el Ryzen 5 3600X. Proporciona un rendimiento sólido en juegos sin generar un cuello de botella significativo, lo que permite disfrutar de una experiencia de juego fluida a resoluciones populares.' },
          { nombre: 'AMD Radeon RX 5600 XT', info: 'La RX 5600 XT es una opción más asequible que aún ofrece un rendimiento satisfactorio en juegos. Al combinarse con el Ryzen 5 3600X, brinda una experiencia de juego equilibrada y sin crear un cuello de botella significativo.' },
          { nombre: 'NVIDIA GeForce RTX 2060', info: 'La RTX 2060 es una opción versátil que ofrece un rendimiento sólido en juegos y la capacidad de aprovechar las características avanzadas de trazado de rayos. Al combinarse con el Ryzen 5 3600X, proporciona un rendimiento equilibrado y una experiencia de juego inmersiva.' },
          { nombre: 'AMD Radeon RX 5700 XT', info: 'La RX 5700 XT es una opción potente para usuarios que buscan un rendimiento de juego de alta calidad. Al combinarse con el Ryzen 5 3600X, proporciona un rendimiento fluido y una experiencia de juego inmersiva sin crear un cuello de botella importante.' }
        ];
      } else if (procesador === 'AMD Ryzen 7 3700X') {
        placas = [
          { nombre: 'NVIDIA GeForce RTX 2070 Super', info: 'La RTX 2070 Super es una opción poderosa que se complementa bien con el Ryzen 7 3700X. Su rendimiento equilibrado permite disfrutar de juegos exigentes sin crear un cuello de botella significativo.' },
          { nombre: 'AMD Radeon RX 5700 XT', info: 'La RX 5700 XT es una opción potente y más asequible en comparación con las tarjetas gráficas de gama alta de NVIDIA. Combinada con el Ryzen 7 3700X, proporciona un rendimiento sólido y una experiencia de juego inmersiva.' },
          { nombre: 'NVIDIA GeForce GTX 1660 Ti', info: 'La GTX 1660 Ti es una opción más asequible que aún ofrece un rendimiento satisfactorio en juegos. Al combinarse con el Ryzen 7 3700X, brinda una experiencia de juego equilibrada y sin crear un cuello de botella significativo.' },
          { nombre: 'AMD Radeon RX 5600 XT', info: 'La RX 5600 XT es una opción más asequible que sigue ofreciendo un rendimiento satisfactorio en juegos. Al combinarse con el Ryzen 7 3700X, proporciona un rendimiento equilibrado y una experiencia de juego fluida sin crear un cuello de botella importante.' }
        ];
      } else if (procesador === 'Intel Core i9-10900K') {
        placas = [
          { nombre: 'NVIDIA GeForce RTX 3080', info: 'La RTX 3080 es una opción poderosa y de última generación que se complementa perfectamente con el Core i9-10900K. Juntos, ofrecen un rendimiento máximo en juegos y aplicaciones intensivas, evitando cualquier cuello de botella significativo.' },
          { nombre: 'AMD Radeon RX 6800 XT', info: 'La RX 6800 XT es una opción potente y competitiva de AMD que se combina bien con el Core i9-10900K. Juntos, ofrecen un rendimiento equilibrado y una experiencia de juego inmersiva sin crear un cuello de botella significativo.' },
          { nombre: 'NVIDIA GeForce RTX 3070', info: 'La RTX 3070 es una opción más asequible en comparación con las tarjetas gráficas de gama alta, pero aún ofrece un rendimiento sólido. Al combinarse con el Core i9-10900K, proporciona un rendimiento equilibrado y una experiencia de juego de alta calidad sin crear un cuello de botella importante.' },
          { nombre: 'AMD Radeon RX 5700 XT', info: 'La RX 5700 XT es una opción más asequible que aún ofrece un rendimiento satisfactorio en juegos. Al combinarse con el Core i9-10900K, brinda una experiencia de juego equilibrada y sin crear un cuello de botella significativo.' }
        ];
      } else if (procesador === 'Intel Core i5-10400F') {
        placas = [
          { nombre: 'NVIDIA GeForce GTX 1660 Super', info: 'La GTX 1660 Super es una opción asequible y equilibrada para el Core i5-10400F. Ambos componentes se complementan bien, evitando un cuello de botella significativo y brindando un rendimiento sólido en juegos de nivel medio.' },
          { nombre: 'AMD Radeon RX 5600 XT', info: 'La RX 5600 XT es una opción competitiva de AMD para el Core i5-10400F. Juntos, ofrecen un rendimiento equilibrado y una experiencia de juego satisfactoria sin crear un cuello de botella importante.' },
          { nombre: 'NVIDIA GeForce RTX 2060', info: 'La RTX 2060 es una opción versátil para el Core i5-10400F. Juntos, ofrecen un rendimiento equilibrado y una experiencia de juego satisfactoria sin crear un cuello de botella significativo. Además, la RTX 2060 también tiene soporte para tecnologías de trazado de rayos, lo que puede mejorar la calidad visual en juegos compatibles.' },
          { nombre: 'AMD Radeon RX 5500 XT', info: 'La RX 5500 XT es una opción económica y adecuada para el Core i5-10400F. Juntos, ofrecen un rendimiento equilibrado para juegos de nivel medio-bajo sin crear un cuello de botella significativo.' }
        ];
      } else if (procesador === 'AMD Ryzen 5 5600G') {
        placas = [
          { nombre: 'NVIDIA GeForce GTX 1660 Super', info: 'La GTX 1660 Super es una opción asequible y equilibrada para el Ryzen 5 5600G. Ambos componentes se complementan bien, evitando un cuello de botella significativo y brindando un rendimiento sólido en juegos de nivel medio.' },
          { nombre: 'AMD Radeon RX 5600 XT', info: 'La RX 5600 XT es una opción competitiva de AMD para el Ryzen 5 5600G. Juntos, ofrecen un rendimiento equilibrado y una experiencia de juego satisfactoria sin crear un cuello de botella importante.' },
          { nombre: 'NVIDIA GeForce RTX 2060', info: 'La RTX 2060 es una opción versátil para el Ryzen 5 5600G. Juntos, ofrecen un rendimiento equilibrado y una experiencia de juego satisfactoria sin crear un cuello de botella significativo. Además, la RTX 2060 también tiene soporte para tecnologías de trazado de rayos, lo que puede mejorar la calidad visual en juegos compatibles.' },
          { nombre: 'AMD Radeon RX 5500 XT', info: 'La RX 5500 XT es una opción económica y adecuada para el Ryzen 5 5600G. Juntos, ofrecen un rendimiento equilibrado para juegos de nivel medio-bajo sin crear un cuello de botella significativo.' }
        ];
      } else if (procesador === 'Intel Core i9-10850K') {
        placas = [
          { nombre: 'NVIDIA GeForce RTX 3080', info: 'La RTX 3080 es una opción potente y equilibrada para el Intel Core i9-10850K. Ambos componentes ofrecen un rendimiento de primera clase y se complementan entre sí sin crear un cuello de botella significativo.' },
          { nombre: 'AMD Radeon RX 6800 XT', info: 'La RX 6800 XT es una opción competente de AMD para el Intel Core i9-10850K. Juntos, ofrecen un rendimiento de alto nivel y una experiencia de juego excepcional sin crear un cuello de botella importante.' },
          { nombre: 'NVIDIA GeForce RTX 3070', info: 'La RTX 3070 es una opción equilibrada y asequible para el Intel Core i9-10850K. Juntos, ofrecen un rendimiento sólido en juegos de alta gama sin generar un cuello de botella significativo.' },
          { nombre: 'AMD Radeon RX 6700 XT', info: 'La RX 6700 XT es una opción competitiva de AMD para el Intel Core i9-10850K. Juntos, ofrecen un rendimiento equilibrado en juegos de alta gama sin generar un cuello de botella importante.' }
        ];
      } else if (procesador === 'AMD Ryzen 9 3900X') {
        placas = [
          { nombre: 'NVIDIA GeForce RTX 3080', info: 'La RTX 3080 es una opción potente y equilibrada para el AMD Ryzen 9 3900X. Ambos componentes ofrecen un rendimiento de primera clase y se complementan entre sí sin crear un cuello de botella significativo.' },
          { nombre: 'AMD Radeon RX 6800 XT', info: 'La RX 6800 XT es una opción competente de AMD para el AMD Ryzen 9 3900X. Juntos, ofrecen un rendimiento de alto nivel y una experiencia de juego excepcional sin crear un cuello de botella importante.' },
          { nombre: 'NVIDIA GeForce RTX 3070', info: 'La RTX 3070 es una opción equilibrada y asequible para el AMD Ryzen 9 3900X. Juntos, ofrecen un rendimiento sólido en juegos de alta gama sin generar un cuello de botella significativo.' },
          { nombre: 'AMD Radeon RX 6700 XT', info: 'La RX 6700 XT es una opción competitiva de AMD para el AMD Ryzen 9 3900X. Juntos, ofrecen un rendimiento equilibrado en juegos de alta gama sin generar un cuello de botella importante.' }
        ];
      } else if (procesador === 'AMD Ryzen 5 3600') {
        placas = [
          { nombre: 'NVIDIA GeForce GTX 1660 Super', info: 'La GTX 1660 Super es una opción adecuada para el AMD Ryzen 5 3600, ya que ofrece un equilibrio entre rendimiento y precio. Ambos componentes se complementan entre sí y no generan un cuello de botella significativo.' },
          { nombre: 'AMD Radeon RX 5600 XT', info: 'La RX 5600 XT es una opción competitiva de AMD para el AMD Ryzen 5 3600. Juntos, ofrecen un rendimiento sólido en juegos de gama media sin generar un cuello de botella importante.' },
          { nombre: 'NVIDIA GeForce RTX 2060', info: 'La RTX 2060 es una opción versátil para el AMD Ryzen 5 3600. Juntos, ofrecen un rendimiento sólido y brindan acceso a tecnologías de vanguardia como el trazado de rayos, sin crear un cuello de botella importante.' },
          { nombre: 'AMD Radeon RX 5700', info: 'La RX 5700 es una opción sólida para el AMD Ryzen 5 3600. Juntos, ofrecen un rendimiento equilibrado en juegos de gama media-alta sin generar un cuello de botella importante.' }
        ];
      } else if (procesador === 'Intel Core i7-9700K') {
        placas = [
          { nombre: 'NVIDIA GeForce RTX 2070 Super', info: 'La RTX 2070 Super es una opción ideal para el Intel Core i7-9700K, ya que ambos componentes son de gama alta y se complementan entre sí. No se produce un cuello de botella significativo, lo que permite aprovechar al máximo el rendimiento de la tarjeta gráfica.' },
          { nombre: 'AMD Radeon RX 5700 XT', info: 'La RX 5700 XT es una opción competitiva de AMD para el Intel Core i7-9700K. Juntos, ofrecen un rendimiento sólido en juegos de alta calidad sin generar un cuello de botella significativo.' },
          { nombre: 'NVIDIA GeForce GTX 1660 Ti', info: 'La GTX 1660 Ti es una opción equilibrada para el Intel Core i7-9700K. Ambos componentes ofrecen un buen rendimiento en juegos de gama media y se complementan entre sí sin generar un cuello de botella importante.' },
          { nombre: 'AMD Radeon RX 5600 XT', info: 'La RX 5600 XT es una opción económica para el Intel Core i7-9700K. Juntos, ofrecen un buen rendimiento en juegos de gama media sin generar un cuello de botella significativo.' }
        ];
      } else if (procesador === 'Intel Core i3-10100') {
        placas = [
          { nombre: 'NVIDIA GeForce GTX 1650 Super', info: 'La GTX 1650 Super es una opción adecuada para el Intel Core i3-10100. Ambos componentes ofrecen un buen rendimiento en juegos de gama media y se complementan entre sí sin generar un cuello de botella significativo.' },
          { nombre: 'AMD Radeon RX 5500 XT', info: 'La RX 5500 XT es una opción competitiva de AMD para el Intel Core i3-10100. Juntos, ofrecen un rendimiento sólido en juegos de gama media sin generar un cuello de botella significativo.' },
          { nombre: 'NVIDIA GeForce GTX 1660', info: 'La GTX 1660 es una opción equilibrada para el Intel Core i3-10100. Ambos componentes ofrecen un buen rendimiento en juegos de gama media y se complementan entre sí sin generar un cuello de botella importante.' },
          { nombre: 'AMD Radeon RX 580', info: 'La RX 580 es una opción económica para el Intel Core i3-10100. Juntos, ofrecen un buen rendimiento en juegos de gama media sin generar un cuello de botella significativo.' }
        ];
    } 

    this.setState({ placasRecomendadas: placas });
  };

  handleClickInfo = (index) => {
    this.setState({
      procesadorIndex: index,
    });
  };


  render() {
    const { procesadorSeleccionado, placasRecomendadas, showPlacas } = this.state;

    return (
      <div className="Container">
        <div className="CuelloBotellaProd">
          <div className="placa">
            <div className="cardH2">
              <h2>CUELLO DE BOTELLA</h2>
            </div>
            <h3>PLACAS DE VIDEO</h3>
            <Dropdown className="todo">
              <Dropdown.Toggle className="dropdown">
                {procesadorSeleccionado  || 'Seleccione'}
              </Dropdown.Toggle>
                  <Dropdown.Menu className='menu'>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangeProcesador('AMD Ryzen 9 5950X')}>
                      AMD Ryzen 9 5950X
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangeProcesador('AMD Ryzen 7 5800X')}>
                      AMD Ryzen 7 5800X
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangeProcesador('AMD Ryzen 5 5600X')}>
                      AMD Ryzen 5 5600X
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangeProcesador('Intel Core i9-11900K')}>
                      Intel Core i9-11900K
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangeProcesador('Intel Core i7-11700K')}>
                      Intel Core i7-11700K
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangeProcesador('Intel Core i5-11600K')}>
                      Intel Core i5-11600K
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangeProcesador('AMD Ryzen 9 5900X')}>
                      AMD Ryzen 9 5900X
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangeProcesador('AMD Ryzen 7 5700G')}>
                      AMD Ryzen 7 5700G
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangeProcesador('Intel Core i7-10700K')}>
                      Intel Core i7-10700K
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangeProcesador('Intel Core i5-10600K')}>
                      Intel Core i5-10600K
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangeProcesador('AMD Ryzen 5 3600X')}>
                      AMD Ryzen 5 3600X
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangeProcesador('AMD Ryzen 7 3700X')}>
                      AMD Ryzen 7 3700X
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangeProcesador('Intel Core i9-10900K')}>
                      Intel Core i9-10900K
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangeProcesador('Intel Core i5-10400F')}>
                      Intel Core i5-10400F
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangeProcesador('AMD Ryzen 5 5600G')}>
                      AMD Ryzen 5 5600G
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangeProcesador('Intel Core i9-10850K')}>
                      Intel Core i9-10850K
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangeProcesador('AMD Ryzen 9 3900X')}>
                      AMD Ryzen 9 3900X
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangeProcesador('AMD Ryzen 5 3600')}>
                      AMD Ryzen 5 3600
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangeProcesador('Intel Core i7-9700K')}>
                      Intel Core i7-9700K
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={() => this.handleChangeProcesador('Intel Core i3-10100')}>
                      Intel Core i3-10100
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            {placasRecomendadas.length > 0 && (
              <div className={`fade-in ${showPlacas ? 'active' : ''}`}>
                <div className={`containerCuello ${showPlacas ? '' : 'hidden'}`}>
                  <h3>PROCESADORES RECOMENDADOS:</h3>
                  <ul>
                    {placasRecomendadas.map((procesador, index) => (
                      <li key={index}>
                        <div className={`info ${showPlacas ? '' : 'hidden'}`}>
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

export default CuelloProcesador;
