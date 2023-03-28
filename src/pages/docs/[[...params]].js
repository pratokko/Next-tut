import { useRouter } from "next/router";

const Doc = () => {
  const router = useRouter();
  const { params = [] } = router.query;

  console.log(params);

  if (params.length === 2) {
    return (
      <h2>
        viewing docs for feature of {params[0]} and concept {params[1]}
      </h2>
    );
  } else if (params.length === 1) {
    return <h1>viewing docs for features {params[0]}</h1>;
  }

  return <h2>Docs home page</h2>;
};
export default Doc;
