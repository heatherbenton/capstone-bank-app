import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type BalanceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PasswordMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Balance {
  readonly id: string;
  readonly balance?: number;
  readonly User?: User;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Balance, BalanceMetaData>);
  static copyOf(source: Balance, mutator: (draft: MutableModel<Balance, BalanceMetaData>) => MutableModel<Balance, BalanceMetaData> | void): Balance;
}

export declare class User {
  readonly id: string;
  readonly name?: string;
  readonly email?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Password {
  readonly id: string;
  readonly password?: string;
  readonly Users?: User;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Password, PasswordMetaData>);
  static copyOf(source: Password, mutator: (draft: MutableModel<Password, PasswordMetaData>) => MutableModel<Password, PasswordMetaData> | void): Password;
}