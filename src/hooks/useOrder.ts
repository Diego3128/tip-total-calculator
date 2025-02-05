import { useState } from "react"
import type {MenuItem, OrderItem} from '../types/index'

export function useOrder(){

    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0);

    const addItem = (item: MenuItem) =>{
        //check if a OrderItem already exists
        const exists:OrderItem|undefined = order.find(orderItem =>orderItem.id === item.id);

        if(!exists){
            const newItem: OrderItem = {...item, quantity: 1};
            setOrder([...order, newItem]);
        }else{
            //increase quantity
            const updatedOrder:OrderItem[] = order.map(orderItem=>{
                if(orderItem.id === item.id){
                    return {...orderItem, quantity: orderItem.quantity + 1};
                }else return orderItem
            });
            setOrder(updatedOrder);
        }
    }

    const removeItem = (itemId: MenuItem['id']) =>{
        const updatedOrder = order.filter(orderItem => orderItem.id !== itemId);
        setOrder(updatedOrder);
    }

    const placeOrder = () => {
        setOrder([]);
        setTip(0)
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