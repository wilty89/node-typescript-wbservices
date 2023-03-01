import { Application, Request, Response, Router } from "express";

import pokemons = require('./db.json'); //load our local database file

export class Pokemons {

    public router= Router();

    public routes(app: Application): void { 
                
        app.route('/pokemons')
            .get((req: Request, res: Response) => {
                res.status(200).send(pokemons);
            })

       /* app.route('/pokemons/:id')
            .get((req: Request, res: Response) => {
                let id = req.params.id;
                res.status(200).send(pokemons[id]);
            })*/
    }
}