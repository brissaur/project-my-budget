"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeValidationError = 'error:ValidationError';
class ValidationError extends Error {
    constructor(errors) {
        super('Validation Error');
        this.type = typeValidationError;
        this.errors = errors;
    }
    static isValidationError(e) {
        return e.type === typeValidationError;
    }
}
exports.ValidationError = ValidationError;
exports.a = 'a';
//# sourceMappingURL=errors.js.map