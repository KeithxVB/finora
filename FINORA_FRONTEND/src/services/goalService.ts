import { Goal } from '../types';

const API_URL = 'http://localhost:8080/api/goals';

export const goalService = {
  async getAll(): Promise<Goal[]> {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error('Error al obtener las metas');
    return res.json();
  },

  async create(goal: Omit<Goal, 'id' | 'userId'>): Promise<Goal> {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(goal),
    });
    if (!res.ok) throw new Error('Error al crear la meta');
    return res.json();
  },

  async update(id: string, updates: Partial<Goal>): Promise<Goal> {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });
    if (!res.ok) throw new Error('Error al actualizar la meta');
    return res.json();
  },

  async delete(id: string): Promise<void> {
    const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Error al eliminar la meta');
  },
};
