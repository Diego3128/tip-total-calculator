import type { MenuItem, OrderItem, TipOptions } from "../types";

export type OrderActions =
  | {
      type: "add-item";
      payload: { item: MenuItem };
    }
  | {
      type: "remove-item";
      payload: { itemId: OrderItem["id"] };
    }
  | {
      type: "set-tip";
      payload: { tipValue: TipOptions["value"] };
    }
  | {
      type: "place-order";
    };

type InitialStateType = {
  orderItems: OrderItem[];
  tip: number;
};

export const initialState: InitialStateType = {
  orderItems: [],
  tip: 0,
};

export const orderReducer = (state: InitialStateType, action: OrderActions) => {
  switch (action.type) {
    case "add-item": {
      let updatedOrderItems: OrderItem[] = [];

      const exists = state.orderItems.find(
        (orderItem) => orderItem.id === action.payload.item.id
      );

      if (!exists) {
        const newOrderItem: OrderItem = { ...action.payload.item, quantity: 1 };
        updatedOrderItems = [...state.orderItems, newOrderItem];
      } else {
        updatedOrderItems = state.orderItems.map((orderItem) => {
          return orderItem.id === action.payload.item.id
            ? {
                ...orderItem,
                quantity: orderItem.quantity + 1,
              }
            : orderItem;
        });
      }

      return {
        ...state,
        orderItems: updatedOrderItems,
      };
    }

    case "remove-item": {
      let updatedState: OrderItem[] = [];
      const itemId = action.payload.itemId;

      updatedState = state.orderItems.filter(
        (orderItem) => orderItem.id !== itemId
      );

      return {
        ...state,
        orderItems: updatedState,
      };
    }

    case "set-tip": {
      return {
        ...state,
        tip: action.payload.tipValue,
      };
    }

    case "place-order": {
      return {
        ...state,
        orderItems: [],
        tip: 0,
      };
    }

    default:
      return state;
  }
};
