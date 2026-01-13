const { VITE_API_URL } = import.meta.env // Reemplaza con la URL de tu API
import { store } from '@/store'
import { logout } from '@/modules/dashboard/slice'

export const apiFetch = async (endpoint, options = {}) => {
  const token = localStorage.getItem('token') // Obtener el token desde localStorage o sessionStorage

  const defaultHeaders = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }), // Agregar token si existe
  }

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers, // Permite agregar headers adicionales
    },
  }

  const response = await fetch(`${VITE_API_URL}${endpoint}`, config)

  if (!response.ok) {
    let errorData = {}
    try {
      const text = await response.text()
      errorData = text ? JSON.parse(text) : {}
    } catch (e) {
      console.error('Error parsing error response:', e)
    }

    if (response.status === 401 || response.status === 403) {
      store.dispatch(logout())
      window.location.href = '/login'
    }
    throw { status: response.status, statusText: response.statusText, data: errorData }
  }

  const responseText = await response.text()
  return responseText ? JSON.parse(responseText) : {}
}
