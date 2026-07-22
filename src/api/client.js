import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' },
});

export const fetchLabs = () => api.get('/labs/').then(res => res.data);
export const fetchPortfolio = () => api.get('/portfolio/').then(res => res.data);
export const fetchTestimonials = () => api.get('/testimonials/').then(res => res.data);
export const fetchTeam = () => api.get('/team/').then(res => res.data);
export const submitContact = (data) => api.post('/contact/', data);