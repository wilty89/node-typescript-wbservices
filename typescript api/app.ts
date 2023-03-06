import express, { Request, Response, NextFunction, Application } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import { jsonformat } from "./src/interface/interface";
import router from "./src/routes";
dotenv.config();

const app: Application = express();

const port: string | number = Number(process.env.PORT || 3000);

router.use(express.urlencoded({ extended: false }));

router.use(express.json());

app.use(helmet());
app.use(cors());

app.use(router);

app.get("/hello", (req, res, next) => {
  return res.status(200).json({ message: "hello world" });
});

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  let info: jsonformat[] = [
    {
      state: true,
      name: "TypeScript",
      age: 10,
    }, {
      state: true,
      name: "Javascript",
      age: 15,
    }, {
      state: true,
      name: "Delphi",
      age: 30,
    }, {
      state: true,
      name: "Fortran",
      age: 32,
    }, {
      state: true,
      name: "Cobol",
      age: 41,
    }, {
      state: true,
      name: "Go",
      age: 16,
    },
  ];

  res.json(info);
});


app.get(
  "/example",
  async (req: Request, res: Response): Promise<Response> => {
    return res
      .status(200)
      .send({
        message: `Welcome to the exmple API! \n Endpoints available at http://localhost:${port}`,
      });
  }
);

try {
  app.listen(port, () => {
    console.log(
      `Application is running on port ${port}.`
    );
  });
} catch {
  console.log(`Error occurred:`);
}
