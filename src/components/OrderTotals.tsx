import { useMemo } from "react"
import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export default function OrderTotals({ order, tip, placeOrder }: OrderTotalsProps) {

    const subtotalAmount = useMemo(() => order.reduce((total, item) =>
        total + (item.quantity * item.price), 0), [ order ])

    const tipAmount = useMemo(() => (subtotalAmount * tip), [ tip, order ])

    const totalAmount = useMemo(() => (subtotalAmount + tipAmount), [ tip, order ])

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propina:
                </h2>

                <p>Subtotal a pagar: { }
                    <span className="font-bold text-teal-600">{formatCurrency(subtotalAmount)}</span>
                </p>

                <p>Propina: { }
                    <span className="font-bold text-teal-600">{formatCurrency(tipAmount)}</span>
                </p>

                <p className="font-bold">Total a pagar: { }
                    <span className="font-bold text-teal-600">{formatCurrency(totalAmount)}</span>
                </p>
            </div>

            <button
                className="w-full bg-black  hover:bg-gray-800 p-3 uppercase  text-white font-bold mt-10 rounded-lg disabled:opacity-20 disabled:hover:bg-black"
                disabled={totalAmount === 0}
                onClick={() => placeOrder()}
            >
                Guardar Orden
            </button>

        </>
    )
}
