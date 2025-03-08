import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import { Button } from "src/components/ui/button"
import { useCart } from "src/context/CartContext"

export default function CartDropdown() {
    const { cart } = useCart()
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0)
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)

    return (
        <div className="absolute right-0 top-16 w-80 rounded-lg border border-gray-200 bg-white p-4 shadow-lg transition-opacity duration-200 z-50">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <h3 className="text-sm font-medium text-gray-900">Shopping Cart</h3>
                <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">
          {totalItems} {totalItems === 1 ? "item" : "items"}
        </span>
            </div>

            <div className="max-h-[300px] overflow-y-auto py-2">
                {cart.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-6">
                        <ShoppingBag className="h-12 w-12 text-gray-300" />
                        <p className="mt-2 text-sm text-gray-500">Your cart is empty</p>
                    </div>
                ) : (
                    <ul className="divide-y divide-gray-100">
                        {cart.map((item) => (
                            <li key={item.id} className="flex py-3">
                                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                        src={item.image || "/placeholder.svg?height=64&width=64"}
                                        alt={item.name}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="ml-3 flex flex-1 flex-col">
                                    <div className="flex justify-between text-sm font-medium text-gray-900">
                                        <h3 className="line-clamp-1">{item.name}</h3>
                                        <p className="ml-1">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                    <div className="flex items-end justify-between text-xs">
                                        <p className="text-gray-500">Qty {item.quantity}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {cart.length > 0 && (
                <div className="border-t border-gray-100 pt-3">
                    <div className="flex justify-between text-sm font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${subtotal.toFixed(2)}</p>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">Shipping and taxes calculated at checkout</p>
                </div>
            )}

            <div className="mt-4">
                <Button asChild className="w-full bg-black text-white hover:bg-gray-900 border-black shadow-md">
                    <Link to="/cart">{cart.length === 0 ? "Browse Products" : "View Cart"}</Link>
                </Button>
            </div>
        </div>
    )
}

