import { Dispatch, useMemo } from "react";
import type { OrderItem, TipOptions } from "../types";
import { formatCurrency } from "../helpers";
import type { OrderActions } from "../reducers/orderReducer";

type OrderTotalProps = {
  orderItems: OrderItem[];
  tip: TipOptions["value"];
  orderDispatch: Dispatch<OrderActions>;
};

export default function OrderTotal({
  orderItems,
  tip,
  orderDispatch,
}: OrderTotalProps) {
  // derived states
  const subtotal = useMemo(() => {
    return orderItems.reduce(
      (accumulator, orderItem) =>
        accumulator + orderItem.quantity * orderItem.price,
      0
    );
  }, [orderItems]);

  const tipAmount = useMemo(() => subtotal * tip, [orderItems, tip]);
  const totalAmount = useMemo(() => subtotal + tipAmount, [orderItems, tip]);

  return (
    <>
      <div className="space-y-3 p-4 bg-gray-800 rounded-xl shadow-md mt-4">
        <h2 className="font-black text-2xl text-gray-300 border-b border-gray-700 pb-2 mb-4">
          Total and Tips
        </h2>
        <p className="capitalize text-gray-300 text-lg">
          Subtotal:{" "}
          <span className="font-black text-white">
            {formatCurrency(subtotal)}
          </span>
        </p>
        <p className="capitalize text-gray-300 text-lg">
          Tip:{" "}
          <span className="font-black text-white">
            {formatCurrency(tipAmount)}
          </span>
        </p>
        <p className="capitalize text-gray-300 text-lg">
          Total:{" "}
          <span className="font-black text-green-600">
            {formatCurrency(totalAmount)}
          </span>
        </p>
      </div>

      <button
        className="bg-blue-700 hover:bg-blue-600 text-center mx-auto block mt-4 text-2xl px-5 py-3 rounded-lg font-black w-full uppercase text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={totalAmount === 0}
        onClick={() => orderDispatch({ type: "place-order" })}
      >
        Save Order
      </button>
    </>
  );
}
