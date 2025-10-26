// src/api.ts
import { User, Category, Transaction, Goal } from '../types';

const API_URL = 'http://localhost:8080/api';

export const api = {
  // USERS
  login: async (email: string, password: string): Promise<User> => {
    const res = await fetch(`${API_URL}/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    return res.json();
  },

  register: async (user: Partial<User>): Promise<User> => {
    const res = await fetch(`${API_URL}/users/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    return res.json();
  },

  getUsers: async (): Promise<User[]> => {
    const res = await fetch(`${API_URL}/users`);
    return res.json();
  },

  // CATEGORIES
  getCategories: async (): Promise<Category[]> => {
    const res = await fetch(`${API_URL}/categories`);
    return res.json();
  },

  addCategory: async (category: Partial<Category>): Promise<Category> => {
    const res = await fetch(`${API_URL}/categories`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(category),
    });
    return res.json();
  },

  deleteCategory: async (id: string) => {
    await fetch(`${API_URL}/categories/${id}`, { method: 'DELETE' });
  },

  // TRANSACTIONS
  getTransactions: async (): Promise<Transaction[]> => {
    const res = await fetch(`${API_URL}/transactions`);
    return res.json();
  },

  addTransaction: async (transaction: Partial<Transaction>): Promise<Transaction> => {
    const res = await fetch(`${API_URL}/transactions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(transaction),
    });
    return res.json();
  },

  deleteTransaction: async (id: string) => {
    await fetch(`${API_URL}/transactions/${id}`, { method: 'DELETE' });
  },

  // GOALS
  getGoals: async (): Promise<Goal[]> => {
    const res = await fetch(`${API_URL}/goals`);
    return res.json();
  },

  addGoal: async (goal: Partial<Goal>): Promise<Goal> => {
    const res = await fetch(`${API_URL}/goals`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(goal),
    });
    return res.json();
  },

  updateGoal: async (id: string, goal: Partial<Goal>): Promise<Goal> => {
    const res = await fetch(`${API_URL}/goals/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(goal),
    });
    return res.json();
  },

  deleteGoal: async (id: string) => {
    await fetch(`${API_URL}/goals/${id}`, { method: 'DELETE' });
  },
};
