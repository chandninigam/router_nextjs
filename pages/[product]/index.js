import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  const product = router.query.product;
  return <div>Product page{product}</div>;
}
