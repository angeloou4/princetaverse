/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBookmark = /* GraphQL */ `
  subscription OnCreateBookmark {
    onCreateBookmark {
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
export const onUpdateBookmark = /* GraphQL */ `
  subscription OnUpdateBookmark {
    onUpdateBookmark {
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
export const onDeleteBookmark = /* GraphQL */ `
  subscription OnDeleteBookmark {
    onDeleteBookmark {
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
export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction {
    onCreateTransaction {
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
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction {
    onUpdateTransaction {
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
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction {
    onDeleteTransaction {
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
export const onCreateNFT = /* GraphQL */ `
  subscription OnCreateNFT {
    onCreateNFT {
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
export const onUpdateNFT = /* GraphQL */ `
  subscription OnUpdateNFT {
    onUpdateNFT {
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
export const onDeleteNFT = /* GraphQL */ `
  subscription OnDeleteNFT {
    onDeleteNFT {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
