import express,{Request,Response} from "express";

import cors from "cors";
import { Pokemons } from "./routes/index.routes";
import { errorHandler, notFoundHandler } from "./middlewares/error";


class App {
    public app: express.Application;
    public pokeRoutes: Pokemons = new Pokemons();
    private readonly APPLICATION_RUNNING = 'application is running on:';

    constructor(/*private readonly port: (string | number) = process.env.SERVER_PORT || 3000*/) {
        this.app = express();
        this.routes()
        this.config();
        
    }

    config(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({ limit: "50mb", extended: true }));
        this.app.use(cors({ origin: '*' }));
      this.app.use(errorHandler);
        this.app.get('*',notFoundHandler);
    }
    

    routes (){
        //this.app.use("");
        this.app.get('/', async(req: Request, res: Response): Promise<Response> => {
            return res.status(200).send({ message: `Welcome to the wilber` })
          });
        this.pokeRoutes.routes(this.app);
        
   }
   
   /*
   listen(): void {
    this.app.listen(this.port);
    console.info(`${this.APPLICATION_RUNNING} ${this.port}`);
  }
*/

  /* start(){
        this.app.listen(3000, ( ) => {
            console. log(`server on port', this.app.get('port")`);
        })
}*/
}

export default new App().app;

//const server= new app()
//server.start()