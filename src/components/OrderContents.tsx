import { Dispatch } from "react";
import { formatCurrency } from "../helpers";
import { OrderItem } from "../types";
import { OrderActions } from "../reducers/order-reducer";

type OrderContentProps = {
	order: OrderItem[];
	dispatch: Dispatch<OrderActions>;
};

export default function OrderContents({ order, dispatch }: OrderContentProps) {
	return (
		<>
			<div className="space-y-3 mt-10">
				{order.map((item) => (
					<div
						key={item.id}
						className="flex justify-between border-t border-gray-300 items-center py-2 last-of-type:border-b"
					>
						<div>
							<p className="text-lg">
								{item.name} - {formatCurrency(item.price)}
							</p>

							<p className="font-black">
								Cantidad: <span className="text-teal-600">{item.quantity}</span>{" "}
								- Subtotal:{" "}
								<span className="text-teal-600">
									{formatCurrency(item.price * item.quantity)}
								</span>
							</p>
						</div>

						<button
							className="bg-red-600 h-8 w-8 rounded-full text-white font-black hover:bg-red-800 m-1"
							onClick={() =>
								dispatch({ type: "remove-item", payload: { id: item.id } })
							}
						>
							X
						</button>
					</div>
				))}
			</div>
		</>
	);
}

console.log(OrderContents);
