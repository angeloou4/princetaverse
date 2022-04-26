import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type BookmarkMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NFTMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TransactionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Bookmark {
  readonly id: string;
  readonly user?: User | null;
  readonly asset?: NFT | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly bookmarkUserId?: string | null;
  readonly bookmarkAssetId?: string | null;
  constructor(init: ModelInit<Bookmark, BookmarkMetaData>);
  static copyOf(source: Bookmark, mutator: (draft: MutableModel<Bookmark, BookmarkMetaData>) => MutableModel<Bookmark, BookmarkMetaData> | void): Bookmark;
}

export declare class User {
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class NFT {
  readonly id: string;
  readonly name?: string | null;
  readonly price?: string | null;
  readonly owner?: string | null;
  readonly address?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<NFT, NFTMetaData>);
  static copyOf(source: NFT, mutator: (draft: MutableModel<NFT, NFTMetaData>) => MutableModel<NFT, NFTMetaData> | void): NFT;
}

export declare class Transaction {
  readonly id: string;
  readonly seller?: User | null;
  readonly buyer?: User | null;
  readonly asset?: NFT | null;
  readonly amount?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly transactionSellerId?: string | null;
  readonly transactionBuyerId?: string | null;
  readonly transactionAssetId?: string | null;
  constructor(init: ModelInit<Transaction, TransactionMetaData>);
  static copyOf(source: Transaction, mutator: (draft: MutableModel<Transaction, TransactionMetaData>) => MutableModel<Transaction, TransactionMetaData> | void): Transaction;
}