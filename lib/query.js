import { gql } from "@apollo/client";
export const COLLECTIONS_HANDLES = gql`
  query collections_handles($first: Int!, $after: String) {
    collections(first: $first, after: $after) {
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node {
          handle
        }
      }
    }
  }
`;
export const COLLECTIONS_BY_HANDLE = gql`
  query collections_by_handle($handle: String!, $first: Int!) {
    collectionByHandle(handle: $handle) {
      handle
      id
      title
      products(first: $first) {
        pageInfo {
          hasNextPage
        }
        edges {
          cursor
          node {
            id
            tags
            title
            availableForSale
            description
            productType
            vendor
            images(first: 2) {
              edges {
                node {
                  altText
                  originalSrc
                }
              }
            }
            options(first: 10) {
              id
              name
              values
            }
            variants(first: 1) {
              edges {
                node {
                  compareAtPrice
                  price
                }
              }
            }
          }
        }
      }
    }
  }
`;
