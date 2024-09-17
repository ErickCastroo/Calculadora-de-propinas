import { useMemo } from "react"
import { OrderItem } from "../../Types"
import { formatCurrency } from "../../helpers"

type OrderTotalProps = {
  order: OrderItem[]
  tip: number
  placeOrder: () => void
}


function OrderTotal({ order, tip, placeOrder }: OrderTotalProps) {
  const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0 ),[order])

  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])

  const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order])

  return (
    <>
      <div className="space-y-3">
        <h2 className=" font-black text-2xl">Totales y propina: </h2>
        <p className="">subtotal a pagar: {''}
          <span className="font-black">{formatCurrency(subtotalAmount)}</span>
        </p>
        <p className="">Propina: {''}
          <span className="font-black">{formatCurrency(tipAmount)}</span>
        </p>
        <p className="">Total a pagar: {''}
          <span className="font-black">{formatCurrency(totalAmount)}</span>
        </p>
      </div>

      <button
        className="w-full bg-black p-3 text-white font-bold mt-10 disabled:opacity-0"
        disabled={totalAmount === 0}
        onClick={placeOrder}
      >
        Guardar Orden
      </button>
    </>
  )

  
}

export  { OrderTotal }