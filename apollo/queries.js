import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  {
    categories {
      name
    }
  }
`;

export const GET_ALL_CURRENCY = gql`
  {
    currencies {
      symbol
      label
    }
  }
`;

export const GET_SINGLE_CATEGORY = gql`
  query ($input: CategoryInput!) {
    category(input: $input) {
      name
      products {
        id
        name
        inStock
        gallery
        prices {
          currency {
            symbol
            label
          }
          amount
        }
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query ($id: String!) {
    product(id: $id) {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      brand
    }
  }
`;
