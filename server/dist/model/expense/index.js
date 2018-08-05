"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = __importDefault(require("mongodb"));
const database_1 = __importDefault(require("../../database"));
const validate_1 = __importDefault(require("./validate"));
function create(rawExpense = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('create', rawExpense);
        const input = Object.assign({ date: rawExpense.date || Date.now(), currency: 'EUR' }, rawExpense);
        validate_1.default(input); // will throw an error on error
        const doc = yield (yield database_1.default).collection('Expense').insertOne(input || { type: 'robin' });
        return doc.ops[0];
    });
}
function get() {
    return __awaiter(this, void 0, void 0, function* () {
        const docs = yield (yield database_1.default)
            .collection('Expense')
            .find()
            .toArray();
        console.log(docs);
        return docs;
    });
}
function remove(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const a = yield (yield database_1.default).collection('Expense').deleteOne({ _id: new mongodb_1.default.ObjectID(id) });
        console.log(a);
    });
}
exports.default = {
    create,
    get,
    remove,
};
//# sourceMappingURL=index.js.map