const { VITE_API_URL } = import.meta.env // Reemplaza con la URL de tu API

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
    throw new Error(`Error: ${response.status} ${response.statusText}`)
  }

  return response.json()
}
