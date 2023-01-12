"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customers_1 = __importDefault(require("./routers/customers"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/customers', customers_1.default);
app.get('/', (req, res) => {
    try {
        res.send('from index');
    }
    catch (error) {
        res.status(500);
    }
});
app.listen(process.env.APP_PORT, () => console.log(`server is listening on port ${process.env.APP_PORT}`));
