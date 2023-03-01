import express, { Request, Response, NextFunction, Application } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import { jsonformat } from "./src/interface/interface";
import router from "./src/routes";
dotenv.config();


const app: Application = express();
const port : string | number = Number(process.env.PORT || 3000);


router.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
router.use(express.json());

app.use(helmet());
app.use(cors());

app.use(router);

app.get("/", (req: Request, res: Response, next: NextFunction) => {

  let info: jsonformat[] = [
    {
      state: true,
      name: "TypeScript",
      age: 30,
    },
  ];
  res.json(info);
});

app.get('/hello',(req, res, next) => {
  return res.status(200).json({message: 'hello world'});
})


app.get('/asincrono', async(req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({ message: `Welcome to the cookbook API! \n Endpoints available at http://localhost:${port}/api/v1` })
})


try {
app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});
} catch {
  console.log(`Error occurred:`)
}