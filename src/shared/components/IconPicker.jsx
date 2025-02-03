import { useState } from 'react'
import { Popover, PopoverHandler, PopoverContent, Button } from '@material-tailwind/react'
import { ICONS_OPTIONS } from '@/shared/helpers/constants'

export const IconPicker = ({ onIconSelect }) => {
  const [selectedIcon, setSelectedIcon] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (icon) => {
    setSelectedIcon(icon)
    onIconSelect('icon', icon.value) // Enviar el valor al servidor o al componente padre
    setIsOpen(false) // Cerrar el popover
  }

  return (
    <div className="flex flex-col items-center w-full">
      <Popover className="w-full" placement="bottom" open={isOpen} handler={() => setIsOpen(!isOpen)}>
        <PopoverHandler>
          <Button variant="outlined" className="w-full px-[12px] py-[10px] h-10">
            {selectedIcon ? (
              <div className="flex items-center gap-2">
                <selectedIcon.icon className="size-5" /> {selectedIcon.value.replace(/Icon$/, '')}
              </div>
            ) : (
              'Select an Icon'
            )}
          </Button>
        </PopoverHandler>
        <PopoverContent className="flex flex-wrap gap-2 p-4 max-w-xs">
          {ICONS_OPTIONS.map((icon) => (
            <div
              key={icon.value}
              className="cursor-pointer flex items-center gap-2 p-2 rounded hover:bg-gray-100"
              onClick={() => handleSelect(icon)}
            >
              <icon.icon className="size-5" />
            </div>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  )
}
