"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_routes_1 = require("./routes/index.routes");
const error_1 = require("./middlewares/error");
class App {
    constructor( /*private readonly port: (string | number) = process.env.SERVER_PORT || 3000*/) {
        this.pokeRoutes = new index_routes_1.Pokemons();
        this.APPLICATION_RUNNING = 'application is running on:';
        this.app = (0, express_1.default)();
        this.routes();
        this.config();
    }
    config() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ limit: "50mb", extended: true }));
        this.app.use((0, cors_1.default)({ origin: '*' }));
        this.app.use(error_1.errorHandler);
        this.app.get('*', error_1.notFoundHandler);
    }
    routes() {
        //this.app.use("");
        this.app.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            return res.status(200).send({ message: `Welcome to the wilber` });
        }));
        this.pokeRoutes.routes(this.app);
    }
}
exports.default = new App().app;
//const server= new app()
//server.start()
