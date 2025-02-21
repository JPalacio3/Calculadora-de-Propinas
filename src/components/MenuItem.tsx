import { Dispatch } from "react";
import { formatCurrency } from "../helpers";
import type { MenuItem } from "../types";
import { OrderActions } from "../reducers/order-reducer";

type MenuItemProps = {
	item: MenuItem;
	dispatch: Dispatch<OrderActions>;
};

export default function MenuItem({ item, dispatch }: MenuItemProps) {
	return (
		<button
			className="border-2 border-teal-400 w-full p-2 flex justify-between hover:bg-teal-100"
			onClick={() => dispatch({ type: "add-item", payload: { item } })}
		>
			<p>{item.name}</p>
			<p className="font-bold">{formatCurrency(item.price)}</p>
		</button>
	);
}
