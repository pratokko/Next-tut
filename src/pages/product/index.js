import Link from "next/link";

const ProductList = ({ productId = 100 }) => {
  return (
    <>
      <h1>
        <Link href="/product/1">Product 1</Link>
      </h1>
      <h1>
        <Link href="/product/2">Product 2</Link>
      </h1>
      <h1>
        <Link href="/product/3">Product 3</Link>
      </h1>

      <h1>
        <Link href={`/product/${productId}`}>product {productId}</Link>
      </h1>
      <Link href="/">Home</Link>
    </>
  );
};
export default ProductList;
