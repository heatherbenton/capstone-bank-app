// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Balance, User, Password } = initSchema(schema);

export {
  Balance,
  User,
  Password
};