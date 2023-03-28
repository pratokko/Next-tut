import { useRouter } from "next/router";
const ProductDetails = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <div>
      <h2>details about product {productId}</h2>
    </div>
  );
};
export default ProductDetails;
