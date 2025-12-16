import { useEffect, useState } from "react";
import { ordersApi, Order } from "../api/savierApi";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";

export default function MyOrdersPage() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();

    useEffect(() => {
        if (user) {
            ordersApi.getMyOrders()
                .then(setOrders)
                .catch(console.error)
                .finally(() => setLoading(false));
        }
    }, [user]);

    if (loading) return <div className="p-8 text-center text-white">Cargando pedidos...</div>;

    return (
        <>
            <Helmet>
                <title>Mis Pedidos | SAVIER</title>
            </Helmet>
            <div className="container mx-auto px-4 py-24 min-h-screen">
                <h1 className="text-4xl font-heading font-bold text-white mb-8">Mis Pedidos</h1>

                {orders.length === 0 ? (
                    <p className="text-white text-center">No has realizado pedidos aún.</p>
                ) : (
                    <div className="grid gap-6">
                        {orders.map((order) => (
                            <Card key={order.id} className="bg-white/95">
                                <CardHeader>
                                    <div className="flex justify-between items-center">
                                        <CardTitle>Pedido #{order.id.slice(0, 8)}</CardTitle>
                                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${order.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                            {order.status}
                                        </span>
                                    </div>
                                    <CardDescription>
                                        Fecha: {new Date(order.createdAt).toLocaleDateString()}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        {order.items.map((item, idx) => (
                                            <div key={idx} className="flex justify-between text-sm">
                                                <span>{item.quantity}x {item.productName}</span>
                                                <span>${(item.unitPrice * item.quantity).toLocaleString()}</span>
                                            </div>
                                        ))}
                                        <div className="border-t pt-2 flex justify-between font-bold text-lg mt-2">
                                            <span>Total</span>
                                            <span>${order.totalAmount.toLocaleString()}</span>
                                        </div>
                                        {order.pickupCode ? (
                                            <div className="mt-4 p-4 bg-gray-100 rounded-lg text-center">
                                                <p className="text-sm text-gray-500">Código de Recogida</p>
                                                <p className="text-3xl font-mono font-bold tracking-widest">{order.pickupCode}</p>
                                            </div>
                                        ) : null}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
