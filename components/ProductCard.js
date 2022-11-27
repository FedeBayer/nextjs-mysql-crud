import Link from "next/link";
export function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="border border-gray-200 shadow-md p-6">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
    </Link>
  );
}
