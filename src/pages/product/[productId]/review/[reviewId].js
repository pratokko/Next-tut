import { useRouter } from "next/router";

const ReviewId = () => {
  const router = useRouter();
  const { reviewId, productId } = router.query;
  return (
    <div>
      <h2>
        this is the review {reviewId} for product {productId}
      </h2>
    </div>
  );
};
export default ReviewId;
