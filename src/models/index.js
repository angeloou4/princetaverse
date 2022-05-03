// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Bookmark, Transaction, NFT, User } = initSchema(schema);

export {
  Bookmark,
  Transaction,
  NFT,
  User
};