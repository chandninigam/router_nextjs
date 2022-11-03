import { useRouter } from "next/router";

//  Scenario 6 in which (add multiple path by the help of \)
export default function Docs() {
  const router = useRouter();
  const { params = [] } = router.query;
  if (params.length === 2) {
    return (
      <h1>
        Viewing one--{params[0]} page two --{params[1]}
      </h1>
    );
  } else if (params.length === 1) {
    return <h1>Viewing one {params[0]} page</h1>;
  }
  return <h1>View {params} page</h1>;
}
