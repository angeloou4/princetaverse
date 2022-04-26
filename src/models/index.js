// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Bookmark, User, NFT, Transaction } = initSchema(schema);

export {
  Bookmark,
  User,
  NFT,
  Transaction
};