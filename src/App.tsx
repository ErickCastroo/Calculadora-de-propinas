import { MenuItems } from "./components/MenuItem"
import { menuItems } from "./data/data"
import { useOrder } from "./Hooks/useOrder"
import { Order } from './components/Order'
import { OrderTotal } from "./components/OrderTotal"
import { Tips } from './components/TipsPercentageForm'
function App() {

  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder()

  return (
    <>
      <header>
        <h1 className="bg-teal-400 py-5 text-center text-4xl font-black">Calculadora de propinas & consumo</h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className=" text-4xl font-black">Menú</h2>
          <div className="space-y-3">
            {
              menuItems.map(item => (
                <MenuItems
                  key={item.id}
                  item={item}
                  addItem={addItem}
                />
              ))
            }
          </div>
        </div>

        <div className=" border border-dashed  border-slate-300 p-5 rounded-lg space-y-10">
          {order.length > 0 ? (
            <>
              <Order
                order={order}
                removeItem={removeItem}
              />
              <Tips
                setTip={setTip}
                tip={tip}
              />

              <OrderTotal
                order={order}
                tip={tip}
                placeOrder={placeOrder}
              />
            </>
          ) : (
            <p>No hay elementos en la orden</p>
          )
          }
        </div>
      </main>
    </>
  )
}

export default App