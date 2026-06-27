import React, { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import type { FormData } from '../../types';

interface ContactFormProps {
  onSubmit: (data: FormData) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    mensaje: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.nombre && formData.email) {
      onSubmit(formData);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ nombre: '', email: '', mensaje: '' });
      }, 2500);
    }
  };

  return (
    <section id="contacto" className="max-w-4xl mx-auto px-4 py-16 md:py-24 reveal opacity-0 translate-y-10 transition-all duration-1000">
      <div className="bg-[#FDFBF7] rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-[#5A0C1E]/10 relative">
        <div className="absolute top-6 right-8 text-[#5A0C1E]/20 hidden md:block">
          <Sparkles size={40} />
        </div>

        <div className="text-center space-y-2 mb-8">
          <span className="text-[#5A0C1E] font-serif text-sm tracking-widest uppercase block">
            ¿Tienes dudas o buscas algo en especial?
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#182E1E]">
            Escríbenos al Atelier
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#182E1E]/70 font-semibold mb-2">
                Nombre Completo
              </label>
              <input
                type="text"
                required
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                placeholder="Tu nombre mágico"
                className="w-full px-4 py-3 rounded-xl border border-[#5A0C1E]/10 bg-[#FDFBF7] focus:outline-none focus:border-[#5A0C1E] text-sm text-[#182E1E] transition-all"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#182E1E]/70 font-semibold mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="ejemplo@correo.com"
                className="w-full px-4 py-3 rounded-xl border border-[#5A0C1E]/10 bg-[#FDFBF7] focus:outline-none focus:border-[#5A0C1E] text-sm text-[#182E1E] transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-[#182E1E]/70 font-semibold mb-2">
              ¿En qué podemos inspirarte hoy?
            </label>
            <textarea
              rows={4}
              value={formData.mensaje}
              onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              placeholder="Cuéntanos qué estilos buscas o si quieres donar tus prendas vintage..."
              className="w-full px-4 py-3 rounded-xl border border-[#5A0C1E]/10 bg-[#FDFBF7] focus:outline-none focus:border-[#5A0C1E] text-sm text-[#182E1E] transition-all resize-none"
            ></textarea>
          </div>

          <div className="text-center">
            {submitted ? (
              <div className="inline-flex items-center gap-2 text-[#5A0C1E] font-serif text-sm">
                <Check size={18} className="animate-bounce" /> ¡Tu mensaje ha viajado con éxito! Responderemos pronto.
              </div>
            ) : (
              <button
                type="submit"
                className="bg-[#5A0C1E] hover:bg-[#182E1E] text-[#FDFBF7] px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-lg"
              >
                Enviar Mensaje Estelar
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};
