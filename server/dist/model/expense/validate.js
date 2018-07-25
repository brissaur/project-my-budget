"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_js_1 = __importDefault(require("validate.js"));
const errors_1 = require("../../errors");
const constraints = {
    type: { presence: true },
    date: { presence: true },
    value: { presence: true },
    currency: { presence: true },
};
function default_1(object) {
    console.log('validating', object);
    const error = validate_js_1.default(object, constraints);
    if (error) {
        throw new errors_1.ValidationError(error);
    }
}
exports.default = default_1;
//# sourceMappingURL=validate.js.map