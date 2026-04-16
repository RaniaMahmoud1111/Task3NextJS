async function getProduct(id) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function ProductDetails({ params }) {
  const product = await getProduct(params.id);

  return (
    <div className="container mt-4">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h4>${product.price}</h4>
    </div>
  );
}