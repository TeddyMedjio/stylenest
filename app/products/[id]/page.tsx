async function getProductById(productId: string) {
  const response = await fetch(
    `http://localhost:3000/api/products/${productId}`,
    {
      method: "GET",
    }
  );

  return response.json();
}

export default async function ProductID({ params }: any) {
  const { product } = await getProductById(params.id);

  console.log(product);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.slug}</p>
    </div>
  );
}
