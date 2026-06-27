import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import {
  Header,
  HeroSection,
  FilterSection,
  CatalogSection,
  ProductDetailModal,
  PhilosophySection,
  ContactForm,
  Footer
} from './components/sections';
import { Notification, ScrollTopButton } from './components/common';
import { useNotification, useScroll, useScrollReveal } from './hooks';
import { CATALOG_PRODUCTS, DEFAULT_WHATSAPP } from './constants/products';
import type { Product, FilterType, CategoryType } from './types';
import './index.css';

function App() {
  const [productos] = useState<Product[]>(CATALOG_PRODUCTS);
  const [categoriaActiva, setCategoriaActiva] = useState<CategoryType>('Todos');
  const [filtroDisponibilidad, setFiltroDisponibilidad] = useState<FilterType>('todos');
  const [busqueda, setBusqueda] = useState('');
  const [productoSeleccionado, setProductoSeleccionado] = useState<Product | null>(null);
  const [favoritos, setFavoritos] = useState<number[]>([]);
  // const [numWhatsApp, setNumWhatsApp] = useState(DEFAULT_WHATSAPP);

  const { showNotification, notificationMsg, triggerNotification } = useNotification();
  const isScrolled = useScroll();
  useScrollReveal([productos, categoriaActiva, filtroDisponibilidad, busqueda]);

  // Filtrado inteligente
  const productosFiltrados = productos.filter((prod) => {
    const cumpleBusqueda =
      prod.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      prod.descripcion.toLowerCase().includes(busqueda.toLowerCase());

    const cumpleCategoria =
      categoriaActiva === 'Todos' || prod.categoria === categoriaActiva;

    const cumpleDisponibilidad =
      filtroDisponibilidad === 'todos' ||
      (filtroDisponibilidad === 'disponibles' && prod.disponible) ||
      (filtroDisponibilidad === 'agotados' && !prod.disponible);

    return cumpleBusqueda && cumpleCategoria && cumpleDisponibilidad;
  });

  // Manejo de favoritos
  const toggleFavorito = (id: number, event: React.MouseEvent) => {
    event.stopPropagation();
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter((fId) => fId !== id));
      triggerNotification('Eliminado de tus favoritos.');
    } else {
      setFavoritos([...favoritos, id]);
      triggerNotification('¡Guardado en tus favoritos celestiales!');
    }
  };

  // WhatsApp
  const enviarConsultaWhatsApp = (producto: Product, notasPersonalizadas = '') => {
    const saludo = `¡Hola Áurea Eco! 🌟 Me ha encantado vuestra propuesta de moda sostenible de segunda mano.`;
    const detalle = `Estoy sumamente interesada/o en reservar la prenda: *"${producto.titulo}"* (Código de Ref: #00${producto.id}) con un valor de *${producto.precio.toFixed(2)}*.`;
    const notas = notasPersonalizadas ? `\n\nMis especificaciones adicionales:\n"${notasPersonalizadas}"` : '';
    const cierre = `\n\n¿Sigue disponible para concretar mi reserva? ¡Muchas gracias! ✨`;

    const mensajeCompleto = encodeURIComponent(saludo + '\n\n' + detalle + notas + cierre);
    const url = `https://wa.me/${DEFAULT_WHATSAPP.replace('+', '')}?text=${mensajeCompleto}`;

    window.open(url, '_blank');
    setProductoSeleccionado(null);
    triggerNotification('Redirigiendo a WhatsApp de reservas...');
  };

  // Contacto
  const handleContactSubmit = () => {
    triggerNotification('¡Tu mensaje ha sido enviado al cosmos de Áurea Eco!');
  };

  return (
    <div className="min-h-screen bg-light text-secondary font-sans selection:bg-primary selection:text-light relative overflow-hidden">
      {/* Fondo texturizado */}
      <div className="fixed inset-0 bg-[radial-gradient(#5a0c1e08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0"></div>

      {/* Destellos decorativos */}
      <div className="absolute top-[15%] left-[5%] text-[#5A0C1E] opacity-15 animate-pulse pointer-events-none hidden md:block">
        <Sparkles size={32} />
      </div>
      <div
        className="absolute top-[45%] right-[3%] text-[#182E1E] opacity-20 animate-pulse pointer-events-none hidden md:block"
        style={{ animationDelay: '1s' }}
      >
        <Sparkles size={40} />
      </div>
      <div
        className="absolute bottom-[20%] left-[2%] text-[#5A0C1E] opacity-10 animate-bounce pointer-events-none hidden md:block"
        style={{ animationDuration: '6s' }}
      >
        <Sparkles size={24} />
      </div>

      {/* Notificación */}
      <Notification show={showNotification} message={notificationMsg} />

      {/* Header */}
      <Header isScrolled={isScrolled} />

      {/* Hero */}
      <HeroSection />

      {/* Filtros */}
      <FilterSection
        searchValue={busqueda}
        onSearchChange={setBusqueda}
        activeCategory={categoriaActiva}
        onCategoryChange={setCategoriaActiva}
        filterAvailability={filtroDisponibilidad}
        onAvailabilityChange={setFiltroDisponibilidad}
        productCount={productosFiltrados.length}
        totalCount={productos.length}
      />

      {/* Catálogo */}
      <CatalogSection
        products={productosFiltrados}
        favoriteIds={favoritos}
        onToggleFavorite={toggleFavorito}
        onSelectProduct={setProductoSeleccionado}
      />

      {/* Panel Config WhatsApp */}
      {/* <section className="max-w-xl mx-auto px-4 py-6 text-center">
        <div className="bg-[#182E1E]/5 rounded-2xl p-4 border border-[#5A0C1E]/10">
          <p className="text-xs font-serif font-semibold text-[#5A0C1E] uppercase tracking-wider mb-2">
            ⚙️ Panel Configuración Áurea Eco (Fácil edición)
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
            <label className="text-xs text-[#182E1E]/70">Destinatario WhatsApp:</label>
            <input
              type="text"
              value={numWhatsApp}
              onChange={(e) => setNumWhatsApp(e.target.value)}
              placeholder="+51987654321"
              className="px-3 py-1 text-xs rounded-full border border-[#5A0C1E]/10 focus:outline-none bg-[#FDFBF7]"
            />
          </div>
        </div>
      </section> */}

      {/* Filosofía */}
      <PhilosophySection />

      {/* Contacto */}
      <ContactForm onSubmit={handleContactSubmit} />

      {/* Footer */}
      <Footer />

      {/* Botón Scroll Top */}
      <ScrollTopButton isVisible={isScrolled} />

      {/* Modal de Detalle */}
      <ProductDetailModal
        product={productoSeleccionado}
        onClose={() => setProductoSeleccionado(null)}
        onReserve={enviarConsultaWhatsApp}
      />
    </div>
  );
}

export default App;
