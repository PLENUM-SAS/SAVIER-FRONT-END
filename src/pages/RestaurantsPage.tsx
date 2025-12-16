import { useEffect, useState } from "react";
import { restaurantsApi, Restaurant } from "../api/savierApi";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

export default function RestaurantsPage() {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();

    useEffect(() => {
        restaurantsApi.getAll()
            .then(setRestaurants)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div className="p-8 text-center text-white">Cargando restaurantes...</div>;

    return (
        <>
            <Helmet>
                <title>Restaurantes | SAVIER</title>
            </Helmet>
            <div className="container mx-auto px-4 py-24 min-h-screen">
                {user && (
                    <div className="mb-8">
                        <h1 className="text-4xl font-heading font-bold text-white">
                            Hola, {user.email?.split('@')[0]}!
                        </h1>
                        <p className="text-white/80 text-xl mt-2">¿Qué vamos a rescatar hoy?</p>
                    </div>
                )}
                <h2 className="text-3xl font-heading font-bold text-white mb-8">Nuestros Aliados</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {restaurants.map((r) => (
                        <Card key={r.id} className="bg-white/95 border-none shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="h-48 bg-gray-200 overflow-hidden relative">
                                {r.imageUrl ? (
                                    <img src={r.imageUrl} alt={r.commercialName} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-500">
                                        {r.cuisineType || "Sin imagen"}
                                    </div>
                                )}
                            </div>
                            <CardHeader>
                                <CardTitle className="text-xl font-bold text-savier-deep-black">{r.commercialName}</CardTitle>
                                <CardDescription className="text-sm text-gray-600 line-clamp-2">{r.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex justify-between items-center text-sm text-gray-500">
                                    <span>{r.address || "Dirección no disponible"}</span>
                                    <span className="flex items-center gap-1">⭐ {r.averageRating?.toFixed(1) || "N/A"}</span>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Link to={`/restaurantes/${r.id}`} className="w-full">
                                    <Button className="w-full bg-savier-dark-green hover:bg-savier-dark-green/90 text-white">Ver Ofertas</Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
}
