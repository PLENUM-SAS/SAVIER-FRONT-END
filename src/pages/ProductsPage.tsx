import { useEffect, useState } from "react";
import { productsApi, Product } from "../api/savierApi";

export default function ProductsPage() {
  const [items, setItems] = useState<Product[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    productsApi
      .list()
      .then(setItems)
      .catch((e: unknown) => setError(e instanceof Error ? e.message : String(e)));
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {items.map((p) => (
        <li key={p.id}>{p.name} - ${p.price}</li>
      ))}
    </ul>
  );
}
