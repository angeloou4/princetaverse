/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBookmark = /* GraphQL */ `
  mutation CreateBookmark(
    $input: CreateBookmarkInput!
    $condition: ModelBookmarkConditionInput
  ) {
    createBookmark(input: $input, condition: $condition) {
      id
      user {
        id
        firstName
        lastName
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      asset {
        id
        name
        price
        owner
        address
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      bookmarkUserId
      bookmarkAssetId
    }
  }
`;
export const updateBookmark = /* GraphQL */ `
  mutation UpdateBookmark(
    $input: UpdateBookmarkInput!
    $condition: ModelBookmarkConditionInput
  ) {
    updateBookmark(input: $input, condition: $condition) {
      id
      user {
        id
        firstName
        lastName
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      asset {
        id
        name
        price
        owner
        address
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      bookmarkUserId
      bookmarkAssetId
    }
  }
`;
export const deleteBookmark = /* GraphQL */ `
  mutation DeleteBookmark(
    $input: DeleteBookmarkInput!
    $condition: ModelBookmarkConditionInput
  ) {
    deleteBookmark(input: $input, condition: $condition) {
      id
      user {
        id
        firstName
        lastName
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      asset {
        id
        name
        price
        owner
        address
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      bookmarkUserId
      bookmarkAssetId
    }
  }
`;
export const createTransaction = /* GraphQL */ `
  mutation CreateTransaction(
    $input: CreateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    createTransaction(input: $input, condition: $condition) {
      id
      seller {
        id
        firstName
        lastName
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      buyer {
        id
        firstName
        lastName
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      asset {
        id
        name
        price
        owner
        address
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      amount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      transactionSellerId
      transactionBuyerId
      transactionAssetId
    }
  }
`;
export const updateTransaction = /* GraphQL */ `
  mutation UpdateTransaction(
    $input: UpdateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    updateTransaction(input: $input, condition: $condition) {
      id
      seller {
        id
        firstName
        lastName
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      buyer {
        id
        firstName
        lastName
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      asset {
        id
        name
        price
        owner
        address
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      amount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      transactionSellerId
      transactionBuyerId
      transactionAssetId
    }
  }
`;
export const deleteTransaction = /* GraphQL */ `
  mutation DeleteTransaction(
    $input: DeleteTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    deleteTransaction(input: $input, condition: $condition) {
      id
      seller {
        id
        firstName
        lastName
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      buyer {
        id
        firstName
        lastName
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      asset {
        id
        name
        price
        owner
        address
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      amount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      transactionSellerId
      transactionBuyerId
      transactionAssetId
    }
  }
`;
export const createNFT = /* GraphQL */ `
  mutation CreateNFT(
    $input: CreateNFTInput!
    $condition: ModelNFTConditionInput
  ) {
    createNFT(input: $input, condition: $condition) {
      id
      name
      price
      owner
      address
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateNFT = /* GraphQL */ `
  mutation UpdateNFT(
    $input: UpdateNFTInput!
    $condition: ModelNFTConditionInput
  ) {
    updateNFT(input: $input, condition: $condition) {
      id
      name
      price
      owner
      address
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteNFT = /* GraphQL */ `
  mutation DeleteNFT(
    $input: DeleteNFTInput!
    $condition: ModelNFTConditionInput
  ) {
    deleteNFT(input: $input, condition: $condition) {
      id
      name
      price
      owner
      address
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
