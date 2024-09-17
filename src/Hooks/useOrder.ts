import { useState } from "react"
import type { MenuItem, OrderItem } from "../Types"

function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([])
  const [tip, setTip] = useState(0)

  const addItem = (item: MenuItem) => {
    const itemExist = order.find( orderItem => orderItem.id === item.id)

    if(itemExist) {
      const updateOrder = order.map(orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem)
      setOrder(updateOrder)
    }
    else{
      const newItem : OrderItem = {...item, quantity: 1}
      setOrder([...order, newItem])
    }
  }

  const placeOrder = () => {
    setOrder([])
    setTip(0)
  }

  const removeItem = (id: MenuItem['id']) =>{
    setOrder(order.filter( item => item.id !== id))
  }

  return {
    order,
    tip, 
    setTip,
    addItem,
    removeItem,
    placeOrder
  }
}

export { useOrder }