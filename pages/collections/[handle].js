import { initializeApollo } from "@lib/apollo";
import { COLLECTIONS_HANDLES, COLLECTIONS_BY_HANDLE } from "@lib/query";
const client = initializeApollo();

export const getStaticPaths = async () => {
  // add bulk operations
  const { data } = await client.query({
    query: COLLECTIONS_HANDLES,
    variables: {
      first: 250,
    },
  });
  const paths = data.collections.edges.map(
    ({ node }) => `/collections/${node.handle}`
  );
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: COLLECTIONS_BY_HANDLE,
    variables: {
      handle: params.handle,
      first: 250,
    },
  });
  const { edges } = data.collectionByHandle.products;
  return {
    props: { ...edges },
    revalidate: 10, // In seconds
  };
}

const CollectionPage = (props) => <div>{JSON.stringify(props)}</div>;
export default CollectionPage;
