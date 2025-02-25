import { Dispatch } from "react";
import type { MenuItem } from "../types";
import { OrderActions } from "../reducers/orderReducer";

type MenuItemProps = {
  item: MenuItem;
  orderDispatch: Dispatch<OrderActions>;
};

export function MenuItem({ item, orderDispatch }: MenuItemProps) {
  return (
    <button
      onClick={() => orderDispatch({ type: "add-item", payload: { item } })}
      className="border-2 w-full p-4 rounded-lg bg-gray-800 border-gray-700 hover:bg-gray-600 transition-colors duration-300 flex justify-between items-center cursor-pointer shadow-md"
    >
      <p className="text-white font-semibold lg:text-lg">{item.name}</p>
      <p className="text-gray-400 text-xl lg:text-2xl font-bold">
        ${item.price}
      </p>
    </button>
  );
}
