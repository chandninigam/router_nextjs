import { useRouter } from "next/router";

export default function Blog() {
  const router = useRouter();
  const blogTitle = router.query.slug;
  return <h1>Blog Title: {blogTitle}</h1>;
}
