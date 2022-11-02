import { useRouter } from "next/router";

export default function ReviewId() {
  const router = useRouter();
  const reviewId = router.query.review;
  return <div>Review Id {reviewId}</div>;
}
