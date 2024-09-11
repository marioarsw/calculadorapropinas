// rafc -> para crear como arrow functions con la extensión de ES7 + React/Redux
// rfc -> para crear componentes como funciones con la extensión ES7 + React/Redux
import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem,
  addItem: (item: MenuItem) => void
}

export default function MenuItem({item, addItem}: MenuItemProps) {
  return (
    <button
      className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex jusitfy-between w-full"
      onClick={() => addItem(item)}
    >

    <p>{item.name}</p>
    <span style={{ marginRight: '10px' }}></span> {/* espacio entre elementos */}
    <p className="font-black">${item.price}</p>
    
    </button>
  )
}
