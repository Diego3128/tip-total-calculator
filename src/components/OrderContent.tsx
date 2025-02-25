import type { OrderItem } from "../types";
import { formatCurrency } from "../helpers";
import { Dispatch } from "react";
import type { OrderActions } from "../reducers/orderReducer";

type OrderContentProps = {
  orderItems: OrderItem[];
  orderDispatch: Dispatch<OrderActions>;
};

export default function OrderContent({
  orderItems,
  orderDispatch,
}: OrderContentProps) {
  return (
    <div>
      <h2 className="mb-7 text-white font-extrabold text-4xl border-b-2 border-gray-600 pb-2">
        Total and Details
      </h2>
      <div className="space-y-3 mt-10 bg-gray-900  p-6 rounded-lg shadow-lg min-h-52 max-h-80 overflow-y-auto relative">
        {orderItems.length > 0
          ? orderItems.map((orderItem) => (
              <div
                key={orderItem.id}
                className="flex justify-between items-center gap-2 p-4 bg-gray-700 rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                <div className="flex-1">
                  <p className="text-lg font-semibold lg:text-[19px]">
                    {orderItem.name}
                  </p>

                  <div className="flex gap-2 flex-wrap">
                    <p className="text-gray-400 font-semibold">
                      {formatCurrency(orderItem.price)} |
                    </p>
                    <p className="text-gray-400 font-semibold">
                      Quantity: {orderItem.quantity} |
                    </p>
                    <p className="font-bold lg:text-[17px] text-green-600">
                      {formatCurrency(orderItem.quantity * orderItem.price)}
                    </p>
                  </div>
                </div>

                <button
                  className="text-red-500 hover:text-red-400 hover:cursor-pointer transition-colors duration-200"
                  onClick={() =>
                    orderDispatch({
                      type: "remove-item",
                      payload: { itemId: orderItem.id },
                    })
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}
