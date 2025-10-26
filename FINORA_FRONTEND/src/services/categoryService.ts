import axios from 'axios';
import { Category } from '../types';

const API_URL = 'http://localhost:8080/api/categories'; // ajusta según tu backend

export const categoryService = {
  // Obtener todas las categorías
  async getAll(): Promise<Category[]> {
    const response = await axios.get(API_URL);
    return response.data;
  },

  // Crear nueva categoría
  async create(category: Omit<Category, 'id'>): Promise<Category> {
    const response = await axios.post(API_URL, category);
    return response.data;
  },

  // Eliminar categoría
  async remove(id: string): Promise<void> {
    await axios.delete(`${API_URL}/${id}`);
  },
};
