"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
async function start() {
    dotenv_1.default.config();
    const port = process.env.PORT || 3000;
    const app = (0, express_1.default)();
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(express_1.default.json());
    app.set('view engine', 'ejs');
    app.set('views', path_1.default.join(__dirname, '/views'));
    app.get('/', (req, res) => {
        res.render('home');
    });
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
}
start();
//# sourceMappingURL=server.js.map