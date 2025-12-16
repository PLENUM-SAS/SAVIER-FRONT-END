import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Trash2 } from "lucide-react";
import { ordersApi } from "../api/savierApi";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

export default function CartPage() {
    const { items, removeItem, updateQuantity, total, clearCart } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleCheckout = async () => {
        if (!user) {
            toast.error("Debes iniciar sesión para realizar el pedido");
            navigate("/login");
            return;
        }

        setLoading(true);
        try {
            const payload = {
                items: items.map(i => ({
                    productId: i.type === 'product' ? i.id : undefined,
                    surplusPackId: i.type === 'surplusPack' ? i.id : undefined,
                    quantity: i.quantity
                }))
            };

            await ordersApi.create(payload);
            toast.success("¡Pedido realizado con éxito!");
            clearCart();
            navigate("/mis-pedidos");
        } catch (error) {
            console.error(error);
            toast.error("Error al procesar el pedido");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>Mi Carrito | SAVIER</title>
            </Helmet>
            <div className="container mx-auto px-4 py-24 min-h-screen">
                <h1 className="text-4xl font-heading font-bold text-white mb-8">Tu Carrito de Rescate</h1>

                {items.length === 0 ? (
                    <div className="text-center text-white py-12">
                        <p className="text-xl mb-4">Tu carrito está vacío.</p>
                        <Link to="/restaurantes">
                            <Button className="bg-savier-orange hover:bg-savier-orange/90 text-white">Explorar Restaurantes</Button>
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-4">
                            {items.map((item) => (
                                <div key={item.id} className="bg-white rounded-lg p-4 flex items-center justify-between shadow-md">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden">
                                            {/* Placeholder for now */}
                                            <div className="w-full h-full bg-gray-300" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">{item.name}</h3>
                                            <p className="text-gray-600">${item.price.toLocaleString()}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                                            <span className="w-8 text-center">{item.quantity}</span>
                                            <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                                        </div>
                                        <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700 hover:bg-red-50">
                                            <Trash2 className="h-5 w-5" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-md h-fit">
                            <h2 className="text-2xl font-bold mb-4">Resumen</h2>
                            <div className="flex justify-between mb-4 text-lg">
                                <span>Total estimado</span>
                                <span className="font-bold">${total.toLocaleString()}</span>
                            </div>
                            <Button
                                className="w-full bg-savier-dark-green hover:bg-savier-dark-green/90 text-white text-lg h-12"
                                onClick={handleCheckout}
                                disabled={loading}
                            >
                                {loading ? "Procesando..." : "Realizar Pedido"}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
