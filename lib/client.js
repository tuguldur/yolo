import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

function createApolloClient() {
  const uri = `https://${process.env.NEXT_PUBLIC_SHOPIFY_SITE}.myshopify.com/api/${process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION}/graphql.json`;
  return new ApolloClient({
    uri,
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri,
      headers: {
        "X-Shopify-Storefront-Access-Token":
          process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      },
    }),
    headers: {
      "X-Shopify-Storefront-Access-Token":
        process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    },
    cache: new InMemoryCache(),
  });
}

export default createApolloClient;
