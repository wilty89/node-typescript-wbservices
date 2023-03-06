import { Application, Request, Response, Router } from "express";
import { json } from "stream/consumers";

import pokemons = require("./db.json"); //load our local database file

interface json {
  id: number;
  nombre: string;
  Apellido: string;
  edad: number;
  role: string;
}
const datos: json[] = [
  {
    id: 1,
    nombre: "wilber",
    Apellido: "montero",
    edad: 45,
    role: "ADMIN",
  },
  {
    id: 2,
    nombre: "Raul",
    Apellido: "Valdez",
    edad: 20,
    role: "USERS",
  },
];

export class Pokemons {
  public router = Router();

  async getLinks(req: Request, res: Response) {
    res.send({ estado: "Active", datos });
  }

  async postLink(req: Request, res: Response) {
    datos.push(req.body);
    res.status(201).send({ funca: true, mensaje: "Usuarios Guardados" });
  }

  async putLink(req: Request, res: Response) {
    const ID = parseInt(req.params.id);
    let userIndex = datos.findIndex((user) => user.id === ID);
    datos[userIndex] = req.body;
    res.status(201).send({
      funca: true,
      mensaje: "funciona bien",
    });
  }

  async deleteLink(req: Request, res: Response) {
    const ID = parseInt(req.params.id);
    let userIndex = datos.findIndex((user) => user.id === ID);
    datos.splice(userIndex, 1);
    res.status(201).send({
      funca: true,
      mensaje: "funciona bien",
    });
  }

  public routes(app: Application): void {
    app.route("/pokemons").get((req: Request, res: Response) => {
      res.status(200).send(pokemons);
    });

    /* app.route('/pokemons/:id')
            .get((req: Request, res: Response) => {
                let id = req.params.id;
                res.status(200).send(pokemons[id]);
            })*/
  }
}
