import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsApi, Product, restaurantsApi, Restaurant, surplusPacksApi, SurplusPack } from "../api/savierApi";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { Package, Utensils } from "lucide-react";

export default function RestaurantDetailsPage() {
    const { id } = useParams<{ id: string }>();
    const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
    const [products, setProducts] = useState<Product[]>([]);
    const [surplusPacks, setSurplusPacks] = useState<SurplusPack[]>([]);
    const [loading, setLoading] = useState(true);
    const { addItem } = useCart();

    useEffect(() => {
        if (!id) return;

        setLoading(true);
        // Fetch Restaurant, Products, AND Available Surplus Packs
        Promise.all([
            restaurantsApi.getById(id),
            productsApi.getByRestaurant(id),
            surplusPacksApi.getAvailable()
        ])
            .then(([rest, prod, packs]) => {
                setRestaurant(rest);
                setProducts(prod);
                // Filter surplus packs for this restaurant (using RestaurantId from DTO)
                const relevantPacks = packs.filter(p => p.restaurantId === id);
                setSurplusPacks(relevantPacks);
            })
            .catch((err) => {
                console.error(err);
                toast.error("Error al cargar datos del restaurante");
            })
            .finally(() => setLoading(false));
    }, [id]);

    const handleAddToCart = (item: Product | SurplusPack, type: 'product' | 'surplusPack') => {
        const price = 'price' in item ? item.price : item.offerPrice;
        const name = 'name' in item ? item.name : item.name;

        addItem({
            id: item.id.toString(),
            name: name,
            price: price,
            quantity: 1,
            type: type,
            sourceId: id || 'unknown'
        });
        toast.success(`${name} agregado al carrito`);
    };

    if (loading) return <div className="p-8 text-center text-white">Cargando...</div>;
    if (!restaurant) return <div className="p-8 text-center text-white">Restaurante no encontrado</div>;

    return (
        <>
            <Helmet>
                <title>{restaurant.commercialName} | SAVIER</title>
            </Helmet>

            {/* Header del Restaurante */}
            <div className="relative h-[40vh] w-full">
                <div className="absolute inset-0 bg-black/50 z-10" />
                {restaurant.imageUrl ? (
                    <img src={restaurant.imageUrl} alt={restaurant.commercialName} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full bg-gray-600" />
                )}
                <div className="absolute bottom-0 left-0 p-8 z-20 text-white container mx-auto">
                    <h1 className="text-5xl font-heading font-black mb-2">{restaurant.commercialName}</h1>
                    <p className="text-xl max-w-2xl text-white/90">{restaurant.description}</p>
                    <div className="flex gap-4 mt-4 text-sm opacity-80">
                        <span>📍 {restaurant.address || "Dirección no disponible"}</span>
                        <span>📞 {restaurant.phone || "Teléfono no disponible"}</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 min-h-screen">

                {/* Surplus Packs Section */}
                <div className="mb-12">
                    <h2 className="text-3xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                        <Package className="h-8 w-8 text-savier-orange" />
                        Surplus Packs (Sorpresa)
                    </h2>
                    {surplusPacks.length === 0 ? (
                        <div className="bg-white/10 rounded-lg p-6 text-white text-center">
                            No hay packs sorpresa disponibles en este momento.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {surplusPacks.map(pack => (
                                <Card key={pack.id} className="bg-white/95 border-2 border-savier-orange/50 shadow-lg overflow-hidden flex flex-col relative">
                                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                        {Math.round(100 - (pack.offerPrice / pack.originalPrice * 100))}% OFF
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="text-xl font-bold text-savier-deep-black">{pack.name}</CardTitle>
                                        <p className="text-sm text-gray-500">{pack.description}</p>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <div className="flex items-end gap-2 mb-2">
                                            <span className="text-2xl font-bold text-savier-orange">${pack.offerPrice.toLocaleString()}</span>
                                            <span className="text-sm text-gray-400 line-through mb-1">${pack.originalPrice.toLocaleString()}</span>
                                        </div>
                                        <p className="text-xs text-gray-500">Disponible: {new Date(pack.pickupStartTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {new Date(pack.pickupEndTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                        <p className="text-xs text-gray-500">Stock: {pack.stock}</p>
                                    </CardContent>
                                    <CardFooter>
                                        <Button
                                            className="w-full bg-savier-orange hover:bg-savier-orange/90 text-white font-bold"
                                            onClick={() => handleAddToCart(pack, 'surplusPack')}
                                            disabled={pack.stock <= 0}
                                        >
                                            {pack.stock > 0 ? "Rescatar Pack" : "Agotado"}
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>

                {/* Regular Menu Section */}
                <div>
                    <h2 className="text-3xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                        <Utensils className="h-8 w-8" />
                        Menú Regular
                    </h2>
                    {products.length === 0 ? (
                        <p className="text-white text-center text-xl">No hay productos disponibles por el momento.</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {products.map((p) => (
                                <Card key={p.id} className="bg-white/95 border-none shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                                    <CardHeader>
                                        <CardTitle className="text-lg font-bold text-savier-deep-black">{p.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-2xl font-bold text-savier-dark-green">${p.price.toLocaleString()}</p>
                                    </CardContent>
                                    <CardFooter>
                                        <Button
                                            onClick={() => handleAddToCart(p, 'product')}
                                            className="w-full bg-savier-dark-green hover:bg-savier-dark-green/90 text-white font-bold"
                                        >
                                            Agregar al Menú
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
