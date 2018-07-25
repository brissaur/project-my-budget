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
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const expense_1 = __importDefault(require("./model/expense"));
const app = express_1.default();
app.use(body_parser_1.default.json());
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('hello world');
});
app.get('/expense', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const expenses = yield expense_1.default.get();
        res.setHeader('content-type', 'application/json');
        res.send(expenses);
    }
    catch (e) {
        // ValidationError
        res.status(e.status || 400).send(e.errors || { error: e.message || 'An error has occured' });
    }
}));
app.post('/expense', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const rawExpense = req.body;
    global.console.log('POST', rawExpense);
    try {
        const expense = yield expense_1.default.create(rawExpense);
        res.setHeader('content-type', 'application/json');
        res.send(expense);
    }
    catch (e) {
        global.console.error(e);
        // ValidationError
        res.status(e.status || 400).send(e.errors || { error: e.message || 'An error has occured' });
    }
}));
app.delete('/expense/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    global.console.log('DELETE', req.params.id);
    try {
        const expense = yield expense_1.default.remove(req.params.id);
        res.setHeader('content-type', 'application/json');
        res.send(expense);
    }
    catch (e) {
        // ValidationError
        res.status(e.status || 400).send(e.errors || { error: e.message || 'An error has occured' });
    }
}));
const PORT = 4000;
app.listen(PORT, 'localhost', () => global.console.log(`Server listening on port ${PORT}`));
//# sourceMappingURL=server.js.map