// rafc -> para crear como arrow functions con la extensión de ES7 + React/Redux
// rfc -> para crear componentes como funciones con la extensión ES7 + React/Redux
import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem
}

export default function MenuItem({item}: MenuItemProps) {
  return (
    <button
    
      className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex jusitfy-between"

    >


    
    <p>{item.name}</p>
    <p className="font-black">${item.price}</p>
    
    </button>
  )
}
