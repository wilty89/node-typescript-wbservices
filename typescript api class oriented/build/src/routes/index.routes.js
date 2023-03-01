"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemons = void 0;
const express_1 = require("express");
const pokemons = require("./db.json"); //load our local database file
class Pokemons {
    constructor() {
        this.router = (0, express_1.Router)();
    }
    routes(app) {
        app.route('/pokemons')
            .get((req, res) => {
            res.status(200).send(pokemons);
        });
        /* app.route('/pokemons/:id')
             .get((req: Request, res: Response) => {
                 let id = req.params.id;
                 res.status(200).send(pokemons[id]);
             })*/
    }
}
exports.Pokemons = Pokemons;
