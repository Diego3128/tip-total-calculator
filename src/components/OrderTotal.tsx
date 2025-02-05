import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers";

type OrderTotalProps = {
    order: OrderItem[]
    tip: number
    placeOrder: () => void
}

export default function OrderTotal({ order, tip, placeOrder }: OrderTotalProps) {
    // derived states
    const subtotal = useMemo(() => {
        return order.reduce((accumulator, orderItem) => accumulator + (orderItem.quantity * orderItem.price), 0);
    }, [order]);
    const tipAmount = useMemo(() => subtotal * tip, [tip, subtotal])
    const totalAmount = useMemo(() => subtotal + tipAmount, [subtotal, tipAmount]);


    return (
        <>
            <div className="space-y-3 p-4 bg-gray-800 rounded-xl shadow-md mt-4">
                <h2 className="font-black text-2xl text-gray-300 border-b border-gray-700 pb-2 mb-4">
                    Total and Tips
                </h2>
                <p className="capitalize text-gray-300 text-lg">
                    Subtotal: <span className="font-black text-white">{formatCurrency(subtotal)}</span>
                </p>
                <p className="capitalize text-gray-300 text-lg">
                    Tip: <span className="font-black text-white">{formatCurrency(tipAmount)}</span>
                </p>
                <p className="capitalize text-gray-300 text-lg">
                    Total: <span className="font-black text-green-600">{formatCurrency(totalAmount)}</span>
                </p>
            </div>

            <button
                className="bg-blue-700 hover:bg-blue-600 text-center mx-auto block mt-4 text-2xl px-5 py-3 rounded-lg font-black w-full uppercase text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={totalAmount === 0}
                onClick={placeOrder}
            >
                Save Order
            </button>
        </>
    );
}
