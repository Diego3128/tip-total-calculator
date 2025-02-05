import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
    addItem: (item: MenuItem) => void
}

export function MenuItem({ item, addItem }: MenuItemProps) {
    return (
        <button
            onClick={() => addItem(item)}
            className="border-2 w-full p-4 rounded-lg bg-gray-800 border-gray-700 hover:bg-gray-600 transition-colors duration-300 flex justify-between items-center cursor-pointer shadow-md"
        >
            <p className="text-white font-semibold lg:text-lg">{item.name}</p>
            <p className="text-gray-400 text-xl lg:text-2xl font-bold">${item.price}</p>
        </button>
    );
}
