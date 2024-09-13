import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])
    
    const addItem = (item : MenuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if(itemExist) {
            //Se tiene que utilizar MAP para no mutar el arreglo, principio básico de react
            //Aquí es para saber cual elemento por medio de ID's
            // console.log("El item ya existe, sumar + 1")
            const updatedOrder = order.map( orderItem => orderItem.id === item.id ?
                 {...orderItem, quantity: orderItem.quantity + 1 } :
                  orderItem
                )
                setOrder(updatedOrder)
        } else {
            const newItem : OrderItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
        
    }

    console.log(order)

    return {
        order,
        addItem
    }
}