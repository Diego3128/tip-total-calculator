import { menuItems } from './data/db';
import { useOrder } from './hooks/useOrder';
import { MenuItem } from './components/MenuItem';
import OrderContent from './components/OrderContent';
import OrderTotal from './components/OrderTotal';
import { TipPercentageForm } from './components/TipPercentageForm';

function App() {

  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder();

  return (
    <>
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 py-8 shadow-md">
        <h1 className="text-center text-4xl font-extrabold text-white tracking-wide">
          Total <span className="text-sky-400">&</span> Tip Calculator
        </h1>
      </header>

      <main className="mx-auto max-w-7xl mt-10 p-6 px-6 grid md:grid-cols-2 gap-6 md:gap-14">
        <div className="relative min-h-72 bg-gray-800 p-5 rounded-xl shadow-lg">
          {order.length ? (
            <>
              <OrderContent order={order} removeItem={removeItem} />

              <TipPercentageForm setTip={setTip} tip={tip} />

              <OrderTotal order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) : (
            <p className="text-gray-400 text-center absolute inset-0 flex items-center justify-center text-2xl h-60 md:h-auto">
              Empty order
            </p>
          )}
        </div>

        <div>
          <h2 className="mb-7 mt-5 text-white font-extrabold text-4xl border-b-2 border-gray-600 pb-2">
            Menu
          </h2>
          <div className="space-y-4 p-5 bg-gray-800 rounded-xl max-h-[70dvh] overflow-y-auto shadow-lg">
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default App
