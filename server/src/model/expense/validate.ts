import validate from 'validate.js';

import { ValidationError } from '../../errors';

const constraints = {
  type: { presence: true },
  date: { presence: true },
  value: { presence: true },
  currency: { presence: true },
};

export default function (object: any) {
  console.log('validating', object);
  const error = validate(object, constraints);
  if (error) {
    throw new ValidationError(error);
  }
}
