const typeValidationError = 'error:ValidationError';
export class ValidationError extends Error {
  type: string;

  errors: object;

  constructor(errors: object) {
    super('Validation Error');
    this.type = typeValidationError;
    this.errors = errors;
  }

  static isValidationError(e: any) {
    return e.type === typeValidationError;
  }
}

export const a = 'a';
