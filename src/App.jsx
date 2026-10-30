import DemoBanner from './components/DemoBanner.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Manifiesto from './components/Manifiesto.jsx'
import Historia from './components/Historia.jsx'
import Valores from './components/Valores.jsx'
import Galeria from './components/Galeria.jsx'
import Carta from './components/Carta.jsx'
import Reservas from './components/Reservas.jsx'
import Opiniones from './components/Opiniones.jsx'
import Ubicacion from './components/Ubicacion.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="grain min-h-screen">
      <DemoBanner />
      <Navbar />

      <main>
        <Hero />
        <Manifiesto />
        <Historia />
        <Valores />
        <Galeria />
        <Carta />
        <Reservas />
        <Opiniones />
        <Ubicacion />
      </main>

      <Footer />
    </div>
  )
}
