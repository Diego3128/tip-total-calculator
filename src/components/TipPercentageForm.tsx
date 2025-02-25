import type { Dispatch } from "react"
import { tipOptions } from "../data/tipOptions"
import type { OrderActions } from '../reducers/orderReducer';

type TipPercentageFormProps = {
    orderDispatch: Dispatch<OrderActions>
    tip: number
}

export function TipPercentageForm({ orderDispatch, tip }: TipPercentageFormProps) {
    return (
        <div className="bg-gray-800 p-4 rounded-xl shadow-md mt-4">
            <h2 className="font-black text-2xl text-gray-300 border-b border-gray-700 pb-2 mb-4">Tip </h2>
            <form className="flex justify-center gap-6 items-center mb-3.5">
                {tipOptions.map((tipOption) => (
                    <div
                        key={tipOption.id}
                        className="flex items-center gap-2 p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors cursor-pointer"
                    >
                        <input
                            type="radio"
                            name="tip"
                            className="hidden"
                            id={tipOption.id}
                            value={tipOption.value}
                            onChange={() => orderDispatch({type: "set-tip", payload: {tipValue: tipOption.value}})}
                            checked={tipOption.value === tip}
                        />
                        <label
                            htmlFor={tipOption.id}
                            className={`text-xl font-bold text-gray-100 transition-colors cursor-pointer ${tipOption.value === tip ? "text-green-600" : ""}`}
                        >
                            {tipOption.label}
                        </label>
                    </div>
                ))}
            </form>
        </div>
    );
}
