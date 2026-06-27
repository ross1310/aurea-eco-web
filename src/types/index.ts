// Types para la aplicación Áurea Eco

export interface Product {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  disponible: boolean;
  imagen: string;
  categoria: string;
}

export interface FormData {
  nombre: string;
  email: string;
  mensaje: string;
}

export type FilterType = 'todos' | 'disponibles' | 'agotados';
export type CategoryType = 'Todos' | 'Outfits';
