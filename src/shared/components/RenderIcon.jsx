import { ICONS_OPTIONS } from '../helpers/constants'

export const RenderIcon = ({ iconName = 'CurrencyDolarIcon' }) => {
  // Buscar el icono en ICONS_OPTIONS basado en el nombre del icono
  const iconObj = ICONS_OPTIONS.find((icon) => icon.value === iconName)

  // Si no se encuentra el icono, retorna null o un icono por defecto
  if (!iconObj) {
    return null // O puedes retornar un icono predeterminado como un fallback
  }

  // Retorna el icono correspondiente
  const Icon = iconObj.icon
  return <Icon className="size-6" />
}
