import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type BookmarkMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TransactionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NFTMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Bookmark {
  readonly id: string;
  readonly user: string;
  readonly asset: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Bookmark, BookmarkMetaData>);
  static copyOf(source: Bookmark, mutator: (draft: MutableModel<Bookmark, BookmarkMetaData>) => MutableModel<Bookmark, BookmarkMetaData> | void): Bookmark;
}

export declare class Transaction {
  readonly id: string;
  readonly amount: number;
  readonly buyer: string;
  readonly seller?: string | null;
  readonly asset: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Transaction, TransactionMetaData>);
  static copyOf(source: Transaction, mutator: (draft: MutableModel<Transaction, TransactionMetaData>) => MutableModel<Transaction, TransactionMetaData> | void): Transaction;
}

export declare class NFT {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly owner?: string | null;
  readonly address: string;
  readonly onSale?: boolean | null;
  readonly tokenID?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<NFT, NFTMetaData>);
  static copyOf(source: NFT, mutator: (draft: MutableModel<NFT, NFTMetaData>) => MutableModel<NFT, NFTMetaData> | void): NFT;
}

export declare class User {
  readonly id: string;
  readonly email: string;
  readonly address: string;
  readonly privateKey: string;
  readonly coins?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}