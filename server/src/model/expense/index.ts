import mongodb from 'mongodb';
import db from '../../database';

import validate from './validate';

export type ExpenseType = string;

export interface Expense {
  type: ExpenseType;
  description?: string;
  date: Date;
  value: number;
  currency: string;
}

async function create(rawExpense: any = {}): Promise<Expense> {
  console.log('create', rawExpense);
  const input = {
    date: rawExpense.date || Date.now(),
    currency: 'EUR',
    ...rawExpense,
  };
  validate(input); // will throw an error on error

  const doc = await (await db).collection('Expense').insertOne(input || { type: 'robin' });

  return doc.ops[0] as Expense;
}

async function get(): Promise<Expense[]> {
  const docs = await (await db)
    .collection('Expense')
    .find()
    .toArray();
  console.log(docs);
  return docs as Expense[];
}

async function remove(id: string): Promise<void> {
  const a = await (await db).collection('Expense').deleteOne({ _id: new mongodb.ObjectID(id) });
  console.log(a);
}

export default {
  create,
  get,
  remove,
};
