"use client"

import "./estilos.css"
import { useState } from "react"

export default function LandingPage() {
  const [terminoBusqueda, setTerminoBusqueda] = useState("")
  const [resultadosBusqueda, setResultadosBusqueda] = useState([])

  const manejarBusqueda = () => {
    if (terminoBusqueda.trim()) {
      // Simulamos resultados de búsqueda
      const resultados = [
        { nombre: "Parrilla Don Carlos", tipo: "Restaurante", ubicacion: "Buenos Aires" },
        { nombre: "Tour Glaciar Perito Moreno", tipo: "Actividad", ubicacion: "El Calafate" },
        { nombre: "Asado Criollo La Estancia", tipo: "Restaurante", ubicacion: "Mendoza" },
      ]
      setResultadosBusqueda(resultados)
    }
  }

  return (
    <div className="contenedor-principal">
      {/* Sección 1: Header/Navegación */}
      <header className="encabezado">
        <div className="contenido-encabezado">
          <div className="logo">
            <span className="icono-estrella"><img src="/Group 21.png" alt="" /></span>
            <h1>ExplorAR</h1>
          </div>
          <nav className="navegacion">
            <button className="boton-iniciar-sesion">Iniciar sesión</button>
            <button className="boton-registrarse">Registrarse</button>
          </nav>
        </div>
      </header>

      {/* Sección 2: Hero/Bienvenida mejorada */}
      <section className="seccion-hero">
        <div className="fondo-hero">
          <img src="/beautiful-panoramic-view-of-buenos-aires-skyline-w.png" alt="Buenos Aires" className="imagen-fondo-hero" />
        </div>
        <div className="contenido-hero">
          <h2 className="titulo-principal">Descubrí Argentina como nunca antes</h2>
          <p className="subtitulo">
            Encontrá los mejores restaurantes y actividades turísticas en todo el país. Tu próxima aventura te está
            esperando.
          </p>
          <div className="barra-busqueda">
            <input
              type="text"
              placeholder="Buscar restaurantes o actividades..."
              className="input-busqueda"
              value={terminoBusqueda}
              onChange={(e) => setTerminoBusqueda(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && manejarBusqueda()}
            />
            <button className="boton-buscar" onClick={manejarBusqueda}>
              Buscar
            </button>
          </div>

          {resultadosBusqueda.length > 0 && (
            <div className="resultados-busqueda">
              <h3>Resultados encontrados:</h3>
              {resultadosBusqueda.map((resultado, index) => (
                <div key={index} className="resultado-item">
                  <strong>{resultado.nombre}</strong> - {resultado.tipo} en {resultado.ubicacion}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="seccion-como-funciona">
        <div className="contenido-como-funciona">
          <h2 className="titulo-seccion">¿Cómo funciona ExplorAR?</h2>
          <div className="pasos-container">
            <div className="paso-item">
              <div className="paso-numero">1</div>
              <div className="paso-icono">
                <img src="/magnifying-glass-search-icon.png" alt="Buscar" />
              </div>
              <h3>Buscá</h3>
              <p>Explorá miles de restaurantes y actividades en toda Argentina</p>
            </div>
            <div className="paso-item">
              <div className="paso-numero">2</div>
              <div className="paso-icono">⭐</div>
              <h3>Elegí</h3>
              <p>Leé reseñas y compará opciones para encontrar lo perfecto</p>
            </div>
            <div className="paso-item">
              <div className="paso-numero">3</div>
              <div className="paso-icono">
                <img src="/celebration-party-confetti-icon.png" alt="Disfrutar" />
              </div>
              <h3>Disfrutá</h3>
              <p>Reservá y viví experiencias increíbles en tu destino favorito</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 4: Características principales */}
      <section className="seccion-caracteristicas">
        <div className="contenido-caracteristicas">
          <h2 className="titulo-seccion">¿Por qué elegir ExplorAR?</h2>
          <div className="grid-caracteristicas">
            <div className="tarjeta-caracteristica">
              <div className="icono-caracteristica">
                <img src="/restaurant-dining-fork-knife-icon.png" alt="Restaurantes" />
              </div>
              <h3>Restaurantes</h3>
              <p>Miles de opciones gastronómicas en toda Argentina</p>
            </div>
            <div className="tarjeta-caracteristica">
              <div className="icono-caracteristica">
                <img src="/tourist-attractions-monument-building-icon.png" alt="Actividades" />
              </div>
              <h3>Actividades</h3>
              <p>Experiencias turísticas únicas en cada provincia</p>
            </div>
            <div className="tarjeta-caracteristica">
              <div className="icono-caracteristica">⭐</div>
              <h3>Reseñas</h3>
              <p>Opiniones reales de otros viajeros como vos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 5: Actividades destacadas mejoradas */}
      <section className="seccion-destacadas">
        <div className="contenido-destacadas">
          <h2 className="titulo-seccion">Actividades destacadas</h2>
          <div className="grid-actividades">
            <div className="tarjeta-actividad">
              <div className="imagen-actividad">
                <img src="/colorful-street-art-in-la-boca-buenos-aires.png" alt="Tour por Caminito" />
              </div>
              <div className="info-actividad">
                <h3>Tour por Caminito</h3>
                <div className="estrellas">⭐⭐⭐⭐⭐</div>
                <p className="descripcion">Recorrido por el famoso barrio de La Boca</p>
                <div className="precio">Desde $12.000</div>
              </div>
            </div>
            <div className="tarjeta-actividad">
              <div className="imagen-actividad">
                <img src="/wine-tasting-in-mendoza-vineyard-argentina.png" alt="Degustación de vinos" />
              </div>
              <div className="info-actividad">
                <h3>Degustación de vinos</h3>
                <div className="estrellas">⭐⭐⭐⭐⭐</div>
                <p className="descripcion">Experiencia única en Mendoza</p>
                <div className="precio">Desde $15.000</div>
              </div>
            </div>
            <div className="tarjeta-actividad">
              <div className="imagen-actividad">
                <img src="/mountain-trekking-in-bariloche-patagonia.png" alt="Trekking en Bariloche" />
              </div>
              <div className="info-actividad">
                <h3>Trekking en Bariloche</h3>
                <div className="estrellas">⭐⭐⭐⭐⭐</div>
                <p className="descripcion">Aventura en la Patagonia argentina</p>
                <div className="precio">Desde $8.000</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 6: Testimonios */}
      <section className="seccion-testimonios">
        <div className="contenido-testimonios">
          <h2 className="titulo-seccion">Lo que dicen nuestros usuarios</h2>
          <div className="grid-testimonios">
            <div className="tarjeta-testimonio">
              <div className="avatar">JF</div>
              <div className="contenido-testimonio">
                <h4>Juan Fernández</h4>
                <div className="estrellas">⭐⭐⭐⭐⭐</div>
                <p>"Increíble plataforma, encontré lugares que nunca hubiera descubierto por mi cuenta"</p>
              </div>
            </div>
            <div className="tarjeta-testimonio">
              <div className="avatar">MA</div>
              <div className="contenido-testimonio">
                <h4>María Álvarez</h4>
                <div className="estrellas">⭐⭐⭐⭐⭐</div>
                <p>"Perfecto para planificar mis vacaciones. Las reseñas son muy útiles"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 7: Llamada a la acción */}
      <section className="seccion-cta">
        <div className="contenido-cta">
          <h2>¿Listo para explorar Argentina?</h2>
          <p>Únete a miles de viajeros que ya descubrieron su próximo destino favorito</p>
          <button className="boton-cta">Comenzar ahora</button>
        </div>
      </section>

      {/* Sección 8: Footer */}
      <footer className="pie-pagina">
        <div className="contenido-footer">
          <div className="info-footer">
            <div className="logo-footer">
              <span className="icono-estrella"><img src="/Group 21.png" alt="" /></span>
              <span>ExplorAR</span>
            </div>
            <p>Tu guía para descubrir Argentina</p>
          </div>
          <div className="enlaces-footer">
            <div className="columna-enlaces">
              <h4>Empresa</h4>
              <ul>
                <li>
                  <a href="#">Sobre nosotros</a>
                </li>
                <li>
                  <a href="#">Contacto</a>
                </li>
                <li>
                  <a href="#">Términos</a>
                </li>
              </ul>
            </div>
            <div className="columna-enlaces">
              <h4>Ayuda</h4>
              <ul>
                <li>
                  <a href="#">Preguntas frecuentes</a>
                </li>
                <li>
                  <a href="#">Soporte</a>
                </li>
                <li>
                  <a href="#">Política de privacidad</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2024 ExplorAR. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
